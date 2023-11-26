"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

const CRSFrom = ({ user }) => {
  const [storyData, setStoryData] = useState({
    name: "",
    occupation: "",
    class: "",
    section: "",
    storyText: "",
    likeCount: 0,
    time: "",
    uid: "",
    userPic: "",
    edited: false,
  });

  const handleStorySubmit = async () => {
    try {
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      let time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let dateTime = date + " " + time;
      const docRef = await addDoc(collection(db, "stories"), {
        ...storyData,
        uid: user.uid,
        userPic: user.photoURL,
        time: dateTime,
      });
      if (alert("Your story has been submitted successfully 😀")) {
      } else {
        window.location.reload();
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const checkCpsc = () => {
    if (storyData.occupation === "cpscian") {
      return (
        <>
          <input
            type="text"
            placeholder="Your Class"
            className="border shadow-sm text-black shadow-white w-[230px] h-9 rounded-lg p-2"
            required
            name="class"
            onChange={(e) => {
              setStoryData((prev) => {
                return {
                  ...prev,
                  [e.target.name]: e.target.value,
                };
              });
            }}
          />
          <div className="flex flec-col gap-1">
            <label htmlFor="section">Choose your section</label>
            <select
              className="bg-white text-black"
              required
              onChange={(e) => {
                setStoryData((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                });
              }}
              name="section"
              id="section"
            >
              <option className="bg-black text-white" value="none">
                --none--
              </option>
              <option className="bg-black text-white" value="dahlia">
                Dahlia
              </option>
              <option className="bg-black text-white" value="daffo">
                Daffo
              </option>
              <option className="bg-black text-white" value="dolon">
                Dolon
              </option>
              <option className="bg-black text-white" value="shapla">
                Shapla
              </option>
              <option className="bg-black text-white" value="mohua">
                Mohua
              </option>
            </select>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <motion.div
        className="shadow font-kdam-pro shadow-white p-4 w-[600px] h-auto border border-slate-950 rounded-xl text-white bg-black "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <h1 className="text-center font-extrabold text-white text-2xl">
          Write your fabilous Story. 😀
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleStorySubmit();
          }}
          className="flex items-center flex-col mt-4 gap-2 p-3"
        >
          <motion.input
            type="text"
            required
            placeholder="Your name"
            className="border shadow-sm text-black shadow-white w-[230px] p-2 h-9 rounded-lg"
            onChange={(e) => {
              setStoryData((prev) => {
                return {
                  ...prev,
                  [e.target.name]: e.target.value,
                };
              });
            }}
            name="name"
            whileTap={{ scale: 1.2 }}
          />
          <div className="flex flex-col gap-2">
            <label
              htmlFor="occupation"
              className="border shadow-sm shadow-white w-[230px] text-white h-9 rounded-lg p-[5px] bg-black"
            >
              Choose your Occupation
            </label>
            <select
              className="flex flec-col h-9 p-2 rounded-sm bg-black gap-1 shadow-sm shadow-white w-[230px]"
              required
              onChange={(e) => {
                setStoryData((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                });
              }}
              name="occupation"
              id="occupation"
            >
              <option className="bg-slate-900" value="none">
                --none--
              </option>
              <option className="bg-slate-900" value="student">
                Student
              </option>
              <option className="bg-slate-900" value="job">
                Job
              </option>
              <option className="bg-slate-900" value="cpscian">
                CPSCIAN
              </option>
              <option className="bg-slate-900" value="other">
                Other
              </option>
            </select>
          </div>
          {storyData.occupation === "student" && (
            <motion.input
              type="text"
              placeholder="Your Class"
              required
              className="border shadow-sm text-black shadow-white w-[230px] h-9 rounded-lg bg-light-dark p-1 border-green-400"
              name="class"
              onChange={(e) => {
                setStoryData((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                });
              }}
            />
          )}
          {checkCpsc()}
          <textarea
            name="storyText"
            className="border text-black w-full border-white p-3 "
            required
            placeholder={`${storyData.name}${
              storyData.name ? ", " : ""
            }Write your story`}
            onChange={(e) => {
              setStoryData((prev) => {
                return {
                  ...prev,
                  [e.target.name]: e.target.value,
                };
              });
            }}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.5 }}
            type="submit"
            className="justify-items-center h-10 w-20 rounded hover:bg-black hover:border-white hover:text-white hover:border-2 bg-white text-black "
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </>
  );
};

export default CRSFrom;
