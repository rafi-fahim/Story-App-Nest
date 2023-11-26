"use client";
import CRSFrom from "@/components/CRSFrom";
import { useState , useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import Loading from "@/components/Loading";

const CreateStory = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthenticaion = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthenticaion();
  }, [user]);

  return (
    <>
      <div className="w-full min-h-screen p-4 flex justify-center items-center">
        {loading ? (
          <Loading />
        ) : user ? (
          <CRSFrom  user={user} />
        ) : (
          <p className="text-center text-red-500">
            You have to logged in --- restricted page
          </p>
        )}
      </div>
    </>
  );
};

export default CreateStory;
