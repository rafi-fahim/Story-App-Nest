"use client";
import { db } from "@/app/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import Loading from "@/components/Loading";
import Link from "next/link";

const page = ({ params }) => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [storyEdited, setStoryEdited] = useState(false);
  const user = UserAuth();
  const docRef = doc(db, "stories", `${params.id}`);

  useEffect(() => {
    const checkAuthenticaion = async () => {
      await new Promise((resolve) => setTimeout(resolve, 60));
      setLoading(false);
    };
    checkAuthenticaion();
    getDoc(docRef).then((doc) => {
      setStory(doc.data());
    });
  }, []);

  function handleUpdate() {
    setDoc(docRef, story).then(() => console.log("Story Updated"));
    setStoryEdited(true);
    // if (alert("Your story has been edited successfully 😀")) {
    // } else {
    //   window.location.reload();
    // }
  }
  // const checkWorthy = () => {
  //   if (story) {
  //     if (story.uid === user.uid) {
  //       return true;
  //     }
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <>
      {loading ? (
        <Loading />
      ) : user ? (
        !storyEdited ? (
          <div className="flex flex-col gap-2 justify-center items-center p-4 w-full">
            <form
              className="shadow-lg flex relative justify-center items-center flex-col gap-2 shadow-indigo-500 p-4 w-[600px] border border-slate-950 rounded-xl bg-[#4568E4]"
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
              }}
            >
              <h1 className="w-full h-10 flex justify-center items-center absolute rounded-t-xl top-0 bg-teal-800 text-white text-2xl justify-self-start">
                Correct your misfortune
              </h1>
              <label
                className="mt-10 border shadow-sm shadow-slate-600 text-center text-white w-[230px] p-1 rounded-lg "
                htmlFor="name"
              >
                Change your name
              </label>
              <motion.input
                type="text"
                id="name"
                value={story ? story.name : "Getting Data"}
                className="border shadow-md shadow-slate-600 w-[230px]  h-9 rounded-lg p-1 "
                onChange={(e) => {
                  setStory((prev) => {
                    return {
                      ...prev,
                      [e.target.name]: e.target.value,
                      edited: true,
                    };
                  });
                  console.log(story);
                }}
                name="name"
                whileTap={{ scale: 1.2 }}
              />
              <label
                className="border shadow-sm shadow-slate-600 text-center text-white w-[230px] p-1 rounded-lg "
                htmlFor="storyText"
              >
                Edit the story
              </label>
              <textarea
                name="storyText"
                id="storyText"
                className="border bg-light-dark w-full text-black border-emerald-700 p-3 "
                value={story ? `${story.storyText}` : "Getting data"}
                onChange={(e) => {
                  setStory((prev) => {
                    return {
                      ...prev,
                      [e.target.name]: e.target.value,
                      edited: true,
                    };
                  });
                  console.log(story);
                }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.5 }}
                className="rounded-md p-2  hover:bg-emerald-950 hover:border-emerald-400 hover:border-2 bg-emerald-700 text-white"
              >
                Submit Changes
              </motion.button>
            </form>
          </div>
        ) : (
          <div className="flex-col font-thin bg-slate-600 text-white flex justify-center p-4 text-center items-center w-full h-screen">
            <p>
              This story was succsessfully Edited. Now go Back before you break my
              cheap app
            </p>
            <Link className="p-2 transition bg-rose-500 rounded-lg border hover:scale-125" href="/profile" >
              Click here to go back
            </Link>
          </div>
        )
      ) : (
        <div className="bg-slate-600 text-white text-3xl h-screen w-full flex justify-center items-center">
          It seems you entered the wrong area.🔫
        </div>
      )}
    </>
  );
};

export default page;
