const CardBlog = ({ title, description, src }) => {
  return (
    <div className='w-full ring-1 ring-teal-600 p-3 bg-white md:w-72 rounded-md drop-shadow-lg'>
      <iframe
        src={src}
        title='YouTube video player'
        terima='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        className='w-full h-40 rounded-md'
      ></iframe>
      <h1 className='font-bold text-sm mt-3 text-teal-600 drop-shadow-md'>
        {title}
      </h1>
      <p className='text-xs my-2 font-medium text-gray-900'>{description}</p>
    </div>
  );
};

export default CardBlog;
