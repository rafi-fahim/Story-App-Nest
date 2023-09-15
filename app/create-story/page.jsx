"use client";
import CRSFrom from "@/components/CRSFrom";
import { useState , useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import Loading from "@/components/Loading";

const page = () => {
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
      <div className="w-full p-4 h-screen flex justify-center items-center">
        {loading ? (
          <Loading />
        ) : user ? (
          <CRSFrom userId={user.uid} />
        ) : (
          <p className="text-center text-red-500">
            You have to logged in --- restricted page
          </p>
        )}
      </div>
    </>
  );
};

export default page;
