const FooterLink = ({ url, children, className }) => {
  return (
    <a href={url} className='hover:font-bold hover:text-teal-100'>
      {children}
    </a>
  );
};

export default FooterLink;
