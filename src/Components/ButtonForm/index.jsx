const Button = ({ handleButton, type, children }) => {
  return (
    <button
      onClick={handleButton}
      type={type}
      className='p-3 bg-teal-600 w-full rounded-md font-bold text-white drop-shadow-xl ring-1 ring-teal-600 hover:bg-white hover:text-teal-600 transition-all duration-300 text-sm'
    >
      {children}
    </button>
  );
};

export default Button;
