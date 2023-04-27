const Skill = ({ className, children }) => {
  return (
    <span
      className={`${className} px-1 text-xs rounded-sm outline outline-1 text-white`}
    >
      {children}
    </span>
  );
};

export default Skill;
