"use client";
import { useState, useEffect } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import {
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db, storiesRef } from "../firebase";
import ProfileCard from "@/components/ProfileCard";
import StoryShowCard from "@/components/StoryShowCard";
import image from "@/public/empty-profile.png";
import Loading from "@/components/Loading";

const page = () => {
  const { user } = UserAuth();
  const [profilePic, setProfilePic] = useState(image);
  const [loading, setLoading] = useState(true);
  const [userStories, setUserStories] = useState(null);

  useEffect(() => {
    const checkAuthenticaion = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthenticaion();
    if (user) {
      try {
        setProfilePic(user.photoURL);
      } catch (err) {
        console.log("the error is: " + err);
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const userId = user.uid;
      const q = query(storiesRef, where("uid", "==", userId));
      onSnapshot(q, (snapshot) => {
        let stories = [];
        snapshot.docs.forEach((doc) => {
          stories.push({ ...doc.data(), id: doc.id });
        });
        setUserStories(stories);
        console.log(stories);
      });
    }
  }, [user]);

  return (
    <>
      <div className="p-4">
        {loading ? (
          <Loading />
        ) : user ? (
          <>
            <ProfileCard userName={user.displayName} userPic={profilePic} />
            <div className="flex flex-col items-center justify-center gap-4">
              {userStories &&
                userStories.map((perUser) => {
                  return (
                    <StoryShowCard
                      userName={perUser.name}
                      userOccupation={perUser.occupation}
                      userClass={perUser.class}
                      userSection={perUser.section}
                      userStory={perUser.storyText}
                      userLikeCount={perUser.likeCount}
                      storyDate={perUser.time}
                      userId={perUser.uid}
                      userPic={profilePic}
                      key={perUser.id}
                    />
                  );
                })}
            </div>
          </>
        ) : (
          <p>You must be logged in to view this page!</p>
        )}
      </div>
    </>
  );
};

export default page;
