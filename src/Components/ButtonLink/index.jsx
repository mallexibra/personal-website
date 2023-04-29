const ButtonLink = ({ children = "Link For You", primary, url }) => {
  return (
    <a
      href={url}
      target='_blank'
      className={`mx-auto block w-64 text-center font-bold rounded-sm p-3 text-sm ${
        primary
          ? "bg-teal-600 dark:hover:bg-white hover:bg-transparent text-white  hover:text-teal-600 dark:hover:border-white"
          : "hover:bg-teal-600 text-teal-600 hover:text-white"
      } transition-all duration-300 ease-in-out my-4 border-2 border-teal-600`}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
