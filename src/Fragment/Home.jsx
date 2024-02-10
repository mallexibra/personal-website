import { useEffect, useState } from "react";
import Description from "../Components/Description";
import Person from "../Components/Person";
import Navbar from "../Layout/Navbar";
import Container from "../Layout/Container";
import Passion from "../Components/Passion";
import Footer from "../Layout/Footer";
import Wrapper from "../Layout/Wrapper";
import ButtonLink from "../Components/ButtonLink";

const Home = () => {
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
      <Navbar home={true} />
      <Wrapper className='dark:bg-gray-900 bg-white pb-10 min-h-screen flex items-center'>
        <Container>
          <Person>
            <Passion />
          </Person>
          <Description />
          <ButtonLink
            primary={false}
            url="/cvmallexibra.pdf"
            download="CV-Mallexibra"
          >
            Get In Touch
          </ButtonLink>
          <ButtonLink
            primary={true}
            url={"https://www.linkedin.com/in/mallexibra/"}
          >
            Hire Me Now
          </ButtonLink>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Home;
