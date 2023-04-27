import { useState, useEffect } from "react";
import Navbar from "../Layout/Navbar";
import Wrapper from "../Layout/Wrapper";
import Container from "../Layout/Container";
import Title from "../Components/Title";
import Footer from "../Layout/Footer";
import DescriptionPage from "../Components/DescriptionPage";
import Showcase from "../Components/Showcase";

const Portfolio = () => {
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

  const myProject = [
    {
      title: "Todo App",
      desc: "Sebuah website untuk to do list sederhana harian anda",
      img: "/image.png",
      url: "slkadnsakl.com",
      tech: ["ReactJS", "TailwindCSS"],
    },
  ];
  return (
    <div className={`${tema ? "dark" : ""} scrollbar-hide`}>
      <Navbar portfolio={true} />
      <Wrapper className='bg-gray-900 dark:bg-white min-h-screen'>
        <Title
          className='text-center text-white text-2xl p-4 dark:text-gray-900'
          text='PORTFOLIO PAGE'
        />
        <Container className='bg-gradient-to-br from-white to-teal-200 min-h-screen flex flex-col justify-center py-2 px-10 rounded-t-3xl'>
          <Title
            className='bg-teal-600 text-white text-2xl w-max px-3'
            text='My Portfolio'
          />
          <DescriptionPage className='text-slate-900 font-medium my-3'>
            Showcase of my project on website development{" "}
          </DescriptionPage>
          {myProject.map((item) => {
            return (
              <Showcase
                title={item.title}
                description={item.desc}
                img={item.img}
                url={item.url}
                tech={item.tech}
              />
            );
          })}
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Portfolio;
