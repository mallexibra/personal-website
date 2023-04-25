import CommingSoon from "../Layout/ComingSoon";
import Navbar from "../Layout/Navbar";

const Portfolio = () => {
  return (
    <>
      <Navbar portfolio={true} />
      <CommingSoon>Portfolio Page</CommingSoon>
    </>
  );
};

export default Portfolio;
