import AboutCreator from "@/components/AboutCreator";
import React from "react";

const AboutPage = () => {
  const aboutDes = [
    {
      title: "whoami",
      paragraph:
          "The creator is called Fahim Shakil Rafi. He likes to call him FSR in short",
      position: "left",
    },
    {
      title: "cd education",
      paragraph:
        "This boy hasn't passed high school yet. Currently he is studing in Cantonment Public School & College, Saidpur",
      position: "right",
    },
    {
      title: "cd techstack",
      paragraph:
        "Technology Sandwitch: HTML, CSS, Java Script, Tailwind Css, React, NeXt.js",
      position: "left",
    },
  ];

  const renderAboutCreator = aboutDes.map((info) => {
    return <AboutCreator position={info.position} title={info.title} paragrapgh={info.paragraph} />;
  });

  return (
    <>
      <div className="p-4 flex flex-col justify-center items-center gap-3 w-full">
        <h1 className="p-4 text-left lg:w-auto md:w-auto w-10/12 bg-slate-800 text-green-500 font-thin text-2xl rounded-md "><span className="font-bold">root~$</span> Meet the Creator</h1>
        {renderAboutCreator}
      </div>
    </>
  );
};

export default AboutPage;
