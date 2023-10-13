"use client";
import { motion } from "framer-motion";
const WhyCard = ({ title, description, delay }) => {
  return (
    <motion.div
      initial={{ translateX: "-100%" }}
      animate={{ translateX: 0 }}
      whileHover={{ translateY: -10 }}
      className={`p-2 hover:cursor-pointer hover:bg-stone-700 transition-all shadow-lg shadow-slate-500 bg-stone-900 w-80 h-64 flex flex-col gap-2 border-[.5px] border-indigo-600 rounded-lg`}
    >
      <h1 className="text-xl text-emerald-400 font-semibold">{title}</h1>
      <p className="text-slate-50">{description}</p>
    </motion.div>
  );
};

export default WhyCard;
