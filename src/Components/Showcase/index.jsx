import Skill from "../Skill";

const Showcase = ({
  title = "Project",
  description = "This is my project hehe",
  img,
  tech,
  url,
}) => {
  return (
    <a
      href={url}
      target='_blank'
      className='block outline outline-2 sm:w-2/5 text-slate-800 hover:scale-105 transition-all duration-500 ease-in-out my-3 drop-shadow-xl p-3 rounded-md bg-white outline-teal-200'
    >
      <div className='rounded-md overflow-hidden '>
        <img className='block' src={img} alt='Showcase Project' />
      </div>
      <div className='py-3 flex gap-2'>
        {tech.map((item) => {
          return (
            <Skill className='bg-teal-600/50 outline-teal-400'>{item}</Skill>
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
