"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  doc,
  increment,
  updateDoc,
  deleteDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import menuIcon from "@/public/menu.svg";
import { db } from "@/app/firebase";
import StoryCardMenu from "./StoryCardMenu";
import RUSureModal from "./RUSureModal";
import { UserAuth } from "@/app/context/AuthContext";

const StoryShowCard = ({
  userPic,
  userName,
  userClass,
  userSection,
  userOccupation,
  userStory,
  storyId,
  storyTime,
  userId,
  edited,
  userLikeCount,
}) => {
  const [liked, isLiked] = useState(false);
  const [favourite, isFavourite] = useState(false);
  const [menu, setMenu] = useState(false);
  const [dialogueBox, setDialogueBox] = useState(false);
  const [userDoc, setUserDoc] = useState(null);

  const { user } = UserAuth();

  const modalOpen = () => setDialogueBox(true); 
  const modalClose = () => setDialogueBox(false);

  const userRef = user && query(collection(db, "users", `${user.uid}`, "favourites"), where("isFavourite", "==" , true))
  const docRef = user && doc(db, "users", `${user.uid}`, "favourites", `${storyId}`);

  useEffect(() => {
    if (user) {
      let users = [];
      const querySnapshot = getDocs(userRef);
      querySnapshot.then((data) => {
        data.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        setUserDoc(users);
        
      });
    }
  }, [user]);

  useEffect(() => {
    if (userDoc && user) {
      userDoc.forEach((element) => {
          isFavourite(element.isFavourite);
      });
    }
  }, [userDoc]);

  console.log(favourite);

  const handleFavourite = () => {
    if (user) {
      isFavourite((prev) => !prev);
      setDoc(docRef, {
        isFavourite: !favourite,
      });
    }
  };

  const deleteStory = () => {
    deleteDoc(doc(db, "stories", storyId));
    modalClose();
    console.log("story Deleted successfully");
  };

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
      <div className="max-w-sm min-w-[20rem] bg-white border border-slate-400 rounded-sm">
        <div className="p-2 flex justify-between gap-2">
          <div className="flex gap-2 justify-center items-center">
            <Image
              alt="Person Image"
              src={userPic}
              className="rounded-full h-[35px] w-[35px]"
              height={35}
              width={35}
            />
            <h1 className="font-semibold">{userName}</h1>
          </div>
          <motion.div className="relative p-2 h-[40px] w-[40px]">
            {!menu ? (
              <Image
                src={menuIcon}
                alt="Menu-Icon"
                className="hover:cursor-pointer h-full w-full"
                onClick={() => setMenu((prev) => !prev)}
              />
            ) : (
              <StoryCardMenu
                modalOpen={modalOpen}
                setMenu={setMenu}
                storyId={storyId}
                postUserId={userId}
              />
            )}
          </motion.div>
          {dialogueBox && (
            <RUSureModal
              handleDelete={deleteStory}
              handleClose={modalClose}
              storyId={storyId}
            />
          )}
        </div>
        <div className="p-2 flex flex-col">
          <div className="flex items-center gap-1">
            <p className="uppercase text-violet-900">{userOccupation}</p>
            {userClass && (
              <p className="uppercase text-violet-900">| {userClass}</p>
            )}
            {userSection && (
              <p className="uppercase text-violet-900">| {userSection}</p>
            )}
          </div>
          <p className="text-sm text-slate-400">{storyTime}</p>
          <p className="text-justify">{userStory}</p>
          {edited && (
            <div className="flex justify-end">
              <p className="text-sm font-light bg-emerald-900 text-white p-[6px] border rounded-lg">
                Edited
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center h-9 border bg-violet-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            className={`${
              liked ? "bg-emerald-500" : " hover:bg-violet-400"
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
              favourite ? "bg-emerald-600" : "hover:bg-violet-400"
            }`}
            type="button"
            onClick={() => {
              handleFavourite();
            }}
          >
            ⭐
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default StoryShowCard;
