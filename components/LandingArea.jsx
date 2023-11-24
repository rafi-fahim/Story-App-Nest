"use client";
import { useRef } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { TypeAnimation } from "react-type-animation";

const LandingArea = () => {
  const { user } = UserAuth();
  
  const firstEl = useRef(null);
  const secondEl = useRef(null);

  const switchPanal = () => {
    if (window.getComputedStyle(firstEl.current).zIndex == 2) {
      secondEl.current.style.zIndex = 2;
      firstEl.current.style.zIndex = 0;
    } else {
      firstEl.current.style.zIndex = 2;
      secondEl.current.style.zIndex = 0;
    }
  };

  return (
    <>
      {/* SDIE 1 */}
      <div className="relative w-full h-[90vh]">
        <button onClick={switchPanal} className="absolute bottom-2 right-2 z-20 rounded-sm hover:cursor-pointer hover:text-white transition-colors hover:bg-black bg-white text-black font-bold p-4 text-xl font-delius">I wonder what this button do 🤨</button>
        <div
          ref={firstEl}
          className="flex text-left absolute overflow-hidden flex-col text-white justify-center gap-2 p-4 align-middle h-full w-full landing-bg-1"
        >
          <div className="flex flex-col justify-left align-middle">
            <h1 className=" lg:text-6xl text-3xl font-semibold">
              Welcome to FSR Stories <br />
              <span className="lg:text-3xl text-xl">
                {user && `${user.displayName}`}
              </span>
            </h1>
          </div>
          <p className="text-xl">A great place to share your story</p>
          <div className="flex gap-1 text-2xl justify-left font-semibold align-middle">
            TO
            <TypeAnimation
              className=" font-extrabold text-white text-2xl"
              sequence={[
                " LEARN FROM IT",
                2000,
                " USE THEM",
                2000,
                " BE BETTER",
                2000,
              ]}
              speed={20}
              repeat={Infinity}
            />
          </div>

          {!user && <p className="text-xl ">Tip: Login to gain full access</p>}
          {user && (
            <p className="text-xl ">
              Tip: Click on your profile photo at the top right corner to see
              magic
            </p>
          )}
        </div>
        {/* SIDE 2 */}
        <div
          ref={secondEl}
          className="flex text-left absolute overflow-hidden flex-col text-white justify-center gap-2 p-4 align-middle h-full w-full landing-bg-2"
        >
          <div className="flex flex-col justify-left align-middle">
            <h1 className=" lg:text-6xl text-3xl font-semibold">
              An exraordinary place for reading life stories <br />
              <span className="lg:text-3xl text-xl">
                {user && `${user.displayName}`}
              </span>
            </h1>
          </div>
          <p className="text-xl">A great place to share your story</p>
          <div className="flex gap-1 text-2xl justify-left font-semibold align-middle">
            TO
            <TypeAnimation
              className=" font-extrabold text-white text-2xl"
              sequence={[
                " LEARN FROM IT",
                2000,
                " USE THEM",
                2000,
                " BE BETTER",
                2000,
              ]}
              speed={20}
              repeat={Infinity}
            />
          </div>

          {!user && <p className="text-xl ">Tip: Login to gain full access</p>}
          {user && (
            <p className="text-xl ">
              Tip: Click on your profile photo at the top right corner to see
              magic
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingArea;
