import React from 'react'
import {  FaLinkedinIn, FaReact, FaJava, FaInstagram, FaGithub } from "react-icons/fa";
import {   SiMysql, SiSpringboot } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4"  >
           <span className="bannerIcon">
            <a href='https://github.com/praveenbalemla'>  <FaGithub   /></a>
            </span>
            <span className="bannerIcon"  >
             <a href='https://www.linkedin.com/in/praveen-balemla-7a0080172/' ><FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
            <a href='https://www.instagram.com/praveen.balemla/?hl=en' > <FaInstagram /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
            <span className="bannerIcon">
              <SiSpringboot />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media