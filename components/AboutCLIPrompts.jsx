"use client"
import { TypeAnimation } from "react-type-animation";

const AboutCLIPrompts = ({ command , reply }) => {
  return (
    <>
      <p className="flex items-center font-thin ">
        <span className="font-bold">
          root:~$
          <TypeAnimation sequence={[command]} speed={50} />
        </span>
      </p>
      <TypeAnimation style={{ whiteSpace: "pre-line" }} sequence={reply} speed={25} />
    </>
  );
};

export default AboutCLIPrompts;
