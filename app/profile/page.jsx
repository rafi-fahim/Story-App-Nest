"use client";
import { useState, useEffect } from "react"
import { UserAuth } from "@/app/context/AuthContext";
import ProfileCard from "@/components/ProfileCard";
import StoryShowCard from "@/components/StoryShowCard";
import image from "@/public/empty-profile.png";
import Loading from "@/components/Loading";

const page = () => {
  const { user } = UserAuth();
  const [profilePic, setProfilePic] = useState(image)
  const [loading, setLoading] = useState(true)

  useEffect(() => {  
    const checkAuthenticaion = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50))
      setLoading(false)
    }
    checkAuthenticaion()
    if (user) {
      try{
        setProfilePic(user.photoURL)
      } catch(err) {
        console.log("the error is: " + err);
      }
    }
  }, [user])

  let users = [
    {
      userName: "Fahim Shakil",
      userOccupation: "Student",
      userClass: "8",
      userSection: "Daffo",
      userStory: "So what happended",
      key: 1,

    },
    {
      userName: "Fahim Shakil",
      userOccupation: "Student",
      userClass: "8",
      userSection: "Daffo",
      userStory: "So what happended",
      key: 2,
    },
    {
      userName: "Fahim Shakil",
      userOccupation: "Student",
      userClass: "8",
      userSection: "Daffo",
      userStory: "So what happended",
      key: 3,
    },
  ];
  const storyCard = users.map((perUser) => {
    return (
      <StoryShowCard
        userName={perUser.userName}
        userOccupation={perUser.userOccupation}
        userClass={perUser.userClass}
        userSection={perUser.userSection}
        userStory={perUser.userStory}
        userPic={profilePic}
        key={perUser.key}
      />
    )
  });

  return (
    <>
        <div className="p-4">
          {loading? (<Loading />) : user ? (
            <>
              <ProfileCard userName={user.displayName} userPic={profilePic}/>
              <div className="flex flex-col items-center justify-center gap-4">
                {storyCard}
              </div>
            </>
          )
          :
          (<p>You must be logged in to view this page!</p>)
          }
        </div>
    </>
  );
};

export default page;
