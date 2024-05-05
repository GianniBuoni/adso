import Link from "next/link";
import NavDrawer from "./NavDrawer";

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
        <ul className="flex space-x-3">
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
  { label: "Titles", href: "/titles" },
  { label: "Todo", href: "/todo" },
];
