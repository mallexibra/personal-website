const DescriptionPage = ({ className, title, children }) => {
  return (
    <div>
      <h1 className='font-bold text-lg'>{title}</h1>
      <p className={`${className} text-sm break-words`}>{children}</p>
    </div>
  );
};

export default DescriptionPage;
