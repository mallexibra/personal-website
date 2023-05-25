const CardBlog = ({ title, description, src, image, url }) => {
  return (
    <div
      className={`md:w-72 w-full ring-1 ring-teal-600 p-3 bg-white rounded-md drop-shadow-lg`}
    >
      {src && (
        <iframe
          src={src}
          title='YouTube video player'
          terima='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          className='w-full h-40 rounded-md'
        ></iframe>
      )}
      {image && (
        <a href={url}>
          <img src={image} alt={image} />
        </a>
      )}
      <h1 className='font-bold text-sm mt-3 text-teal-600 drop-shadow-md'>
        {title}
      </h1>
      {description && (
        <p className='text-xs my-2 font-medium text-gray-900'>{description}</p>
      )}
    </div>
  );
};

export default CardBlog;
