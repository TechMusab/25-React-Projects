import React from "react";
import { useState, useEffect } from "react";
export default function Progressbar({ addanswer }) {
  const [remainingtime, setRemainingtime] = useState(6000);
  useEffect(() => {
    console.log("Set intervel")
    const intervel = setInterval(() => {
      setRemainingtime((prev) => prev - 100);
    }, 100);
    return ()=>clearInterval(intervel);
  }, []);
  useEffect(() => {
    console.log("Set Timeout")
    const timer = setTimeout(addanswer, 5000);
    return ()=>clearTimeout(timer);
  }, [addanswer]);

  return (
    <>
      <progress id="question-time" max={6000} value={remainingtime}></progress>
    </>
  );
}
