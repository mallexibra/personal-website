const Skill = ({ text = "text-white", className, children }) => {
  return (
    <span
      className={`${className} px-1 text-xs rounded-sm outline outline-1 ${text}`}
    >
      {children}
    </span>
  );
};

export default Skill;
