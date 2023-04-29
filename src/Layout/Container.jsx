const Container = ({ children, className }) => {
  return (
    <div
      className={`${className} w-full max-w-3xl mx-auto md:pr-20 min-[850px]:pr-10`}
    >
      {children}
    </div>
  );
};
export default Container;
