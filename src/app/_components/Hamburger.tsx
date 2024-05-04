import React from "react";

const Hamburger = () => {
  return (
    <svg className="inline-block h-5 w-5 fill-primary stroke-current">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
};

export default Hamburger;
