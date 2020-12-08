import React, { useState, useEffec } from "react";

// 子组件
export const InnerApp = ({ status }) => (
  <span id="content">{status ? "谢过了" : "还没谢"}</span>
);

// 父组件(根组件)
export const AppUpdatedByUseEffect = () => {
  const [status, toggleStatus] = useState(false);
  useEffect(() => {}, [status]);
  const handleClick = () => {};
  return (
    <div>
      <InnerApp status={status} />
      <button onClick={handleClick} id="button">
        谢谢老板
      </button>
    </div>
  );
};
