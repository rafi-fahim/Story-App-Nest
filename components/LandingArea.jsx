"use client";
import React from "react";
import { UserAuth } from "@/app/context/AuthContext";

const LandingArea = () => {
  const { user } = UserAuth();
  return (
    <>
      <div className="flex text-center flex-col justify-center gap-2 align-middle h-screen w-full bg-gradient-to-bl from-cyan-300 via-indigo-300 to-violet-300">
        <div className="flex flex-col justify-center align-middle  gap-2">
          <h1 className="text-blue-800 lg:text-6xl text-3xl font-bold">
            Welcome to FSR Stories <br />
            <span className="lg:text-3xl text-xl">{user && `${user.displayName}`}</span>
          </h1>
          <p className="text-xl">A great place to share your story</p>
        </div>
        <div className="flex gap-1 justify-center align-middle text-slate-500">
          <p>Learn From Them |</p>
          <p>Use it in your life |</p>
          <p>Be Better</p>
        </div>
      </div>
    </>
  );
};

export default LandingArea;
