import React, { useEffect, useState } from "react";

export const Mycontext = React.createContext({
  thememode: "light",
  darktheme: () => {},
  lighttheme: () => {},
});
const MyProvider = ({ children }) => {
  const [thememode, setthememode] = useState("light");
  const lighttheme = () => {
    setthememode("light");
  };
  const darktheme = () => {
    setthememode("dark");
  };
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(thememode);
    
  },[thememode])
  return (
    <Mycontext.Provider value={{ thememode, darktheme, lighttheme }}>
      {children}
    </Mycontext.Provider>
  );
};
export default MyProvider;
