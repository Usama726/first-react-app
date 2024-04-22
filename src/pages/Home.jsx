import Banner from "../components/Banner";
// import ChooseLanguage from "../components/ChooseLanguages";
import TheButton from "../components/TheButton";
import React, { useState } from "react";
const Home = () => {
  const [text, setText] = useState("");
  const [heading, setHeading] = useState("Enter text to analyze");
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("Please enter text to analyze");
  const handleChange = (event) => {
    setText(event.target.value);
    setHeading("Enter text to analyze");
  };
  const clearText = () => {
    setText("");
    setShowAlert(true);
    setAlert("Text is cleared");
    setTimeout(() => {
      setAlert("");
      setShowAlert(false);
    }, 2000);
    setError("Please enter text to analyze ");
  };
  let newText;
  const ConvertToUpperCase = () => {
    if (text.length) {
      newText = text.toUpperCase();
      setText(newText);
      setShowAlert(true);
      setAlert("Your text is converted into upperCase");
      setTimeout(() => {
        setAlert("");
        setShowAlert(false);
      }, 2000);
    } else {
      setError("Please enter text to analyze ");
    }
  };
  const ConvertToLowerCase = () => {
    if (text.length) {
      newText = text.toLowerCase();
      setText(newText);
      setShowAlert(true);
      setAlert("Your text is converted into lowerCase ");
      setTimeout(() => {
        setAlert("");
        setShowAlert(false);
      }, 2000);
    } else {
      setError("Please enter text to analyze ");
    }
  };
  const copyText = () => {
    if (text.length) {
      setShowAlert(true);
      navigator.clipboard.writeText(text);
      setAlert("Your text is copied to clicpboard ");
      setTimeout(() => {
        setAlert("");
        setShowAlert(false);
      }, 2000);
    } else {
      setError("Please enter text to analyze ");
    }
  };
  const removeExtraSpaces = () => {
    if (text.length) {
      newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      setShowAlert(true);
      setAlert("Extra spaces are removed");
      setTimeout(() => {
        setAlert("");
        setShowAlert(false);
      }, 2000);
    } else {
      setError("Please enter text to analyze ");
    }
  };
  return (
    <>
      <div className=" px-4">
        <div className="mt-8">
          <Banner bannerTitle="Welcome to text-utils" />
        </div>
        <div className="container mx-auto">
          <div className="flex items-center justify-between mt-6 mb-2">
            <h1
              className={`${
                text.length ? "text-gray-800" : "text-red-600"
              } text-base sm:text-lg md:text-2xl font-medium py-3`}
            >
              {!text.length ? error : heading}
            </h1>
            {showAlert && (
              <h1 className="rounded-lg px-3 py-2 bg-gray-100 border border-gray-400 text-black text-xs sm:text-sm md:text-base font-normal">
                {alert}
              </h1>
            )}
          </div>
          <textarea
            className="w-full border border-gray-400 focus:ring-gray-400 focus:outline-gray-400 focus:border-gray-400 rounded-lg p-2"
            placeholder="Enter your text here"
            id="textBox"
            name="textBox"
            rows="8"
            value={text}
            onChange={handleChange}
            cols="50"
          ></textarea>
          <div className="flex items-center gap-3 flex-wrap">
            <TheButton
              type="button"
              text={text}
              background="bg-red-600 hover:bg-red-500 text-white"
              buttonText="Clear Text"
              onClick={clearText}
            />
            <TheButton
              type="button"
              text={text}
              buttonText="Copy"
              onClick={copyText}
            />
            <TheButton
              type="button"
              text={text}
              buttonText="UpperCase"
              onClick={ConvertToUpperCase}
            />
            <TheButton
              type="button"
              text={text}
              buttonText="LowerCase"
              onClick={ConvertToLowerCase}
            />
            <TheButton
              type="button"
              text={text}
              buttonText="Remove Extra Spaces"
              onClick={removeExtraSpaces}
            />
          </div>
          <div>
            {text.length !== 0 && (
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
                    {
                      text.split(" ").filter((element) => {
                        return element.length !== 0;
                      }).length
                    }{" "}
                    <span className="text-sm sm:text-lg font-normal">
                      words and{" "}
                    </span>
                  </span>{" "}
                  <span className="text-xl font-bold ">{text.length} </span>
                  characters
                </h2>
              </div>
            )}
          </div>
          {/* <ChooseLanguage /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
