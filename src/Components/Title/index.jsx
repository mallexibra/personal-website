const Title = ({ text = "Tittle Footer", className }) => {
  return <h1 className={`${className} font-bold`}>{text}</h1>;
};
export default Title;
