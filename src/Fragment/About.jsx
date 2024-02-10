import { useState, useEffect } from "react";
import DescriptionPage from "../Components/DescriptionPage";
import Skill from "../Components/Skill";
import Title from "../Components/Title";
import Container from "../Layout/Container";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import Wrapper from "../Layout/Wrapper";
import Journey from "../Layout/Journey";
import CardBlog from "../Components/CardBlog";
import { skill, school, certification, experience } from "../utils/datas";

const About = () => {
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
            Mallexibra. I really like website development, especially in the appearance or Frontend
            Developer. I also have soft skills such as being able to communicate well,
            working in a team, learning well.
          </DescriptionPage>
          <Title
            className='pt-10 pb-3 text-teal-600 drop-shadow-md'
            text='Skill for Work'
          />
          <DescriptionPage className='flex flex-wrap gap-2'>
            {skill.map((item, index) => {
              return (
                <Skill
                  key={index}
                  className={`bg-teal-500 border-2 outline-none border-teal-600 font-medium`}
                >
                  {item}
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
              Nuxt 3
            </Skill>
          </DescriptionPage>
          <Title
            className='pt-10 pb-3 text-teal-600 drop-shadow-md'
            text='Education Trail'
          />
          <DescriptionPage>
            <div className='flex flex-col gap-y-3 relative justify-center'>
              <span className='block absolute w-1 h-[68%] bg-teal-300 left-2'></span>
              {school.map(({ id, name, desc, year }) => {
                return <Journey key={id} name={name} desc={desc} year={year} />;
              })}
            </div>
          </DescriptionPage>
          <Title
            className='pt-10 pb-3 text-teal-600 drop-shadow-md'
            text='Experience'
          />
          <DescriptionPage>
            <div className='flex flex-col gap-y-3 relative justify-center'>
              <span className='block absolute w-1 h-[66%] bg-teal-300 left-2'></span>
              {experience.map(({ id, name, desc, year }) => {
                return <Journey key={id} name={name} desc={desc} year={year} />;
              })}
            </div>
          </DescriptionPage>
          <Title
            className='pt-10 pb-3 text-teal-600 drop-shadow-md'
            text='Certification'
          />
          <DescriptionPage>
            <div className='flex flex-wrap justify-center gap-10'>
              {certification.map(({ title, image, url }, index) => {
                return (
                  <CardBlog key={index} title={title} image={image} url={url} />
                );
              })}
            </div>
          </DescriptionPage>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default About;
