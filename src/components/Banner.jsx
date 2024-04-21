import React from "react";
const Banner = (props) => {
  return (
    <div>
      <div
        className="
          text-lg sm:text-xl md:text-4xl shadow-lg  font-bold container text-gray-800 bg-gradient-to-r from-slate-300 via-slate-200 font-serif italic to-slate-300 text-center py-2 md:py-8 uppercase rounded-tr-[20rem] rounded-bl-[20rem] mx-auto "
      >
        <h1 className="text-shadow text-shadow-gray-400 text-shadow-x-3 text-shadow-y-4 md:animate-bounce">
          {props.bannerTitle}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
