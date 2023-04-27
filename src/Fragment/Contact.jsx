import { useState, useEffect } from "react";
import Navbar from "../Layout/Navbar";
import Wrapper from "../Layout/Wrapper";
import Title from "../Components/Title";
import Container from "../Layout/Container";
import Footer from "../Layout/Footer";
import DescriptionPage from "../Components/DescriptionPage";

const Contact = () => {
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
      <Navbar contact={true} />
      <Wrapper className='bg-gray-900 dark:bg-white min-h-screen'>
        <Title
          className='text-center text-white text-2xl p-4 dark:text-gray-900'
          text='CONTACT PAGE'
        />
        <Container className='bg-gradient-to-br from-white to-teal-200 min-h-screen flex flex-col justify-center py-2 px-10 rounded-t-3xl'>
          <Title
            className='text-white bg-teal-600 w-max text-2xl px-2 my-4'
            text='Contact Me'
          />
          <DescriptionPage className='leading-relaxed text-slate-900 font-medium'>
            You can call me with account in bottom
          </DescriptionPage>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Contact;
