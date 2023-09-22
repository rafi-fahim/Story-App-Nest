import { db } from "@/app/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { UserAuth } from "@/app/context/AuthContext";
import Link from "next/link";

const StoryCardMenu = ({ postUserId , storyId}) => {
  const { user } = UserAuth();
  const deleteStory = () => {
    deleteDoc(doc(db, "stories", storyId));
    console.log("story Deleted successfully");
  };
  return (
    <div className="flex flex-col w-16">
      <div>
        <Link href="/profile/edit-story">Edit Story</Link>
      </div>
      {user.uid == postUserId && (
        <button onClick={() => deleteStory()} className="text-red-500 hover:cursor-pointer">
          Delete Story
        </button>
      )}
      <div>
        Want more?
      </div>
    </div>
  );
};

export default StoryCardMenu;
