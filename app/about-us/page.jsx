import AboutCreator from "@/components/AboutCreator";
import React from "react";

const AboutPage = () => {

  return (
    <>
      <div className="p-4 flex flex-col h-screen w-full justify-start items-center gap-3">
        <h1 className="p-4 text-left about-card-w bg-slate-800 text-green-500 font-thin text-2xl rounded-md ">
          <span className="font-bold">root~$</span> Meet the Creator
        </h1>
        <AboutCreator />
      </div>
    </>
  );
};

export default AboutPage;
