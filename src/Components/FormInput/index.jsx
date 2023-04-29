const FormInput = ({ id, type, placeholder }) => {
  return (
    <input
      className={`outline-none border border-teal-600 p-3 text-xs rounded-md bg-white/40 text-teal-700 font-medium placeholder:italic placeholder:text-slate-400/70 w-full`}
      type={type}
      placeholder={placeholder}
      id={id}
      required
    />
  );
};

export default FormInput;
