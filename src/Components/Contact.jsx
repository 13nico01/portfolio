import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="mt-12 mb-4 text-center">
      <h2 className="text-4xl text-center font-light bg-gradient-to-r from-neutral-400 to-slate-500 bg-clip-text text-transparent pb-2">
        Contact
      </h2>
      <div className="flex flex-col justify-center py-4 text-center leading-8 font-extralight">
        <p>Nico Zimmermann</p>
        <a className=" underline" href="mailto:nico.z130601@gmail.com">nico.z130601@gmail.com</a>
        <a href="tel:+4367764200741">+43 67764200741</a>
      </div>
    </div>
  );
};

export default Contact;
