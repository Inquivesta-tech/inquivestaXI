import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import LogoLink from "./LogoLink";

const ContactFooter = () => {
  return (
    <>
      <div className="w-full h-[10rem] flex flex-col items-center justify-start">
        <span className="w-full h-[2px] bg-white"></span>
        <div className="flex w-full h-[calc(100%-2px)]">
          <div className="hidden md:flex w-1/4 p-11 h-full flex-col items-center justify-center">
            <p className="w-full">Reach Us at:</p>
            <p className="w-full">
              {" "}
              <span className="mr-3">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>{" "}
              inquivesta@iiserkol.ac.in
            </p>
            <p className="w-full">
              {" "}
              <span className="mr-3">
                <FontAwesomeIcon icon={faPhone} />{" "}
              </span>{" "}
              +91 00000 00000
            </p>
          </div>
          <div className="w-full md:w-2/4 text-white text-2xl font-bold h-full flex items-center justify-center">
            <LogoLink />
          </div>
          <div className="hidden md:flex w-1/4 h-full flex-col items-center justify-center">
            Follow Us on:
            <div className="flex w-1/3 items-center justify-around">
              <a href="" target="_blank"><FontAwesomeIcon icon={faInstagram} /> </a>
              <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} /> </a>
              <a href="" target="_blank"><FontAwesomeIcon icon={faFacebook} /> </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFooter;
