import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [password, setpassword] = useState("");
  const [numberallowed, setnumberallowed] = useState(false);
  const [characterallowed, setcharacterallowed] = useState(false);
  const passref = useRef(null);
  const handlecopy = () => {
    window.navigator.clipboard.writeText(passref.current.value);
    passref.current.select();
  };

  const PasswordGenertor = useCallback(() => {
    let pass = "";
    let str = "";
    str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) {
      str += "1234567890";
    }
    if (characterallowed) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * str.length);
      pass += str.charAt(random);
    }
    setpassword(pass);
  }, [length, numberallowed, characterallowed]);
  // it means when any of the dependency change it will rememiozed with latest state values
  useEffect(PasswordGenertor, [length, numberallowed, characterallowed]);

  return (
    <center className="container">
      <h1 className="heading">Password Generator</h1>
      <div className="inputcontainer">
        <input
          value={password}
          ref={passref}
          className="passwordinput"
          type="text"
          readOnly
        />
        <button onClick={handlecopy}>Copy</button>
      </div>
      <div className="myinputs">
        <input
          onChange={(e) => {
            setlength(e.target.value);
          }}
          type="range"
          min={8}
          max={100}
          id="range"
        />
        <label htmlFor="range">Length: {length}</label>
        <input
          onClick={() => {
            setnumberallowed((prev) => !prev);
          }}
          className="check"
          type="checkbox"
          id="number"
        />
        <label htmlFor="number">Numbers</label>
        <input
          onClick={() => {
            setcharacterallowed((prev) => !prev);
          }}
          className="check"
          type="checkbox"
          id="character"
        />
        <label htmlFor="character">Character</label>
      </div>
    </center>
  );
}

export default App;
/*
React Batching:
React batches the state updates together and processes them in a single re-render. This means that even though setCount1 and setCount2 are called sequentially, they don't cause two separate re-renders. Instead, React waits for the event handler to finish executing, collects all state updates, and then performs a single re-render.

Result:
The console logs will show the old values of count1 and count2 because the state updates haven't been applied yet.
After the event handler completes, React processes the batched state updates and re-renders the component with the new values.
Without Batching:
If React didn't batch updates, every call to setState would cause a separate re-render, which would be inefficient and could lead to performance issues, especially in complex applications with many state updates.

Summary:
Batching: React groups multiple state updates together and applies them in a single re-render for efficiency and consistency.
State Updates: React's state updates are asynchronous, meaning the state change doesn't happen immediately.
Performance: Batching helps in minimizing the number of re-renders, improving the overall performance of the application.
 */
