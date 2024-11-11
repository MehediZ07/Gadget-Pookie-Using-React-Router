import { GiBowTieRibbon } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-base-200">
      <div className="max-w-7xl mx-auto">
        <div className="pt-12 flex flex-col items-center justify-center relative ">
          <Link to="/" className="text-xl  font-semibold text-center">
            <span className="text-[1.65rem]">G</span>adget
            <span className="text-[#68cdff]  font-semibold text-xl relative">
              Pookie
            </span>
            <span className="absolute top-[3rem] text-pink-500  text-base rotate-45">
              <GiBowTieRibbon />
            </span>
          </Link>
          <p className="text-gray-600 text-center mx-auto pt-5 w-[90%] md:w-[70%]">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <footer className="footer flex  justify-around text-base-content p-10">
          <nav className="flex flex-col justify-center">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col justify-center">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col justify-center">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
