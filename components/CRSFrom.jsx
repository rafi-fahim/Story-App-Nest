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
        time: dateTime
      });
      if(alert("Your story has been submitted successfully 😀")) {}
      else {
        window.location.reload()
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
            className="border shadow-md shadow-slate-600 w-[230px]  h-9 rounded-lg p-1 bg-light-dark border-col-1"
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
              className="bg-light-dark"
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
              <option className="bg-light-dark" value="none">
                --none--
              </option>
              <option className="bg-light-dark" value="dahlia">
                Dahlia
              </option>
              <option className="bg-light-dark" value="daffo">
                Daffo
              </option>
              <option className="bg-light-dark" value="dolon">
                Dolon
              </option>
              <option className="bg-light-dark" value="shapla">
                Shapla
              </option>
              <option className="bg-light-dark" value="mohua">
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
          className="shadow-lg shadow-indigo-500 p-4 w-[600px] h-[400px] border border-slate-950 rounded-xl bg-[#4568E4] "
          initial={{ scale:0 }}
          animate={{ scale:1 }}
        >
        <h1 className="text-center text-white text-2xl">
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
            placeholder="Your name"
            className="border shadow-md shadow-slate-600 w-[230px]  h-9 rounded-lg p-1 bg-light-dark border-col-1"
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
              className="border shadow-md shadow-slate-600 w-[230px] text-white h-9 rounded-lg p-1 bg-light-dark border-col-1"
            >
              Choose your Occupation
            </label>
            <select
              className="flex flec-col text-slate-100 rounded-sm bg-slate-900 gap-1 shadow-md shadow-slate-600 w-[230px]"
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
              className="border shadow-md shadow-slate-600 w-[230px] h-9 rounded-lg bg-light-dark p-1 border-green-400"
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
            className="border bg-light-dark w-full text-black border-emerald-700 p-3 "
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
            className="justify-items-center h-10 w-20 rounded hover:bg-emerald-950 hover:border-emerald-400 hover:border-2 bg-emerald-700 text-white "
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </>
  );
};

export default CRSFrom;
