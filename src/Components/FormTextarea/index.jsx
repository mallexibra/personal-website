const FormTextarea = ({ change, id, placeholder, name }) => {
  return (
    <textarea
      id={id}
      rows='5'
      className='w-full outline-none border border-teal-600 p-3 text-xs rounded-md bg-white/40 text-teal-700 font-medium placeholder:italic placeholder:text-slate-400/70'
      placeholder={placeholder}
      name={name}
      onChange={change}
      required
    ></textarea>
  );
};

export default FormTextarea;
