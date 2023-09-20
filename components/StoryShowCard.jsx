"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import menuIcon from "@/public/menu.svg";
import { db } from "@/app/firebase";

const StoryShowCard = ({
  userPic,
  userName,
  userClass,
  userSection,
  userOccupation,
  userStory,
  storyId,
  userId,
  userLikeCount,
  storyDate,
}) => {
  const [liked, isLiked] = useState(false);
  const [favourite, isFavourite] = useState(false);
  const [menu, setMenu] = useState(false)

  const handleLike = async () => {
    isLiked((prev) => !prev);
    if (!liked) {
      await updateDoc(doc(db, "stories", storyId), {
        likeCount: increment(1),
      });
    } else {
      await updateDoc(doc(db, "stories", storyId), {
        likeCount: increment(-1),
      });
    }
    console.log("liked");
  };

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
          {/* <Image
            src={menuIcon}
            alt="Menu-Icon"
            className="p-2 hover:cursor-pointer self-end h-[40px] w-[40px]"
          /> */}
        </div>
        <div className="p-2 flex flex-col">
          <div className="flex items-center gap-2">
            <p className="uppercase text-violet-900">{userOccupation}</p>
            <p className="uppercase text-violet-900">| {userClass && userClass}</p>
            <p className="uppercase text-violet-900">| {userSection && userSection}</p>
          </div>
          <p>{userStory}</p>
        </div>
        <div className="flex justify-between items-center h-9 border bg-slate-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            className={`${
              liked ? "bg-emerald-500" : " hover:bg-slate-400"
            } p-2 w-full h-full flex justify-center items-center`}
            type="button"
            onClick={() => handleLike()}
          >
            👍
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            className={`p-2 w-full h-full flex justify-center items-center ${
              favourite ? "bg-indigo-400" : "hover:bg-slate-400"
            }`}
            type="button"
            onClick={() => isFavourite((prev) => !prev)}
          >
            ⭐
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default StoryShowCard;
