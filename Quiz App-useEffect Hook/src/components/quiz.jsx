import React, { useState } from "react";
import QUESTIONS from "../../questioons";

export default function Quiz(props) {
  const [answers, setAnswers] = useState([]);
  function handleselectanswer(index) {
    console.log(index);
   setAnswers((prev) => [...prev,index]);
  }
  const questionindex = answers.length;

  return (
    <div id="question">
      <h2>{QUESTIONS[questionindex].text}</h2>
      <ul id="answers">
        {QUESTIONS[questionindex].answers.map((answer, index) => {
          return (
            <li className="answer" key={answer}>
              <button onClick={() => handleselectanswer(index)}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
