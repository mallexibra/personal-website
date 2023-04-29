import { useState, useEffect } from "react";
import Navbar from "../Layout/Navbar";
import Wrapper from "../Layout/Wrapper";
import Title from "../Components/Title";
import Container from "../Layout/Container";
import Footer from "../Layout/Footer";
import DescriptionPage from "../Components/DescriptionPage";
import CardContact from "../Components/CardContact";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import FormContact from "../Layout/FormContact";

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
      <Wrapper className='dark:bg-gray-900 bg-white min-h-screen'>
        <Title
          className='text-center dark:text-white text-2xl p-4 text-gray-900'
          text='CONTACT PAGE'
        />
        <Container className=' bg-gradient-to-br from-slate-100 dark:from-white dark:to-teal-200 to-teal-200 min-h-screen flex flex-col py-4 px-10 rounded-t-3xl'>
          <Title
            className='text-white bg-teal-600 w-max text-2xl px-2 my-4'
            text='Contact Me'
          />
          <DescriptionPage className='leading-relaxed text-slate-900 font-medium'>
            You can contact me via the cardlink below or send feedback via the
            form provided
          </DescriptionPage>
          <div className='mt-10 mb-3 flex justify-center items-center gap-3'>
            <CardContact
              element={<SiGmail />}
              url='mailto:mallexibra@gmail.com'
            />
            <CardContact
              element={<AiFillInstagram />}
              url='https://www.instagram.com/mallexibra/'
            />
            <CardContact
              element={<IoLogoWhatsapp />}
              url='https://wa.me/6283857671574'
            />
          </div>
          <FormContact />
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Contact;
