const Wrapper = ({ className, children }) => {
  return <div className={`${className} w-full m-0`}>{children}</div>;
};

export default Wrapper;
