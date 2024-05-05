"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface Props {
  label: string;
  href: string;
}

const NavDrawerLink = ({ label, href }: Props) => {
  const [currentURL, setCurrentURL] = useState("");
  const isCurrentURL = usePathname();
  const linkStyles = clsx({
    "rounded-lg transition-colors text-sm px-3 py-2": true,
    "hover:bg-base-300": currentURL !== isCurrentURL,
    "bg-neutral text-base-100": currentURL === isCurrentURL,
  });

  return (
    <Link key={href} href={href} onClick={() => setCurrentURL(href)}>
      <li className={linkStyles}>{label}</li>
    </Link>
  );
};

export default NavDrawerLink;
