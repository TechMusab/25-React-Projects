import { useReducer } from "react";
import { AiFillDelete } from "react-icons/ai";
import Addnote from "./components/addnote";

function statereducer(state, action) {
  if (action.type == "addnote") {
    return [
      ...state,
      { id: Math.floor(Math.random() * 1000), text: action.payload },
    ];
  } else if (action.type == "Deletenote") {
    return state.filter((note) => note.id !== action.payload);
  } else {
    return state;
  }
}

function App() {
  const [notestate, dispatchnotestate] = useReducer(statereducer, []);
  console.log(notestate);
  const handleadd = (input) => {
    if(input==""){
      return;
    }
    dispatchnotestate({
      type: "addnote",
      payload: input,
    });
  };
  const handledelete = (id) => {
    console.log(id);
    dispatchnotestate({
      type: "Deletenote",
      payload: id,
    });
  };
  return (
    <>
      <div className="main">
        <h1>Sticky Note App</h1>
        <Addnote handleadd={handleadd} />
        <div className="notes">
          {notestate.map((note) => {
            return (
              <div key={note.id} className="note">
                {note.text}
                <AiFillDelete
                  onClick={() => handledelete(note.id)}
                  className="icon"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
