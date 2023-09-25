import { db } from "@/app/firebase";
import { UserAuth } from "@/app/context/AuthContext";
import { motion } from "framer-motion";
import Link from "next/link";

const StoryCardMenu = ({ modalOpen, setMenu, postUserId }) => {
  const { user } = UserAuth();

  return (
    <motion.div
      className="absolute flex flex-col w-36 bg-slate-100 border-slate-500  rounded-md"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, rotate: 360 }}
    >
      {user.uid == postUserId && (
        <div className="hover:bg-stone-300 flex items-center gap-1 p-2 text-start rounded transition cursor-pointer">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
          </svg>
          <Link href="/profile/edit-story">Edit Story</Link>
        </div>
      )}
      {user.uid == postUserId && (
        <button
          onClick={() => modalOpen()}
          className="text-red-600 hover:bg-stone-300 flex items-center gap-1 p-2 text-start rounded transition cursor-pointer"
        >
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#ff1f2e"
              d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
            />
          </svg>
          Delete Story
        </button>
      )}
      <button
        onClick={() => setMenu((prev) => !prev)}
        className="flex gap-1 items-center hover:bg-stone-300 p-2 text-start rounded transition cursor-pointer"
      >
        <svg
          className="w-3 h-w-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
        {user.uid == postUserId ? "Close" : "Nothing Here 😛"}
      </button>
    </motion.div>
  );
};

export default StoryCardMenu;
