import React from "react";

function Button({children}) {
  return (
    <button className=" flex  gap-1 bg-blue-500 border hover:border-blue-500 hover:bg-white text-white hover:text-blue-700 py-2 px-4 rounded">{children}</button>
  );
}

export default Button;
