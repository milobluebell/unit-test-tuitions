import React, {useState}from "react";

export const AsyncApp = () => {
  const [message,setMessage] = useState('');
  const fetchData = () => {
    const msg = await Promise.resolve("ok");
    setMessage(msg);
  }
  return (
    <div>
    <span id="reminder">{message}</span>
      <button onClick={fetchData} id="button">
        谢谢老板
      </button>
    </div>
  );
};
