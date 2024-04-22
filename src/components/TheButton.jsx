import React from "react";

const TheButton = (props) => {
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  return (
    <div>
      <button
        type="button"
        disabled={props.text.length === 0}
        className={`${
          props.background
            ? props.background
            : "bg-gray-300 hover:bg-gray-600 text-black"
        } text-sm sm:text-base font-medium   hover:text-white px-4 py-2 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400`}
        onClick={props.onClick}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default TheButton;
