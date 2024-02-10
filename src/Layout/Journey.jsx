const Journey = ({ name, desc, year }) => {
  return (
    <div className='flex items-center gap-2'>
      <span className='flex justify-center items-center w-5 h-5 bg-teal-700 rounded-full'>
        <span className='block w-3 h-3 bg-teal-300 rounded-full'></span>
      </span>
      <div className='text-slate-900 w-full'>
        <h1 className='font-bold leading-relaxed'>{name}</h1>
        <div>
          <p className='inline-block text-xs opacity-50 mr-2 leading-relaxed'>
            {year} <span className='font-semibold'>{desc}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journey;
