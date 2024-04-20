import React from "react";

const TheButton = (props) => {
  return (
    <div>
      <button
        type="button"
        className={`${
          props.background
            ? props.background
            : "bg-gray-300 hover:bg-gray-600 text-black"
        } text-sm sm:text-base font-medium   hover:text-white px-4 py-2 rounded-lg `}
        onClick={props.onClick}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default TheButton;
