const FormInput = ({ change, id, type, placeholder, name }) => {
  return (
    <input
      className={`outline-none border border-teal-600 p-3 text-xs rounded-md bg-white/40 text-teal-700 font-medium placeholder:italic placeholder:text-slate-400/70 w-full`}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={change}
      required
    />
  );
};

export default FormInput;
