"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import image from "@/public/empty-profile.png";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [toogleMenu, setToogleMenu] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  function toggleProfileFunc() {
    setToggleProfile((prev) => !prev);
  }
  return (
    <>
      <nav className="flex justify-between p-4 h-16 text-center bg-stone-800 text-white items-center">
        {/* PC Menu */}
        <div className="sm:block none flex justify-center items-center gap-2">
          <Link className="hover:underline mr-3" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/read-story">
            Read Story
          </Link>
        </div>
        {/* Mobile Menu */}
        <button
          type="button"
          className={`${!toggleProfile ? "block" : "none"} none max-sm:block `}
          onClick={() => setToogleMenu((prev) => !prev)}
        >
          Toogle Menu
        </button>
        <motion.div
          className={`bg-indigo-400 ${
            toogleMenu ? "block" : "none"
          } flex justify-start flex-col gap-2 text-start -left-0 -top-0  absolute w-[100px] h-[200px]`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/read-story">
            Read Story
          </Link>{" "}
          <button type="button" onClick={() => setToogleMenu((prev) => !prev)}>
            Toogle Menu
          </button>
        </motion.div>
        {isLoggedIn ? (
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
                src={image}
                alt="Profile-Pic"
              />
              {toggleProfile && (
                <>
                  <Link href="/profile">Go to Profile</Link>
                </>
              )}
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={() => signIn()}
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
