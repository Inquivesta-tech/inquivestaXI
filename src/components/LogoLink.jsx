import React from "react";
import { Link } from "react-router-dom";

const LogoLink = () => {
  return (
    <Link to="/">
      <img src="/src/assets/main-design.webp" className="h-16" />
    </Link>
  );
};

export default LogoLink;
