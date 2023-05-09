import { useState, useEffect } from "react";
import DescriptionPage from "../Components/DescriptionPage";
import Skill from "../Components/Skill";
import Title from "../Components/Title";
import Container from "../Layout/Container";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import Wrapper from "../Layout/Wrapper";

const About = () => {
  const mySkill = [
    { id: 1, name: "HTML5" },
    { id: 2, name: "CSS3" },
    { id: 3, name: "SCSS" },
    { id: 4, name: "JavaScript" },
    { id: 5, name: "PHP" },
    { id: 6, name: "MySQL" },
    { id: 7, name: "ReactJS" },
    { id: 8, name: "TailwindCSS" },
    { id: 9, name: "Bootsrap" },
    { id: 10, name: "NodeJS" },
    { id: 11, name: "VSCode" },
    { id: 12, name: "Github" },
    { id: 13, name: "Linux" },
    { id: 14, name: "Figma" },
    { id: 15, name: "Inkscape" },
    { id: 16, name: "Notion" },
  ];

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
  return (
    <div className={`${tema ? "dark" : ""} scrollbar-hide font-poppins`}>
      <Navbar about={true} />
      <Wrapper className='dark:bg-gray-900 bg-white min-h-screen'>
        <Title
          className='text-center dark:text-white text-2xl p-4 text-gray-900'
          text='ABOUT PAGE'
        />
        <Container className='bg-gradient-to-br from-slate-100  to-teal-200 dark:from-white dark:to-teal-200 min-h-screen flex flex-col py-4 px-10 rounded-t-3xl'>
          <Title
            className='text-white bg-teal-600 max-w-max text-2xl px-2 my-4'
            text="Hi, I'm Maulana Malik Ibrahim"
          />
          <DescriptionPage className='leading-relaxed text-slate-900 font-medium'>
            My name is Maulana Malik Ibrahim, You can call me as Malik or
            Mallexibra. I have name in Social Media as a Mallexibra. I really
            like website development, especially in the appearance or Frontend
            Developer. I have Web Development skills like HTML, SCSS, CSS,
            JavaScript, Jquery, ReactJS, Bootsrap, TailwindCSS PHP, Git, Github.
            I also have soft skills such as being able to communicate well,
            working in a team, learning well.
          </DescriptionPage>
          <Title
            className='pt-10 pb-3 text-teal-600 drop-shadow-md'
            text='Skill for Work'
          />
          <DescriptionPage className='flex flex-wrap gap-2'>
            {mySkill.map(({ name, id }) => {
              return (
                <Skill
                  key={id}
                  className={`bg-slate-500 border-2 border-slate-600 font-medium`}
                >
                  {name}
                </Skill>
              );
            })}
          </DescriptionPage>
          <Title
            className='pt-10 pb-3 text-teal-600 drop-shadow-md'
            text="Current Technology  I'm studying"
          />
          <DescriptionPage className='flex gap-2'>
            <Skill
              className={`bg-cyan-600 outline-cyan-400 font-medium animate-pulse`}
            >
              ReactJS
            </Skill>
            <Skill
              className={`bg-blue-600 outline-blue-400 font-medium animate-pulse`}
            >
              Docker Container
            </Skill>
          </DescriptionPage>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default About;
