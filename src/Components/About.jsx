import aboutPic from "../assets/images/nico-ocean.jpg";
import { ABOUT_TEXT } from "../Constants";
import { motion } from "framer-motion";
import { MdDownload } from "react-icons/md";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="mt-28 mb-8 lg:mb-24 text-center text-4xl font-extralight bg-gradient-to-r from-neutral-200 to-slate-950 bg-clip-text text-transparent">
        About me
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="flex justify-around">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className=" rounded-2xl w-auto max-w-xs lg:max-w-sm  mb-8 mx-4"
              src={aboutPic}
              alt="About Picture"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 sm:py-4">
          <div className="flex justify-center flex-col">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className=" tracking-tight font-extralight text-lg leading-8"
            >
              {ABOUT_TEXT}
            </motion.p>
            <motion.div
            whileInView={{opacity: 1, x: 0, y:0}}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start items-center mt-4">
              <button className="border-2 border-neutral-400 rounded-2xl p-2 text-center flex hover:text-purple-700 hover:border-purple-700 transition-all duration-500">
                <MdDownload className="text-lg mt-1 mr-2" />
                <a
                  href="src\assets\docs\Lebenslauf.pdf"
                  download="cv_nico_zimmermann"
                >
                  Download CV
                </a>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
