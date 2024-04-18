import Banner from "../components/Banner";
import TheButton from "../components/TheButton";
import React, { useState } from "react";
const Home = () => {
  const [text, setText] = useState("Enter your text here");
  const [heading, setHeading] = useState("Enter text to analyze");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const clearText = () => {
    setText("");
    setHeading("Enter text to analyze");
  };
  let newText;
  const ConvertToUpperCase = () => {
    newText = text.toUpperCase();
    setText(newText);
    setHeading("Your converted text to UpperCase is ");
  };
  const ConvertToLowerCase = () => {
    newText = text.toLowerCase();
    setText(newText);
    setHeading("Your converted text to LowerCase is ");
  };
  return (
    <>
      <div className=" px-4">
        <div className="mt-8">
          <Banner bannerTitle="Welcome to text-utils" />
        </div>
        <div className="container mx-auto">
          <h1 className="text-xl md:text-3xl font-medium text-gray-800 mt-12 mb-2">
            {heading}
          </h1>
          <textarea
            className="w-full border border-gray-500 rounded-lg p-2"
            id="w3review"
            name="w3review"
            rows="12"
            value={text}
            onChange={handleChange}
            cols="50"
          ></textarea>
          <div className="flex items-center gap-3">
            <TheButton
              type="button"
              background="bg-red-600 hover:bg-red-500"
              buttonText="Clear Text"
              onClick={clearText}
            />
            <TheButton
              type="button"
              buttonText="UpperCase"
              onClick={ConvertToUpperCase}
            />
            <TheButton
              type="button"
              buttonText="LowerCase"
              onClick={ConvertToLowerCase}
            />
          </div>
          <div className="mt-4 bg-gray-200 shadow-lg rounded-lg p-2">
            <h2 className="text-sm sm:text-lg font-normal ">
              {" "}
              Entered text contains:{" "}
              <span
                className={`${
                  text.length ? "inline-block" : "hidden"
                } text-xl font-bold `}
              >
                {" "}
                {text.split(" ").length}{" "}
                <span className="text-sm sm:text-lg font-normal">
                  words and{" "}
                </span>
              </span>{" "}
              <span className="text-xl font-bold ">{text.length} </span>
              characters
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
