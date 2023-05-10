const Journey = ({ name, desc, year }) => {
  return (
    <div className='flex items-center gap-2'>
      <span className='flex justify-center items-center w-5 h-5 bg-teal-700 rounded-full'>
        <span className='block w-3 h-3 bg-teal-300 rounded-full'></span>
      </span>
      <div className='text-slate-900'>
        <h1 className='font-bold'>{name}</h1>
        <p className='inline-block text-xs opacity-50 mr-2'>{year}</p>
        <p className='inline-block text-xs font-semibold'>{desc}</p>
      </div>
    </div>
  );
};

export default Journey;
