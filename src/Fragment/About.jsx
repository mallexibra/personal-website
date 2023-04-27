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
    { name: "HTML5", style: "orange" },
    { name: "CSS3", style: "sky" },
    { name: "SCSS", style: "rose" },
    { name: "JavaScript", style: "yellow" },
    { name: "PHP", style: "indigo" },
    { name: "MySQL", style: "orange" },
    { name: "ReactJS", style: "cyan" },
    { name: "TailwindCSS", style: "blue" },
    { name: "Bootsrap", style: "pink" },
    { name: "NodeJS", style: "green" },
    { name: "VSCode", style: "sky" },
    { name: "Github", style: "slate" },
    { name: "Linux", style: "amber" },
    { name: "Figma", style: "red" },
    { name: "Inkscape", style: "gray" },
    { name: "Notion", style: "stone" },
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
      <Wrapper className='bg-gray-900 dark:bg-white min-h-screen'>
        <Title
          className='text-center text-white text-2xl p-4 dark:text-gray-900'
          text='ABOUT PAGE'
        />
        <Container className='bg-gradient-to-br from-white to-teal-200 min-h-screen flex flex-col justify-center py-2 px-10 rounded-t-3xl'>
          <Title
            className='text-white bg-teal-600 w-max text-2xl px-2 my-4'
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
            {mySkill.map(({ name, style }) => {
              return (
                <Skill
                  className={`bg-${style}-600 outline-${style}-400 font-medium`}
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
