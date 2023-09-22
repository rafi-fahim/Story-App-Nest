"use client";
import Image from "next/image";

const ProfileCard = ({ userName, userPic, storyCount }) => {
  return (
    <div className="flex flex-col gap-3 p-4 bg-white rounded-md mb-6">
      <div className="flex gap-1">
        <Image
          src={userPic}
          height={40}
          width={40}
          className="rounded-full h-[40px] w-[40px]"
          alt="Profile Pic"
        />
        <p className="font-bold text-2xl text-slate-800">\{userName}</p>
      </div>
        <div className="flex items-start gap-2">
          <div className="p-2 bg-slate-300 rounded-lg w-32 h-20 text-center">
            Story Count
            <br />
            <span className="font-bold text-3xl text-green-700 font-mono ">
              {storyCount}
            </span>
          </div>

          <div className="p-2 bg-slate-300 rounded-lg w-32 h-20 text-center">
            Favoutires
            <br />
            <span className="font-bold text-3xl text-green-700 font-mono ">
              24
            </span>
          </div>
          <div className="p-2 bg-slate-300 rounded-lg w-32 h-20 text-center">
            Liked
            <br />
            <span className="font-bold text-3xl text-violet-700 font-mono ">
              24
            </span>
          </div>
        </div>
      
    </div>
  );
};

export default ProfileCard;
