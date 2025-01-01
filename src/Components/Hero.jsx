import profile from "../assets/images/nico-transparent.png";
import { HERO_TEXT } from "../Constants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="sm:text-5xl pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Nico Zimmermann
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className=" lowercase bg-gradient-to-r from-blue-700 via-slate-500 to-green-700 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Frontend-Developer
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="my-2 max-w-xl py-6 tracking-tight leading-8 font-extralight text-lg"
            >
              {HERO_TEXT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="rounded-xl brightness-95 w-auto max-w-xs lg:pt-20"
              src={profile}
              alt="ProfilePicture"
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;