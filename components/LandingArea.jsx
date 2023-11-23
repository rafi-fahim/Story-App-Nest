"use client";
import React from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { TypeAnimation } from "react-type-animation";

const LandingArea = () => {
  const { user } = UserAuth();
  return (
    <>
      <div className="hello flex text-left flex-col text-white justify-center gap-2 p-4 align-middle h-[90vh] w-full landing-bg">
        <div className="flex flex-col justify-left align-middle">
          <h1 className=" lg:text-6xl text-3xl font-semibold">
            Welcome to FSR Stories <br />
            <span className="lg:text-3xl text-xl">{user && `${user.displayName}`}</span>
          </h1>
        </div>
        <p className="text-xl">A great place to share your story</p>
        <div className="flex gap-1 text-2xl justify-left font-semibold align-middle">
            TO 
            <TypeAnimation
              className=" font-extrabold text-white text-2xl"
              sequence={[" LEARN FROM IT",2000,  " USE THEM",2000,  " BE BETTER", 2000]}
              speed={20}
              repeat={Infinity}
              />
        </div>
        {!user && <p className="text-xl ">Tip: Login to gain full access</p>}
        {user && <p className="text-xl ">Tip: Click on your profile photo at the top right corner to see magic</p>}
      </div>
    </>
  );
};

export default LandingArea;
