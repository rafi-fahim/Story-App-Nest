import AboutCreator from "@/components/AboutCreator";
import React from "react";

const AboutPage = () => {
  const aboutDes = [
    {
      title: "whoami",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus necessitatibus voluptatibus ullam est? Atque eveniet vero illum beatae? Reprehenderit eos eligendi porro voluptate maxime quod nisi deserunt nam laudantium?",
    },
    {
      title: "cd education",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus necessitatibus voluptatibus ullam est? Atque eveniet vero illum beatae? Reprehenderit eos eligendi porro voluptate maxime quod nisi deserunt nam laudantium?",
    },
    {
      title: "cd techstack",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus necessitatibus voluptatibus ullam est? Atque eveniet vero illum beatae? Reprehenderit eos eligendi porro voluptate maxime quod nisi deserunt nam laudantium?",
    },
  ];

  const renderAboutCreator = aboutDes.map((info) => {
    return (
        <AboutCreator 
            title={info.title}
            paragrapgh={info.paragraph}
        />
    );
  });

  return (
    <>
      <h1>Meet the Creator</h1>
      {renderAboutCreator}
    </>
  );
};

export default AboutPage;
