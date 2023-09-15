import React from "react";

const AboutCreator = ({ title , paragrapgh }) => {
  return (
    <>
      <h1 className="flex items-center   max-w-xs p-2 bg-slate-700 text-green-500 font-thin rounded-lg">
        <span className="font-bold">$</span>{title}
      </h1>
      <p>
        {paragrapgh}
      </p>
    </>
  );
};

export default AboutCreator;
