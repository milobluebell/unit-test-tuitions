import React, { useState, useEffect, useCallback } from "react";

// 函数
export const testFunction = (id) => {
  if (typeof id === "string") {
    return "是string啊";
  } else if (typeof id === "number") {
    return "是number啊";
  } else {
    return "是其它啊";
  }
};

// 组件
export const App = ({ id, onButtonClickHandler }) => {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    if (typeof id === "string") {
      setMessage("id是string");
    } else if (typeof id === "number") {
      if (id > 10) {
        setMessage("id是>10的数字");
      } else {
        setMessage("id是<=10的数字");
      }
    } else {
      setMessage("id是其他数据类型");
    }
  };
  useEffect(() => {
    onButtonClickHandler && onButtonClickHandler(message);
  }, [message]);
  return (
    <>
      <span id="span">{message}</span>
      <button onClick={handleClick} id="button">
        谢谢老板
      </button>
    </>
  );
};
