import { storiesRef } from "@/app/firebase";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import image from "@/public/empty-profile.png";
import StoryShowCard from "./StoryShowCard";

const ShowStoryAll = () => {
  const [stories, setStories] = useState(null);
  useEffect(() => {
    let story = [];
    onSnapshot(storiesRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        story.push({ ...doc.data(), id: doc.id });
      });
      setStories(story);
    });
  }, [])
  
  console.log(stories);
  return (
    <>
      <div className="p-4">
        <div className="flex flex-col justify-center items-center p-2 gap-4 w-full">
          <div className="p-4 font-bold text-emerald-800 lg:text-6xl bg-amber-300 border rounded-lg w-full text-3xl text-center">
            Here are the <br className="lg:hidden" /><span className="text-indigo-400 uppercase">legendary stories</span>
          </div>
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
                  storyId={perUser.id}
                  storyTime={perUser.time}
                  userId={perUser.uid}
                  userPic={perUser.userPic ? perUser.userPic : image}
                  edited={perUser.edited ? perUser.edited : false }
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
