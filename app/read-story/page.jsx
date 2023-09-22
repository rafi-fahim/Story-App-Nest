"use client"
import Loading from "@/components/Loading";
import ShowStoryAll from "@/components/ShowStoryAll";
import { useState, useEffect } from "react";

const ReadStory = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthenticaion = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthenticaion();
  }, []);

  return (
    <>
      <div className="flex bg-slate-200 justify-center items-center w-full">
        {loading ? (
          <Loading />
        ) : (
          <ShowStoryAll />
        )}
      </div>
    </>
  );
};

export default ReadStory;
