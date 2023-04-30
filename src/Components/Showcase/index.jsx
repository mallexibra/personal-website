import Skill from "../Skill";

const Showcase = ({
  title = "Project",
  description = "This is my project hehe",
  img,
  tech,
  url,
}) => {
  let id = 1;
  return (
    <a
      href={url}
      target='_blank'
      className='block outline outline-1 sm:w-2/5 text-slate-800 hover:scale-105 transition-all duration-500 ease-in-out my-3 drop-shadow-xl p-3 rounded-md bg-white outline-teal-600'
    >
      <div className='rounded-md overflow-hidden '>
        <img className='block' src={img} alt='Showcase Project' />
      </div>
      <div className='py-3 flex gap-2 flex-wrap'>
        {tech.map((item) => {
          return (
            <Skill
              key={id++}
              className='bg-teal-300/50 outline-teal-400'
              text='text-teal-600 font-semibold'
            >
              {item}
            </Skill>
          );
        })}
      </div>
      <h1 className='font-bold text-teal-600 drop-shadow-lg text-lg'>
        {title}
      </h1>
      <p className='text-xs py-2'>{description}</p>
    </a>
  );
};

export default Showcase;
