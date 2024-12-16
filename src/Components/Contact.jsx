import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mt-12 mb-4 text-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center font-light bg-gradient-to-r from-neutral-400 to-slate-500 bg-clip-text text-transparent pb-2"
      >
        Contact
      </motion.h2>
      <div className="flex flex-col justify-center py-4 text-center leading-8 font-extralight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          Nico Zimmermann
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" underline"
          href="mailto:nico.z130601@gmail.com"
        >
          nico.z130601@gmail.com
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 1 }}
          href="tel:+4367764200741"
        >
          +43 67764200741
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
