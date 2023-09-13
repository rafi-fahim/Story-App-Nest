"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState , useEffect } from "react";
 
const StoryShowCard = ({
  userPic,
  userName,
  userClass,
  userSection,
  userOccupation,
  userStory,
}) => {


  return (
    <>
      <div className="max-w-sm min-w-[20rem] bg-slate-200 border border-slate-400 rounded-sm">
        <div className="p-2 flex items-center gap-2">
          <Image
            alt="Person Image"
            src={userPic}
            className="rounded-full h-[35px] w-[35px]"
            height={35}
            width={35}
          />
          <h1>{userName}</h1>
        </div>
        <div className="p-2 flex flex-col">
          <div className="flex items-center gap-2">
            <p>{userOccupation}</p>
            <p>| {userClass && userClass}</p>
            <p>| {userSection && userSection}</p>
          </div>
          <p>{userStory}</p>
        </div>
        <div className="flex justify-between items-center h-9 border bg-slate-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            className="p-2 w-full h-full flex justify-center items-center hover:bg-slate-400"
            type="button"
          >
            👍
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            className="p-2 w-full h-full flex justify-center items-center hover:bg-slate-400"
            type="button"
          >
            ⭐
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default StoryShowCard;
