import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <Link href="/">JM</Link>
      <nav>
        <ul>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="https://blog.johnmwendwa.me">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
