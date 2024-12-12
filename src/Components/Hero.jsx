import profile from "../assets/images/nico-transparent.png";
import { HERO_TEXT } from "../Constants";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="sm:text-5xl pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Nico Zimmermann
            </h1>
            <span className=" lowercase bg-gradient-to-r from-blue-700 via-slate-500 to-green-700 bg-clip-text text-4xl tracking-tight text-transparent">
              Web-Developer
            </span>
            <p className="my-2 max-w-xl py-6 tracking-tight leading-8 font-extralight text-lg">{HERO_TEXT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-xl brightness-95 max-w-sm pt-20" src={profile} alt="ProfilePicture"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
