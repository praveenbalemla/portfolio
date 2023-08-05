import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014-2016</p>
          <h2 className="text-4xl font-bold">Extra Curricular Activity</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="National Workshop on Article-370 and Act-2019"
            subTitle="political science"
            result="Success"
            des="Has attended one day Natonal Workshop 'Jammu and Kashmir Article-370 and Reorganisation Act-2019'."
          />
          <ResumeCard
            title="RashtraPita Mahatma Gandhi Quiz"
            subTitle="Sri kakatiya junior college"
            result="Success"
            des="International Non Violence Day occasion arranged a online Technical java Quiz Performed Excellent."
          />
          <ResumeCard
            title="Mastering Interview Questions"
            subTitle="Great learing on online platform"
            result="Success"
            des="Completed  how to perform well in interview course certificate"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2022</p>
          <h2 className="text-4xl font-bold">Achievement</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Served as volunteer during COVID-19"
            subTitle="To be helpfull to nation"
            result="Success"
            des="Educated public about the various factors about affecting with covid and necessary precautions to be taken"
          />
          <ResumeCard
            title="CODING NINJAS Challenge."
            subTitle="To be more efficient in problem solving"
            result="Success"
            des="Explore new topics in dsa and perform new tasks in programming"
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
