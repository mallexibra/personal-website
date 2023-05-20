import DescriptionPage from "../Components/DescriptionPage";
import Title from "../Components/Title";
import Container from "../Layout/Container";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import Wrapper from "../Layout/Wrapper";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Blog = () => {
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
      <Navbar blog={true} />
      <Wrapper className='dark:bg-gray-900 bg-white min-h-screen'>
        <Title
          className='text-center dark:text-white text-2xl p-4 text-gray-900'
          text='BLOG PAGE'
        />
        <Container className='bg-gradient-to-br from-slate-100  to-teal-200 dark:from-white dark:to-teal-200 min-h-screen flex flex-col py-2 px-10 rounded-t-3xl'>
          <Title
            className='text-white bg-teal-600 max-w-max text-2xl px-2 my-4'
            text='My Blog and Journal'
          />
          <DescriptionPage className='leading-relaxed text-slate-900 font-medium'>
            You can see some of my blogs or journals on the cards below
          </DescriptionPage>
          <div className='w-full flex justify-center items-center gap-5 my-7'>
            <Link
              className={`${
                pathName == "/blog/journal"
                  ? "bg-teal-600 text-white"
                  : "text-teal-600"
              } border border-teal-600 drop-shadow-md text-sm font-medium py-1 w-32 text-center rounded-md`}
              to={"journal"}
              onClick={() => {
                setPathName("/blog/journal");
              }}
            >
              Journal
            </Link>
            <Link
              className={`${
                pathName == "/blog/book"
                  ? "bg-teal-600 text-white"
                  : "text-teal-600"
              } border border-teal-600 drop-shadow-md text-sm font-medium py-1 w-32 text-center rounded-md`}
              to={"book"}
              onClick={() => {
                setPathName("/blog/book");
              }}
            >
              Book
            </Link>
          </div>
          <Outlet />
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Blog;
