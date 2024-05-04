import Hamburger from "./Hamburger";
import { navLinks } from "./NavBar";
import NavDrawerLink from "./NavDrawerLink";

const NavDrawer = () => {
  return (
    <div className="drawer z-50 mb-2 p-3">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="cursor-pointer">
          <Hamburger />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="min-h-full w-60 bg-base-200 p-4 text-base-content">
          <NavDrawerLink label="Home" href="/" />
          {/* Sidebar content here */}
          {navLinks.map((link) => (
            <NavDrawerLink
              key={link.href}
              label={link.label}
              href={link.href}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDrawer;
