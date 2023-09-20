import { storiesRef } from "@/app/firebase";
import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import image from "@/public/empty-profile.png";
import StoryShowCard from "./StoryShowCard";

const ShowStoryAll = () => {
  const [stories, setStories] = useState(null);

  useEffect(() => {
    onSnapshot(storiesRef, (snapshot) => {
      let stories = [];
      snapshot.docs.forEach((doc) => {
        stories.push({ ...doc.data(), id: doc.id });
      });
      setStories(stories);
      console.log(stories);
    });
  }, []);
  return (
    <>
      <div className="p-4">
          <div className="flex flex-col justify-center  gap-4 w-full">
            <h1>Here are the legendary stories</h1>
              {stories &&
                stories.map((perUser) => {
                  return (
                    <StoryShowCard
                      userName={perUser.name}
                      userOccupation={perUser.occupation}
                      userClass={perUser.class}
                      userSection={perUser.section}
                      userStory={perUser.storyText}
                      userLikeCount={perUser.likeCount}
                      storyDate={perUser.time}
                      storyId={perUser.id}
                      userId={perUser.uid}
                      userPic={perUser.userPic ? perUser.userPic : image}
                      key={perUser.id}
                    />
                  );
                })}
          </div>
      </div>
    </>
  );
};

export default ShowStoryAll;
