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

  const school = [
    {
      id: 1,
      name: "POLITEKNIK NEGERI BANYUWANGI",
      desc: "D4 Teknologi Rekayasa Perangkat Lunak",
      year: "2022 - present",
    },
    {
      id: 2,
      name: "SMK NEGERI KALIBARU",
      desc: "Teknik Komputer dan Jaringan",
      year: "2019 - 2022",
    },
  ];

  const certification = [
    {
      title: "CSS HackerRank",
      image: "/csshackerrank.png",
      url: "https://www.hackerrank.com/certificates/6c78aac32071",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      image: "/dasarweb.png",
      url: "https://www.dicoding.com/certificates/JMZVG4943ZN9",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      image: "/dasarweb.png",
      url: "https://www.dicoding.com/certificates/JMZVG4943ZN9",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      image: "/dasarjs.png",
      url: "https://www.dicoding.com/certificates/6RPNWKVJRP2M",
    },
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      image: "/frontend.png",
      url: "https://www.dicoding.com/certificates/MEPJEWJWWX3V",
    },
  ];

  const experience = [
    {
      id: 1,
      name: "PKL Desain Grafis",
      desc: "Variant Printing & Offset",
      year: "2020 - 2021",
    },
    {
      id: 2,
      name: "Ketua MPK",
      desc: "SMK Negeri Kalibaru",
      year: "2020 - 2021",
    },
    {
      id: 3,
      name: "Ketua OSIS",
      desc: "SMK Negeri Kalibaru",
      year: "2019 - 2020",
    },
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
                  className={`bg-teal-500 border-2 outline-none border-teal-600 font-medium`}
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
              ChakraUI
            </Skill>
          </DescriptionPage>
          <Title
            className='pt-10 pb-3 text-teal-600 drop-shadow-md'
            text='Education Trail'
          />
          <DescriptionPage>
            <div className='flex flex-col gap-y-3 relative justify-center'>
              <span className='block absolute w-1 h-[70%] bg-teal-300 left-2'></span>
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
              <span className='block absolute w-1 h-[68%] bg-teal-300 left-2'></span>
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
              {certification.map(({ index, title, image, url }) => {
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
