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
      id: 1,
      title: "Website Personal",
      desc: "A modern portfolio website from me to introduce my expertise",
      img: "/website-personal.png",
      url: "https://website-five-cyan-50.vercel.app/",
      tech: ["ReactJS", "TailwindCSS", "Web Storage"],
    },
    {
      id: 2,
      title: "PUTI Online",
      desc: "PUTI Online Is a service for informatics engineering students to be able to submit complaints about matters in accordance with the categories on this website.",
      img: "/puti-online.png",
      url: "https://mallexibra.github.io/PUTIOnline/",
      tech: ["HTML", "SCSS"],
    },
    {
      id: 3,
      title: "Website Portfolio",
      desc: "Portfolio Website for my own Branding",
      img: "/mallexibra-website.png",
      url: "https://mallexibra.github.io/mallexibra-website/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      title: "Bookshelf Apps",
      desc: "Bookshelf is the final project of a Belajar Membuat Front-End Web untuk Pemula from Dicoding.com",
      img: "/bookshelf.png",
      url: "https://mallexibra.github.io/bookshelfApps/",
      tech: ["HTML", "CSS", "JavaScript", "Web Storage"],
    },
    {
      id: 5,
      title: "Todo App",
      desc: "Todo App is a website that can be used to create your todo list.",
      img: "/image.png",
      url: "https://todo-app-pearl-tau.vercel.app/",
      tech: ["ReactJS", "TailwindCSS"],
    },
  ];

  return (
    <div className={`${tema ? "dark" : ""} scrollbar-hide font-poppins`}>
      <Navbar portfolio={true} />
      <Wrapper className='dark:bg-gray-900 bg-white min-h-screen'>
        <Title
          className='text-center dark:text-white text-2xl p-4 text-gray-900'
          text='PORTFOLIO PAGE'
        />
        <Container className='bg-gradient-to-br from-slate-100 dark:from-white dark:to-teal-200 to-teal-200 min-h-screen flex flex-col p-10 rounded-t-3xl'>
          <Title
            className='bg-teal-600 text-white text-2xl w-max px-3'
            text='My Portfolio'
          />
          <DescriptionPage className='text-slate-900 font-medium my-3'>
            The following is a portfolio of projects that I have worked on
          </DescriptionPage>
          <div className='flex gap-3 justify-around items-center flex-wrap'>
            {myProject.map((item) => {
              return (
                <Showcase
                  key={item.id}
                  title={item.title}
                  description={item.desc}
                  img={item.img}
                  url={item.url}
                  tech={item.tech}
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

export default Portfolio;
