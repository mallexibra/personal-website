import { useState, useEffect } from "react";
import Navbar from "../Layout/Navbar";
import Wrapper from "../Layout/Wrapper";
import Container from "../Layout/Container";
import Title from "../Components/Title";
import Footer from "../Layout/Footer";
import DescriptionPage from "../Components/DescriptionPage";
import Showcase from "../Components/Showcase";
import { Link, Outlet } from "react-router-dom";

const Portfolio = () => {
  const [tema, setTema] = useState(false);
  const [pathName, setPathName] = useState(window.location.pathname);

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
          <div className='w-full flex justify-center items-center gap-5 my-7'>
            <Link
              className={`${
                pathName == "/portfolio/code"
                  ? "bg-teal-600 text-white"
                  : "text-teal-600"
              } border border-teal-600 drop-shadow-md text-sm font-medium py-1 w-32 text-center rounded-md`}
              to={"code"}
              onClick={() => {
                setPathName("/portfolio/code");
              }}
            >
              Code
            </Link>
            <Link
              className={`${
                pathName == "/portfolio/design"
                  ? "bg-teal-600 text-white"
                  : "text-teal-600"
              } border border-teal-600 drop-shadow-md text-sm font-medium py-1 w-32 text-center rounded-md`}
              to={"design"}
              onClick={() => {
                setPathName("/portfolio/design");
              }}
            >
              Design
            </Link>
          </div>
          <Outlet />
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Portfolio;
