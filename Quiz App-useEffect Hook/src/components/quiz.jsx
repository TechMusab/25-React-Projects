import React, { useState } from "react";

export default function Quiz(props) {
  const [Question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  return (
    <>
      <p>Active Question</p>
      <div></div>
    </>
  );
}
