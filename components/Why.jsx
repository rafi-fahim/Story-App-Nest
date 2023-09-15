import React from "react";
import WhyCard from "./sub-components/WhyCard";

const Why = () => {
  const cardInfo = [
    {
      key: 1,
      title: "TO Learn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga veritatis delectus! Vero explicabo rem fuga, suscipit aliquid quo quam dolorum temporibus odio dolores aperiam nihil laborum, quae nemo voluptate.",
    },
    {
      key: 2,
      title: "To Share",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga veritatis delectus! Vero explicabo rem fuga, suscipit aliquid quo quam dolorum temporibus odio dolores aperiam nihil laborum, quae nemo voluptate.",
    },
    {
      key: 3,
      title: "To ?s",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga veritatis delectus! Vero explicabo rem fuga, suscipit aliquid quo quam dolorum temporibus odio dolores aperiam nihil laborum, quae nemo voluptate.",
    },
  ];
  return (
    <>
      <div className="grid content-center justify-items-center grid-cols-3 max-sm:grid-cols-1 gap-3 p-4">
        {cardInfo.map((item) => (
          <WhyCard
            key={item.key}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default Why;
