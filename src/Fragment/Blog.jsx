import CommingSoon from "../Layout/ComingSoon";
import Navbar from "../Layout/Navbar";

const Blog = () => {
  return (
    <>
      <Navbar blog={true} />
      <CommingSoon>Blog Page</CommingSoon>
    </>
  );
};

export default Blog;
