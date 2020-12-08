import React, { useState } from "react";
import { fetchData } from "./service.js";

export const AsyncApp = () => {
  const [message, setMessage] = useState("");
  const handleFetch = async () => {
    const msg = await fetchData();
    setMessage(msg);
  };
  return (
    <div>
      <span id="reminder">{message}</span>
      <button onClick={handleFetch} id="button">
        谢谢老板
      </button>
    </div>
  );
};
