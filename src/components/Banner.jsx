import React from "react";
const Banner = (props) => {
  return (
    <div>
      <div
        className="
          text-xl md:text-4xl  font-bold container text-gray-800 bg-gradient-to-r from-slate-300 via-slate-200 font-serif italic to-slate-300 text-center py-8 uppercase rounded-tr-[20rem] rounded-bl-[20rem] mx-auto text-shadow text-shadow-gray-400 text-shadow-x-3 text-shadow-y-4"
      >
        {props.bannerTitle}
      </div>
    </div>
  );
};

export default Banner;
