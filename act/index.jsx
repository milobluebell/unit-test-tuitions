import React, { useState, useEffect } from "react";

//
export const App = ({ onChange }) => {
  const [message, setMessage] = useState("");
  const [reminderText, setReminderText] = useState("");
  const clickHandler = () => {
    setTimeout(() => {
      setMessage("test");
    }, 0);
  };
  const clickHandler2 = () => {
    setMessage("test");
  };
  useEffect(() => {
    setReminderText(message);
    document.title = message;
  }, [message]);
  return (
    <>
      <>
        <span id="span">{message}</span>
        <button id="button" onClick={clickHandler}></button>
      </>
      <>
        <span id="span2">{reminderText}</span>
        <button id="button2" onClick={clickHandler2}></button>
      </>
    </>
  );
};
