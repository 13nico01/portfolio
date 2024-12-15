import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { FaG, FaGit } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { animate, motion } from "framer-motion";

const IconAnimation = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0, y: -100}}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-extralight bg-gradient-to-r from-neutral-200 to-slate-950 bg-clip-text text-transparent pb-2"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center items-center gap-12"
      >
        <motion.div
          variants={IconAnimation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={IconAnimation(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={IconAnimation(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          <FaNodeJs className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
          variants={IconAnimation(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          <TbBrandThreejs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={IconAnimation(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          <FaGit className="text-7xl" />
        </motion.div>
        <motion.div
          variants={IconAnimation(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-500 p-4"
        >
          <SiVite className="text-7xl text-purple-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
