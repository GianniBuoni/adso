import React from "react";
import Hamburger from "./Hamburger";
import Meatballs from "./Meatballs";
import NavDrawer from "./NavDrawer";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar mb-5 justify-between rounded-lg bg-neutral align-middle text-base-100">
      <div>
        <NavDrawer />
        <Link href={"/"} className="btn btn-ghost text-xl">
          Adso
        </Link>
      </div>
      <div className="px-5">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

export const navLinks: { label: string; href: string }[] = [
  { label: "Todo", href: "/todo" },
];
