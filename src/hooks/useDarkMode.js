import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("Dark", false);

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark-mode");
    } else if (darkMode === false) {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
