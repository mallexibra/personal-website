import { BsArrowRight, BsPersonCircle } from "react-icons/bs";
import { book } from "../utils/datas";

const Book = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10'>
      {book.map(({ title, description, writer, url }, index) => {
        return (
          <Itembook
            key={index}
            title={title}
            description={description}
            writer={writer}
            url={url}
          />
        );
      })}
    </div>
  );
};

const Itembook = ({ title, description, writer, url }) => {
  return (
    <a
      href={url}
      target='_blank'
      className={`md:w-72 w-full block group text-white ring-1 ring-teal-600 p-3 bg-gradient-to-br from-teal-600 to-teal-400 rounded-md drop-shadow-lg`}
    >
      <h1 className='font-bold text-xl'>{title}</h1>
      <p className='text-xs font-medium'>{description}</p>
      <div className='flex justify-between items-center mt-3'>
        <p className='flex items-center text-xs'>
          <BsPersonCircle className='mr-2' />
          written by <span className='font-semibold ml-1'>{writer}</span>{" "}
        </p>
        <BsArrowRight className='group-hover:scale-125' />
      </div>
    </a>
  );
};

export default Book;
