import React from "react";
import { useState, useEffect } from "react";
export default function Progressbar({ addanswer }) {
  const [remainingtime, setRemainingtime] = useState(5000);
  useEffect(() => {
    const intervel = setInterval(() => {
      setRemainingtime((prev) => prev - 100);
    }, 100);
    return () => clearInterval(intervel);
  }, []);
  useEffect(() => {
    const timer = setTimeout(addanswer, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <progress id="question-time" max={5000} value={remainingtime}></progress>
    </>
  );
}
