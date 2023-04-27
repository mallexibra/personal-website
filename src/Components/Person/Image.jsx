const Image = ({ children }) => {
  return (
    <div className='w-56 h-56 drop-shadow-2xl bg-cover bg-[-15px] bg-[url("/profile.png")] relative'>
      {children}
    </div>
  );
};

export default Image;
