import CommingSoon from "../Layout/ComingSoon";
import Navbar from "../Layout/Navbar";

const About = () => {
  return (
    <>
      <Navbar about={true} />
      <CommingSoon>About Page</CommingSoon>
    </>
  );
};

export default About;
