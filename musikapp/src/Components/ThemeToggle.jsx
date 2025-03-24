import { useEffect } from "react";
import { toggleTheme } from "../Features/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeToggle() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);


    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
  
    return (
      <button 
      onClick={() => dispatch(toggleTheme())}
      className="
                text-black
                dark:text-white
                hover:text-blue-600
                dark:hover:text-yellow-300
                transition-colors
                duration-300
              p-2 border rounded-md"
      >
        {darkMode ? "🌞 Ljust läge" : "🌜 Mörkt läge"}
      </button>
    );
  }