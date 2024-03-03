import { useState } from "react";

const Button = ({ name, setSelectedIndex, index, isSelected }) => {
  return (
    <div className="my-2 mr-3">
      {isSelected ? (
        <button
          className={
            "text-sm font-semibold py-1 px-2 rounded-md bg-black text-white"
          }
          onClick={() => setSelectedIndex(index)}
        >
          {name}
        </button>
      ) : (
        <button
          className={"text-sm py-1 px-2 rounded-md text-black"}
          onClick={() => setSelectedIndex(index)}
        >
          {name}
        </button>
      )}
    </div>
  );
};

export default Button;
