"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import image from "@/public/empty-profile.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserAuth } from "@/app/context/AuthContext";

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const { user, googleSignIn, logOut } = UserAuth();
  const [profilePic, setProfilePic] = useState(image);

  useEffect(() => {
    if (user) {
      try {
        setProfilePic(user.photoURL);
      } catch (err) {
        console.log("the error is: " + err);
      }
    }
  }, [user]);

  function toggleProfileFunc() {
    setToggleProfile((prev) => !prev);
  }

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <nav className="flex justify-between p-4 h-16 text-center bg-stone-800 text-white items-center">
        {/* PC Menu */}
        <div className="lg:hidden flex justify-center items-center gap-2">
          <Link className="hover:underline mr-3" href="/">
            Home
          </Link>
          <Link className="hover:underline mr-3" href="/read-story">
            Read Story
          </Link>
          <Link className="hover:underline" href="/about-us">
            About Us
          </Link>
        </div>
        {/* Mobile Menu */}
        <motion.button
          whileTap={{ scale: 1.3 }}
          type="button"
          className={`${!toggleProfile ? "block" : "hidden"} text-emerald-300 hidden max-sm:block `}
          onClick={() => setToogleMenu((prev) => !prev)}
        >
          Menu
        </motion.button>
        {toogleMenu && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`bg-indigo-400 left-0 bottom-0 absolute flex items-center justify-center flex-col text-start w-[150px] h-screen`}
          >
            <Link
              onClick={() => setToogleMenu((prev) => !prev)}
              className="hover:underline flex justify-center items-center transition-all hover:scale-110 p-3 border w-full hover:bg-indigo-500  "
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setToogleMenu((prev) => !prev)}
              className="hover:underline flex justify-center items-center transition-all hover:scale-110 p-3 border w-full hover:bg-indigo-500"
              href="/read-story"
            >
              Read Story
            </Link>
            <Link
              onClick={() => setToogleMenu((prev) => !prev)}
              className="hover:underline flex justify-center items-center transition-all hover:scale-110 p-3 border w-full hover:bg-indigo-500"
              href="/about-us"
            >
              About Us
            </Link>
            <button
              type="button"
              onClick={() => setToogleMenu((prev) => !prev)}
              className="hover:underline text-red-200 transition-all hover:scale-110 p-3 border w-full hover:bg-red-500  "
            >
              Close Menu
            </button>
          </motion.div>
        )}
        {user ? (
          <>
            <div className="flex justify-center items-center gap-2">
              <Link
                href="/create-story"
                type="button"
                className="w-36 p-[2px] rounded-3xl bg-indigo-500 hover:bg-indigo-800 border border-slate-200"
              >
                Create Story
              </Link>
              <Image
                onClick={() => toggleProfileFunc()}
                className="rounded-full h-[35px] w-[35px]"
                src={profilePic}
                width={35}
                height={35}
                alt="Profile-Pic"
              />
              {toggleProfile && (
                <>
                  <Link onClick={() => toggleProfileFunc()} href="/profile">
                    Go to Profile
                  </Link>
                  <button
                    type="button"
                    className="hover:underline hover:text-red-500"
                    onClick={() => {
                      handleSignOut();
                      toggleProfileFunc();
                    }}
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={() => handleSignIn()}
            className="w-36 rounded-3xl bg-indigo-500 hover:bg-indigo-800 border border-slate-200"
          >
            Sign In
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
