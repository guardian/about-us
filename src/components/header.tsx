import React from "react";
import { GLogo } from "./gLogo";

interface NavSection {
  title: string;
  isSelected: boolean;
  link: string;
}

interface HeaderProps {
  navSections: NavSection[];
}

const Header = (props: HeaderProps) => (
  <header>
    <nav>
      {props.navSections.map((navItem) => (
        <a href={navItem.link}>{navItem.title}</a>
      ))}
    </nav>
    <GLogo />
    <nav>
      <a href="https://theguardian.com">Guardian press office</a>
      <a href="https://theguardian.com">Work for us</a>
      <a href="https://theguardian.com">Contact us</a>
    </nav>
  </header>
);

export default Header;
