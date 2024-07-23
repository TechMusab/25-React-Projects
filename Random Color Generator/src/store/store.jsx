import { useState } from "react";
import React from "react";
export const Context = React.createContext();

function generatehex() {
  let hexcode = "#";
  let hexarr = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexarr.length);
    hexcode += hexarr[random];
  }
  return hexcode;
}
function generatergb() {
  let rgbcode = "rgb(";
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 256);
    rgbcode += random;
    if (i < 2) {
      rgbcode += ",";
    }
  }
  rgbcode += ")";
  return rgbcode;
}
let Store = ({ children }) => {

  let [bgColor, setbgColor] = useState("#ffffff");
  let [bgColorhead, setbgColorhead] = useState("Hex Color");
  const handlecolor = (index) => {
    if (index == 0) {
      let color = generatehex();
      setbgColor(color);
      setbgColorhead("Hex Color");
    } else {
      setbgColor(generatergb());
      setbgColorhead("RGB Color");
    }
  };
  return (
    <Context.Provider value={{ handlecolor, bgColor, bgColorhead }}>
      {children}
    </Context.Provider>
  );
};
export default Store;
