import { CiLocationArrow1 } from "react-icons/ci";

const Arrow = () => {
  return (
    <div className='absolute -translate-x-[120px]'>
      <div
        className={`absolute animate-[wiggle_3s_ease-in-out_infinite_alternate] text-white flex gap-2 justify-end items-end flex-col z-10`}
      >
        <CiLocationArrow1 className='text-black dark:text-white' />
        <h1 className='bg-teal-500 text-xs px-3 py-1 rounded-md outline outline-1 outline-slate-300'>
          Content Creator
        </h1>
      </div>
      <div
        className={`absolute animate-[wiggle2_3s_ease-in-out_infinite_alternate] text-white flex gap-2 justify-start items-start flex-col z-10`}
      >
        <CiLocationArrow1 className='rotate-[265deg] text-black dark:text-white' />
        <h1 className='bg-teal-500 text-xs px-3 py-1 rounded-md outline outline-1 outline-slate-300'>
          Front End Developer
        </h1>
      </div>
      <div
        className={`absolute animate-[wiggle3_3s_ease-in-out_infinite_alternate] text-white flex gap-2 justify-start items-start flex-col z-10`}
      >
        <CiLocationArrow1 className='rotate-[265deg] text-black dark:text-white' />
        <h1 className='bg-teal-500 text-xs px-3 py-1 rounded-md outline outline-1 outline-slate-300'>
          Student
        </h1>
      </div>
    </div>
  );
};

export default Arrow;
