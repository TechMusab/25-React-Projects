import { useEffect } from "react";
import { useState } from "react";
export default function Darkmode() {
  const [theme, settheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handletheme = () => {
    settheme((prev) => (prev == "light" ? "dark" : "light"));
  };
  return (
    <div className={theme == "light" ? "light" : "dark"}>
      <h1 className={theme == "light" ? "light-heading" : "dark-heading"}>
        Helloworld
      </h1>
      <button onClick={handletheme}>Toggle</button>
    </div>
  );
}
