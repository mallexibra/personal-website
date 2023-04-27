const FooterLink = ({ url, children, className }) => {
  return (
    <a href={url} className={className}>
      {children}
    </a>
  );
};

export default FooterLink;
