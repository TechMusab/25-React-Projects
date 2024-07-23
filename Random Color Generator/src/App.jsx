import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Show from "./components/showcolor";
import Store from "./store/store";
function App() {
  let arr = ["Generate Hex Code", "Generate RGB Code"];
  return (
    <Store>
      <div className="wrapper">
        <div className="btndiv">
          {arr.map((code, index) => {
            return <Button code={code} index={index}></Button>;
          })}
        </div>
        <Show></Show>
      </div>
    </Store>
  );
}

export default App;
