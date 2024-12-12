import aboutPic from "../assets/images/nico-ocean.jpg";
import { ABOUT_TEXT } from "../Constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="mt-28 mb-8 lg:mb-24 text-center text-4xl font-light bg-gradient-to-r from-slate-200 to-neutral-500 bg-clip-text text-transparent">
        About me
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="flex items-center justify-center">
            <img
              className=" rounded-2xl h-96 w-96 mb-8"
              src={aboutPic}
              alt="About Picture"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 sm:py-4">
          <div className="flex justify-center">
            <p className=" tracking-tight font-extralight text-lg my-2 leading-8">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
