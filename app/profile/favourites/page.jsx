"use client"
import { UserAuth } from "@/app/context/AuthContext";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import RenderFavourites from "@/components/RenderFavourites";

const page = () => {
  const { user } = UserAuth();

  const [loading, setLoading] = useState();

  useEffect(() => {
    const checkAuthenticaion = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthenticaion();
  }, [user]);
  
  return (
    <>
      <div className="flex justify-center items-center flex-col p-2">
        <h1 className="p-2 text-3xl max-sm:tex-xl max-sm:w-11/12 w-2/6 bg-slate-800 text-center text-white font-extrabold rounded-md shadow-green-300 shadow-md">
          Your Favourites... ❤
        </h1>
        {loading ? (
          <Loading />
        ) : user ? (
          <RenderFavourites />
        ) : (
          <h1>You picked the wrong house full</h1>
        )}
      </div>
    </>
  );
};

export default page;
