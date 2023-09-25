"use client"
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AboutCreator = ({ position, title, paragrapgh }) => {
  return (
    <>
      <div
        className={`${
          position === "left"
            ? "md:translate-x-2/4 lg:translate-x-2/4"
            : "md:-translate-x-2/4 lg:-translate-x-2/4"
        } p-2 bg-slate-800 rounded-lg about-card-w h-60 text-green-500`}
      >
        <h1 className="flex items-center font-thin ">
          <span className="font-bold">root:~$</span>
          {title}
        </h1>
        <TypeAnimation 
          sequence={[paragrapgh]}
          speed={50}
        />
      </div>
    </>
  );
};

export default AboutCreator;
