"use client";
import { useState } from "react";
import Hamburger from "./Hamburger";
import { navLinks } from "./NavBar";
import NavDrawerLink from "./NavDrawerLink";

const NavDrawer = () => {
  const [isChecked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="drawer z-50 mb-2 p-3">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isChecked}
        readOnly
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="cursor-pointer"
          onClick={handleClick}
        >
          <Hamburger />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={handleClick}
        ></label>
        <ul className="flex min-h-full w-60 flex-col space-y-1 bg-base-200 p-4 text-base-content">
          <div onClick={handleClick}>
            <NavDrawerLink label="Home" href="/" />
          </div>
          {/* Sidebar content here */}
          {navLinks.map((link) => (
            <div key={link.href} onClick={handleClick}>
              <NavDrawerLink label={link.label} href={link.href} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDrawer;
