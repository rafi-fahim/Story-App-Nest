"use client";
import Image from "next/image";

const ProfileCard = ({ userName, userPic, storyCount , totaLike }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 p-4 w-full md:w-3/6 lg:w-3/6 bg-white rounded-md mb-6">
        <div className="flex items-center gap-1">
          <Image
            src={userPic}
            height={40}
            width={40}
            className="rounded-full h-[40px] w-[40px]"
            alt="Profile Pic"
          />
          <p className="font-bold text-2xl text-slate-800">\{userName}</p>
        </div>
          <div className="flex items-start justify-center gap-2">
            <div className="p-2 bg-slate-300 rounded-lg w-32 h-24 text-center">
              Story Count
              <br />
              <span className="font-bold text-3xl text-green-700 font-mono ">
                {storyCount}
              </span>
            </div>
            <div className="p-2 bg-slate-300 rounded-lg w-32 h-24 text-center">
              Favoutires
              <br />
              <span className="font-bold text-3xl text-green-700 font-mono ">
                24
              </span>
            </div>
            <div className="p-2 bg-slate-300 rounded-lg w-32 h-24 text-center">
              Likes
              <br />
              <span className="font-bold text-3xl text-violet-700 font-mono ">
                {totaLike}
              </span>
            </div>
          </div>
      
      </div>
    </div>
  );
};

export default ProfileCard;
