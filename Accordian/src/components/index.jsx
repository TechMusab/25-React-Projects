import { useState } from "react";
import Data from "./data";
const Accordian = () => {
  const [selected, setselected] = useState(null);
  const [multiple, setmultiple] = useState(false);
  const [array, setarray] = useState([]);

  const handlesingleselction = (id) => {
    if (selected === id) {
      setselected(null);
    } else {
      setselected(id);
    }
  };
  const handlemultiselection = (id) => {
    const copy = [...array];
    const index = copy.indexOf(id);
    console.log(index);
    if (index !== -1) {
      copy.splice(index, 1);
    } else {
      copy.push(id);
    }
    setarray(copy);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setmultiple(!multiple)}>
        Enable multi selection
      </button>
      <div className="accordian">
        {Data.length == 0 ? (
          <div>No data</div>
        ) : (
          Data.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div
                  onClick={
                    multiple
                      ? () => handlemultiselection(item.id)
                      : () => handlesingleselction(item.id)
                  }
                  className="title"
                >
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {multiple
                  ? array.indexOf(item.id) != -1 && <p>{item.answer}</p>
                  : selected === item.id && <p>{item.answer}</p>}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Accordian;
