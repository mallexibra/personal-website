import { useEffect, useState } from "react";
import Button from "../Components/Button";
import Description from "../Components/Description";
import Person from "../Components/Person";
import Navbar from "../Layout/Navbar";
import Container from "./Container";
import Passion from "../Components/Passion";

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
    <div className={tema ? "dark" : ""}>
      <Navbar home={true} />
      <Container className='dark:bg-gray-900 bg-white min h-screen'>
        <Person>
          <Passion />
        </Person>
        <Description />
        <Button primary={false} url={"https://www.youtube.com/@mallexibra/"}>
          Get In Touch
        </Button>
        <Button primary={true} url={"https://www.linkedin.com/in/mallexibra/"}>
          Hire Me Now
        </Button>
      </Container>
    </div>
  );
};

export default Home;
