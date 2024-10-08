import React, { useState, useEffect } from "react";
import QUESTIONS from "../../questions";
import quizcompleteimg from "../assets/quiz-complete.png";
import Progressbar from "./progressbar";
export default function Quiz() {
  const [answers, setAnswers] = useState([]);


  function handleselectanswer(answer) {
    setAnswers((prev) => [...prev, answer]);
  }
  if (answers.length === QUESTIONS.length) {
    return (
      <div id="summary">
        <h2>Quiz Completed</h2>
        <img src={quizcompleteimg} alt="Complete image" />
      </div>
    );
  }
  const questionindex = answers.length;
  const shuffledanswers = [...QUESTIONS[questionindex].answers];
  shuffledanswers.sort((a, b) => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
    <Progressbar key={questionindex} addanswer={()=> setAnswers((prev) => [...prev, null])}></Progressbar>
        <h2>{QUESTIONS[questionindex].text}</h2>
        <ul id="answers">
          {shuffledanswers.map((answer) => {
            return (
              <li className="answer" key={answer}>
                <button onClick={() => handleselectanswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
