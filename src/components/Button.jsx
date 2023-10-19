import React from "react";

export default function Button({ onclick, buttonText }) {
  return (
    <button
      className="w-auto border px-2 py-1 border-[#8080808e] rounded-md dark:text-[#fff]"
      onClick={onclick}
    >
      {buttonText}
    </button>
  );
}
