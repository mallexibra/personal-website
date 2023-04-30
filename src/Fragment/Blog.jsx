import CardBlog from "../Components/CardBlog";
import DescriptionPage from "../Components/DescriptionPage";
import Title from "../Components/Title";
import Container from "../Layout/Container";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import Wrapper from "../Layout/Wrapper";
import { useState, useEffect } from "react";

const Blog = () => {
  const [tema, setTema] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const fromStorage = localStorage.getItem("theme");
      if (fromStorage) {
        setTema(fromStorage === "true");
      }
    }, 100);
    return () => clearInterval(interval);
  }, [tema]);
  const journal = [
    {
      title: "Belajar Function Javascript",
      src: "https://www.youtube.com/embed/FNJHMzqrw_w",
      description: "Belajar function jadi mudah deh hehe",
    },

    {
      title: "Roadmap Menjadi Front-end Developer",
      src: "https://www.youtube.com/embed/QT2jRsZANAU",
      description:
        "Sebelum menjadi front-end developer, kamu harus tau roadmapnya biar gak salah jalan hehe",
    },

    {
      title: "Awam Dunia IT, Tapi Kuliah Jurusan IT?",
      src: "https://www.youtube.com/embed/tJ7C2Qm2veM",
      description:
        "Gapapa awam Dunia IT, yang terpenting masih ada kemauan untuk belajar hehe",
    },
    {
      title: "5 Tips Untuk Programmer Pemula",
      src: "https://www.youtube.com/embed/lN2xWUn07q8",
      description: "5 Tips dari saya untuk Programmer Pemula",
    },
  ];
  return (
    <div className={`${tema ? "dark" : ""} scrollbar-hide font-poppins`}>
      <Navbar blog={true} />
      <Wrapper className='dark:bg-gray-900 bg-white min-h-screen'>
        <Title
          className='text-center dark:text-white text-2xl p-4 text-gray-900'
          text='BLOG PAGE'
        />
        <Container className='bg-gradient-to-br from-slate-100  to-teal-200 dark:from-white dark:to-teal-200 min-h-screen flex flex-col justify-center py-2 px-10 rounded-t-3xl'>
          <Title
            className='text-white bg-teal-600 max-w-max text-2xl px-2 my-4'
            text='My Blog and Journal'
          />
          <DescriptionPage className='leading-relaxed text-slate-900 font-medium'>
            You can see some of my blogs or journals on the cards below
          </DescriptionPage>
          <div className='my-10 flex gap-2 flex-wrap justify-center w-full '>
            {journal.map((item) => {
              return (
                <CardBlog
                  title={item.title}
                  src={item.src}
                  description={item.description}
                />
              );
            })}
          </div>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Blog;
