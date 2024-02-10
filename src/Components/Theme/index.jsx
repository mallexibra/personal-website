import { useEffect, useState } from "react";

const Theme = ({ className, light, dark }) => {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", !theme);
  };

  useEffect(() => {
    const themeStorage = localStorage.getItem("theme");
    if (themeStorage) {
      const tema = themeStorage == "true";
      setTheme(tema);
    } else {
      setTheme(false);
    }
  }, []);

  return (
    <button
      className={`${className} ${
        theme ? "bg-slate-900" : "bg-white text-slate-900"
      } p-2 rounded-full `}
      onClick={handleTheme}
    >
      {theme ? light : dark}
    </button>
  );
};

export default Theme;
