import Banner from "../components/Banner";
import ChooseLanguage from "../components/ChooseLanguages";
import TheButton from "../components/TheButton";
import React, { useState } from "react";
const Home = () => {
  const [text, setText] = useState("");
  const [heading, setHeading] = useState("Enter text to analyse");
  const [error, setError] = useState("Please enter text to analyse");

  const handleChange = (event) => {
    setText(event.target.value);
    setHeading("Enter text to analyse");
  };
  const clearText = () => {
    setText("");
    setError("Please enter text to analyse ");
  };
  let newText;
  const ConvertToUpperCase = () => {
    if (text.length) {
      newText = text.toUpperCase();
      setText(newText);
      setHeading("Your converted text to UpperCase is ");
    } else {
      setError("Please enter text to analyse ");
    }
  };
  const ConvertToLowerCase = () => {
    if (text.length) {
      newText = text.toLowerCase();
      setText(newText);
      setHeading("Your converted text to LowerCase is ");
    } else {
      setError("Please enter text to analyse ");
    }
  };
  const copyText = () => {
    if (text.length) {
      newText = document.getElementById("textBox");
      newText.select();
      navigator.clipboard.writeText(newText.value);
      setHeading("Your text is copied to clicpboard ");
    } else {
      setError("Please enter text to analyse ");
    }
  };
  const removeExtraSpaces = () => {
    if (text.length) {
      newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      setHeading("Your text after removing extra spaces is");
    } else {
      setError("Please enter text to analyse ");
    }
  };
  return (
    <>
      <div className=" px-4">
        <div className="mt-8">
          <Banner bannerTitle="Welcome to text-utils" />
        </div>
        <div className="container mx-auto">
          <h1
            className={`${
              text.length ? "text-gray-800" : "text-red-600"
            } text-xl md:text-3xl font-medium  mt-12 mb-2`}
          >
            {!text.length ? error : heading}
          </h1>
          <textarea
            className="w-full border-2 border-gray-400 focus:ring-gray-400 focus:outline-gray-400 focus:border-gray-400 rounded-lg p-2"
            placeholder="Enter your text here"
            id="textBox"
            name="textBox"
            rows="8"
            value={text}
            onChange={handleChange}
            cols="50"
          ></textarea>
          <div className="flex items-center gap-3">
            <TheButton
              type="button"
              background="bg-red-600 hover:bg-red-500 text-white"
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
            <TheButton type="button" buttonText="Copy" onClick={copyText} />
            <TheButton
              type="button"
              buttonText="Remove Extra Spaces"
              onClick={removeExtraSpaces}
            />
          </div>
          <div className="mt-4  bg-gray-100 shadow-lg rounded-lg p-2">
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
          {/* <ChooseLanguage /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
