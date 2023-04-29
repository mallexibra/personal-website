const FormLabel = ({ id, children, text }) => {
  return (
    <label className={`block`} htmlFor={id}>
      <span className='font-semibold text-teal-600 text-sm my-1 block '>
        {text}
      </span>
      {children}
    </label>
  );
};

export default FormLabel;
