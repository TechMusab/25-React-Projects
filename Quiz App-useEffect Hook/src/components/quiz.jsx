import React, { useState } from "react";
import QUESTIONS from "../../questioons";

export default function Quiz(props) {
  const [answers, setAnswers] = useState([]);
  const questionindex = answers.length;

  return (
    <div id="question">
      <h2>{QUESTIONS[questionindex].text}</h2>
    </div>
  );
}
