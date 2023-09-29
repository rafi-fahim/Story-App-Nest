"use client";
import React from "react";
import AboutCLIPrompts from "./AboutCLIPrompts";

const AboutCreator = () => {
  const commandReply = [
    {
      command: "whoami",
      reply: ["Fahim Shakil"],
    },
    {
      command: "nmap www.fahimshakil.com/education",
      reply: ["Cantonment Public School & College, Saidpur"],
    },
    {
      command: "nmap www.fahimshakil.com/techstack",
      reply: ["HTML, CSS, Javascript, React.js, Tailwind CSS, Next.js, Firebase"],
    },
    {
      command: "cat FSR_Contact",
      reply: [`mail: fsrafisocial18@gmail.com \n github: github.com/fahim-shakil \n facebook: could not find the adress😶`],
    },
  ];
  return (
    <>
      <div
        className={`p-2 bg-slate-800 rounded-lg about-card-w  text-green-500`}
      >
        {commandReply.map(item => <AboutCLIPrompts command={item.command} reply={item.reply} key={item.command}/>)}
      </div>
    </>
  );
};

export default AboutCreator;
