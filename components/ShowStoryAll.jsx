import { storiesRef, allStories } from "@/app/firebase";
import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import image from "@/public/empty-profile.png";
import StoryShowCard from "./StoryShowCard";

const ShowStoryAll = () => {

  const [stories, setStories] = useState(null);

  useEffect(() => {
    let story = []
     onSnapshot(storiesRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        story.push({ ...doc.data(), id: doc.id });
      });
    })
    setStories(story)
  }, [])

  return (
    <>
      <div className="p-4">
          <div className="flex flex-col justify-center items-center p-2 gap-4 w-full">
            <h1 className="p-4 font-bold text-emerald-800 lg:text-6xl bg-amber-300 border rounded-lg sm:text-3xl text-center">Here are the legendary stories</h1>
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
                      storyTime={perUser.time}
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
