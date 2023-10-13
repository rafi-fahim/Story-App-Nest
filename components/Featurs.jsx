"use client";
import { motion } from "framer-motion";

const Featurs = () => {
  return (
    <div>
      <h1 className="text-center p-2 bg-stone-900 rounded-lg text-4xl max-sm:text-2xl font-extrabold uppercase text-white">
        Featurs? 📱
      </h1>
      <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 p-4 justify-items-center place-items-center md:grid-cols-2 gap-4">
          <motion.div className="w-[330px] h-[200px] p-2 rounded-lg border-2 shadow-xl shadow-slate-900 ">
            <h1>Trusted Login</h1>
            <p>
              We use Firebase Google Auth. So you can log into our app with your
              Google Account. No worries. Under the hood we use Firebase auth. So no
              tention for getting hacked
            </p>
          </motion.div>
          <motion.div className="w-[330px] h-[200px] p-2 rounded-lg border-2 shadow-xl shadow-slate-900 ">
            <h1>Trusted Login</h1>
            <p>
              We use Firebase Google Auth. So you can log into our app with your
              Google Account. No worries. Under the hood we use Firebase auth. So no
              tention for getting hacked
            </p>
          </motion.div>
          <motion.div className="w-[330px] h-[200px] p-2 rounded-lg border-2 shadow-xl shadow-slate-900 ">
            <h1>Trusted Login</h1>
            <p>
              We use Firebase Google Auth. So you can log into our app with your
              Google Account. No worries. Under the hood we use Firebase auth. So no
              tention for getting hacked
            </p>
          </motion.div>
      </div>
    </div>
  );
};

export default Featurs;
