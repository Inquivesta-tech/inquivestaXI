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
      <div className="w-full h-[10rem] flex flex-col items-center justify-start bg-black footer">
        <span className="w-full h-[2px] bg-white footer-line"></span>
        <div className="flex w-full h-[calc(100%-2px)] footer-content">
          <div className="flex w-1/4 p-11 h-full flex-col items-center justify-center footer-stuff">
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
          <div className="w-2/4 text-white text-2xl font-bold h-full flex items-center justify-center footer-logo">
            <LogoLink />
          </div>
          <div className="flex w-1/4 h-full flex-col items-center justify-center footer-stuff">
            Follow Us on:
            <div className="flex w-1/3 items-center justify-around ">
              <a href="https://www.instagram.com/inquivesta_iiserk/" target="_blank"><FontAwesomeIcon icon={faInstagram} /> </a>
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
