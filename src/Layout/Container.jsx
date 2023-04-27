const Container = ({ children, className }) => {
  return (
    <div className={`${className} w-full max-w-3xl mx-auto`}>{children}</div>
  );
};
export default Container;
