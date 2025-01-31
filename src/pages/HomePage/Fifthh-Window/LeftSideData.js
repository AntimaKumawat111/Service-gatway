import React from "react";
import { motion } from "framer-motion";

function LeftSideData() {
  return (
    <div className="w-full flex flex-col gap-5 lg:w-[50%] p-6 lg:p-3">
      {/* Top Data Animation (Upar se enter karega) */}
      <motion.div
        className="flex flex-col gap-2 sm:mb-6"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in the viewport
      >
        <p className="text-sm tracking-wide capitalize">current bid at:</p>
        <p className="text-xl tracking-wider sm:text-3xl text-blue-600 font-bold mb-5">
          $2,898
        </p>
        <h1 className="fifthWindow_h1 text-2xl w-[17rem] font-bold tracking-wide capitalize sm:w-[30rem] xl:w-[30rem]">
          velocity vision where Performance means
        </h1>
      </motion.div>

      {/* Bottom Data Animation (Neeche se enter karega) */}
      <motion.div
        className="flex flex-col gap-1"
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in the viewport
      >
        <h1 className="capitalize underline text-lg font-medium tracking-wide sm:text-xl">
          auction will be end:
        </h1>
        <div className="flex gap-4 items-center">
          {["Day", "hour", "min", "sec"].map((label, index) => (
            <h6
              key={index}
              className="flex flex-col text-lg font-normal tracking-wider sm:text-xl"
            >
              <span className="font-bold">00</span>
              {label}
            </h6>
          ))}
        </div>
      </motion.div>

      {/* Button Animation (Neeche se enter karega) */}
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in the viewport
      >
        <button className="bg-blue-600 text-lg sm:text-xl text-white py-2 px-4 rounded-2xl">
          Bid now
        </button>
      </motion.div>
    </div>
  );
}

export default LeftSideData;
