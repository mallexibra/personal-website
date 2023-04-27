const Wrapper = ({ className, children }) => {
  return <div className={`${className} w-full m-0 pb-10`}>{children}</div>;
};

export default Wrapper;
