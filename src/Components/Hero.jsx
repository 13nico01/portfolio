import profile from "../assets/images/placeholder.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Nico Zimmermann
            </h1>
            <span className=" lowercase bg-gradient-to-r from-blue-700 via-slate-500 to-green-700 bg-clip-text text-4xl tracking-tight text-transparent">
              Web-Developer
            </span>
            <p className="my-2 max-w-xl py-6 tracking-tighter leading-7">
              I'm Nico, a 18 year old web developer from Austria with a strong
              passion for building websites. I've been working in web
              development for almost 5 years now.
              <br /> My favorite tools are ReactJS for building the front-end
              and Tailwind CSS for making everything look great and desing the
              website individual.
              <br /> I love web development because it allows me to create
              almost anything I can imagine online. Every project is a new
              adventure and a chance to learn something new.
              <br /> I'm excited to share my projects with you and explore
              what's possible together in the world of web development!
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="pt-12" src={profile} alt="ProfilePicture"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
