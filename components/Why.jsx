import React from "react";
import WhyCard from "./sub-components/WhyCard";

const Why = () => {
  const cardInfo = [
    {
      key: 1,
      title: "TO Learn",
      description:
        "Our goal is to make people learn from others life stories. Since people gets depressed some times, it is a great oppurtunity to look at others life story how te encountered the problems",
        delay: "100ms",
    },
    {
      key: 2,
      title: "To Share",
      description:
        "People gets relife by sharing their stories. They don't have to give a speech in a public presentation to share their stories. They can easily create a account & share their stories worldwide. There is no monatization like facebook",
        delay: "200ms",
    },
    {
      key: 3,
      title: "To Enjoy",
      description:
        "It is also an enternainment product. When there is nothing to do or you are feeling boaring you can see what others do when they get boared. A great place to wash off your boar doom",
        delay: "300ms",
    },
  ];
  return (
    <>
      <h1 className="text-center p-2 bg-stone-900 rounded-lg text-4xl max-sm:text-2xl font-extrabold uppercase text-white">Why this app? 🤔</h1>
      <div className="grid content-center justify-items-center grid-cols-3 max-sm:grid-cols-1 gap-3 p-4">
        {cardInfo.map((item) => (
          <WhyCard
            key={item.key}
            title={item.title}
            description={item.description}
            delay={item.delay}
          />
        ))}
      </div>
    </>
  );
};

export default Why;
