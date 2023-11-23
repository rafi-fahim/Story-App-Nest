"use client";
import { useState, useEffect } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { query, where, onSnapshot, collection, getDocs } from "firebase/firestore";
import { storiesRef , db } from "../firebase";
import ProfileCard from "@/components/ProfileCard";
import StoryShowCard from "@/components/StoryShowCard";
import image from "@/public/empty-profile.png";
import Loading from "@/components/Loading";

const page = () => {
  const { user } = UserAuth();
  const [profilePic, setProfilePic] = useState(image);
  const [userStories, setUserStories] = useState(null);
  const [storyCount, setStoryCount] = useState(0);
  const [totalFavs, setTotalFavs] = useState(0)
  const [totalLikes, setTotalLikes] = useState(0);
  const [loading, setLoading] = useState(true);

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
        setStoryCount(stories.length);
        const userRef = collection(db, "users", `${user.uid}`, "favourites");
        const userFavouriteSnapshot = getDocs(userRef);
        userFavouriteSnapshot.then((data) => {
          let userFav = [];
          data.forEach((doc) => {
            userFav.push({ ...doc.data(), id: doc.id });
          });
          setTotalFavs(userFav.length)
        });
      });
    }
  }, [user]);

  return (
    <>
      <div className="p-4 bg-slate-950">
        {loading ? (
          <Loading />
        ) : user ? (
          <>
            <ProfileCard
              totaLike={totalLikes}
              userName={user.displayName}
              storyCount={storyCount}
              userPic={profilePic}
              totalFavs={totalFavs}
            />
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
                      storyTime={perUser.time}
                      storyId={perUser.id}
                      userId={perUser.uid}
                      userPic={profilePic}
                      edited={perUser.edited ? perUser.edited : false}
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
