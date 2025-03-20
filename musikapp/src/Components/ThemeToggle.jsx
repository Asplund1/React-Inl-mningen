import { useState, useEffect } from "react";


export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
  
    return (
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="px-3 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
        aria-label="Byt tema mellan mörkt och ljust"
      >
        {darkMode ? "🌞 Ljust läge" : "🌜 Mörkt läge"}
      </button>
    );
  }