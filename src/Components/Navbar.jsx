import logo from "../assets/images/logo-in.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between py-4 items-center">
        <div className=" flex-shrink-0 flex items-center">
            <img href="/" className="mx-2 w-16" src={logo} alt="Logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/nico-zimmermann-95b6922b8/" target="_blank"><FaLinkedin/></a>
          <a href="https://github.com/13nico01" target="_blank"><FaGithub/></a>
          <a href="https://www.instagram.com/n1co.z13/" target="_blank"><FaInstagram/></a>
          <a href="https://x.com/n1coz13" target="_blank"><FaSquareXTwitter/></a>
          <a href="https://www.reddit.com/user/EngineeringLonely696/" target="_blank"><FaReddit/></a>

        </div>
    </nav>
  )
}

export default Navbar
