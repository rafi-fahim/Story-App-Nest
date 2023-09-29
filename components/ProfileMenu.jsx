"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const ProfileMenu = ({ toggleProfile, handleSignOut }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 , opacity: 0 , translateY:"-8rem" }}
        animate={{ scale: 1 , opacity: 1 , translateY: 0}}
        className="absolute text-left shadow-md rounded-b-lg flex flex-col items-center bg-purple-800 top-16 right-0"
      >
        <Link
          className="p-2 hover:scale-110 hover:bg-purple-950 w-full"
          onClick={toggleProfile}
          href="/profile"
        >
          Go to Profile
        </Link>
        <button
          type="button"
          className="hover:scale-110 transition p-2 hover:bg-purple-950 w-full hover:text-red-500"
          onClick={() => {
            handleSignOut();
            toggleProfile();
          }}
        >
          Sign Out
        </button>
        <button
          type="button"
          className="hover:scale-110 transition p-2 rounded-b-md hover:bg-purple-950 w-full hover:text-red-500"
          onClick={() => {
            toggleProfile();
          }}
        >
          Close Menu
        </button>
      </motion.div>
    </>
  );
};

export default ProfileMenu;
