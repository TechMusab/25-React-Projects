import React from "react";
import logoimg from '../assets/quiz-logo.png';

export default function Header() {
  return(
<header>
  <img src={logoimg} alt="quizlogo" />
  <h1>Quiz App</h1>
</header>
  );
}
