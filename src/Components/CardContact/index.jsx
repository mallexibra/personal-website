const CardContact = ({ element, url }) => {
  return (
    <a
      href={url}
      className='p-3 bg-teal-600 hover:bg-teal-400 transition-all duration-300 ease-in-out rounded-sm w-max flex justify-center flex-col items-center drop-shadow-xl text-white'
    >
      {element}
    </a>
  );
};

export default CardContact;
