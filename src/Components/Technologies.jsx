import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { FaG, FaGit } from "react-icons/fa6";
import { SiVite } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b b-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <div className="rounded-2xl border-4 border-neutral-500 p-4">
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-500 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-500 p-4">
          <FaNodeJs className="text-7xl text-green-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-500 p-4">
          <TbBrandThreejs className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-500 p-4">
          <FaGit className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-500 p-4">
          <SiVite className="text-7xl text-pink-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
