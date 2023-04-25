const CommingSoon = ({ children }) => {
  return (
    <div className='h-screen w-full bg-zinc-900 text-slate-900 flex flex-col items-center justify-center'>
      <h1 className='font-extrabold text-4xl bg-gradient-to-br from-teal-400 to-indigo-700 bg-clip-text text-transparent'>
        ...COMMING SOON...
      </h1>
      <p className='font-semibold text-white my-4 text-center rounded-sm'>
        {children}
      </p>
    </div>
  );
};

export default CommingSoon;
