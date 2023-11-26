import Image from "next/image";
import Link from "next/link"

const ProfileCard = ({ userName, userPic, storyCount , totaLike, totalFavs }) => {
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
          <div className="flex items-start justify-center font-bold text-white gap-2">
            <div className="p-2 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black rounded-lg w-32 h-24 text-center">
              Story Count
              <br />
              <span className="text-3xl text-green-700  font-kdam-pro ">
                {storyCount}
              </span>
            </div>
            <Link href="/profile/favourites">
            <div className="fav-card  transition-all hover:-translate-y-3 p-2 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black rounded-lg w-32 h-24 text-center">
                Favoutires
                <br />
                <span className="text-3xl text-green-700  font-kdam-pro ">
                  {totalFavs}
                </span>
              </div>
            </Link>
            <div className="fav-card  transition-all hover:-translate-y-3 hover:cursor-not-allowed p-2 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black rounded-lg w-32 h-24 text-center">
              Likes
              <br />
              <span className="text-3xl text-violet-700  font-kdam-pro ">
                {totaLike}
              </span>
            </div>
          </div>
      
      </div>
    </div>
  );
};

export default ProfileCard;
