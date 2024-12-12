import aboutPic from "../assets/images/nico-ocean.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl font-light bg-gradient-to-r from-slate-200 to-neutral-500 bg-clip-text text-transparent">
        About me
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="flex items-center justify-center">
            <img className=" rounded-2xl h-96 my-2" src={aboutPic} alt="About Picture" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 sm:py-4">
          <div className="flex justify-center">
            <p className=" tracking-tighter my-2 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              doloribus aliquid porro, quisquam exercitationem in quae,
              voluptate inventore maxime libero mollitia unde. Ea pariatur
              magnam consequuntur quos nulla sapiente quam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              doloribus aliquid porro, quisquam exercitationem in quae,
              voluptate inventore maxime libero mollitia unde. Ea pariatur
              magnam consequuntur quos nulla sapiente quam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              doloribus aliquid porro, quisquam exercitationem in quae,
              voluptate inventore maxime libero mollitia unde. Ea pariatur
              magnam consequuntur quos nulla sapiente quam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              doloribus aliquid porro, quisquam exercitationem in quae,
              voluptate inventore maxime libero mollitia unde. Ea pariatur
              magnam consequuntur quos nulla sapiente quam!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              doloribus aliquid porro, quisquam exercitationem in quae,
              voluptate inventore maxime libero mollitia unde. Ea pariatur
              magnam consequuntur quos nulla sapiente quam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
