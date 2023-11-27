import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <p className="my-2 m-1">
            <IoMdPerson /> Manish Kumar Sanodiya
          </p>
          <p className="my-2 m-1">
            <MdOutlineAlternateEmail /> msanodiya55@gmail.com
          </p>
        </div>
        <div>
          <p className="my-2 m-1">
            <FaLinkedin /> 
            <a
              className="link"
              href="www.linkedin.com/in/manish-kumar-sanodiya"
              target="blank"
            >
             linkedin
            </a>
          </p>
          <p className="my-2 m-1">
            <FaSquareGithub /> 
            <a
              className="link"
              href="https://github.com/manishSanodiya?tab=repositories"
              target="blank"
            >github</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
