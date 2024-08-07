/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Addnote({ handleadd }) {
  const [input, setinput] = useState(null);

  return (
    <div className="container">
      <textarea
        value={input}
        onChange={(e) => setinput(e.target.value)}
        placeholder="Enter the note here..."
      ></textarea>
      <button onClick={()=>{
        handleadd(input)
        setinput("");
      }}>Add Note</button>
    </div>
  );
}
