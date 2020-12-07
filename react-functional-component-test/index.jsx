import React, { useState, useCallback } from "react";

// 子组件
export const InnerApp = ({ status }) => (
  <span id="content">{status ? "谢过了" : "还没谢"}</span>
);

// 父组件(根组件)
export const App = ({ onButtonClick }) => {
  const [status, toggleStatus] = useState(false);
  const handleClick = useCallback(() => {
    toggleStatus(!status);
    onButtonClick && onButtonClick(!status);
  }, [status]);
  return (
    <div>
      <InnerApp status={status} />
      <button onClick={handleClick} id="button">
        谢谢老板
      </button>
    </div>
  );
};
