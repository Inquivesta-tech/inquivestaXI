import React from "react";
import { Link } from "react-router-dom";

const LogoLink = () => {
    const scrollToTop = () => {
      window.scrollTo(0, 0)
  }

  return (
    <Link to="/">
      <img src="/inq11-txtonly.png" className="h-16" onClick={scrollToTop} />
    </Link>
  );
};

export default LogoLink;
