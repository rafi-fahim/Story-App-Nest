"use client";
import { UserAuth } from "@/app/context/AuthContext";
import { db } from "@/app/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import StoryShowCard from "./StoryShowCard";
import image  from "@/public/empty-profile.png"
import Link from "next/link";

const RenderFavourites = ({}) => {
  const [favStoryData, setFavStoryData] = useState(null);
  const { user } = UserAuth();
  useEffect(() => {
    if (user) {
      // User reference to the database
      const userRef = collection(db, "users", `${user.uid}`, "favourites");
      //getting data from Database
      const userFavouriteSnapshot = getDocs(userRef);
      //performing a loop to do the ??
      userFavouriteSnapshot.then((data) => {
        let userFav = [];

        data.forEach((doc) => {
          userFav.push({ ...doc.data(), id: doc.id });
        });

        let favStoryId = [];

        userFav.forEach((userfav) => {
          if (userfav.isFavourite == true) {
            favStoryId.push(userfav.id);
          }
        });

        let favStories = [];

        favStoryId.forEach((id) => {
          getDoc(doc(db, "stories", `${id}`)).then((doc) => {
            favStories.push({ ...doc.data(), id: doc.id });
            setFavStoryData(favStories);
          });
        });
      });
    }
  }, [user]);

  return (
    <div className="flex jusify center items-center p-2 flex-col gap-2">
      {favStoryData ? favStoryData.map((data) => {
        return (
          <StoryShowCard
            userName={data.name}
            userOccupation={data.occupation}
            userClass={data.class}
            userSection={data.section}
            userStory={data.storyText}
            userLikeCount={data.likeCount}
            storyId={data.id}
            storyTime={data.time}
            userId={data.uid}
            userPic={data.userPic ? data.userPic : image}
            edited={data.edited ? data.edited : false}
            key={data.id}
          />
        );
      }): (
        <div>
          If you don't like other stories then make your fascinating story.
          <Link
            href="/create-story"
            className="underline text-indigo-500 hover:text-indigo-800 transition-all"
          >
            Click here to make one
          </Link>
        </div>
      )
      }
    </div>
  );
};

export default RenderFavourites;
