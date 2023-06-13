"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavigationBar() {
  const [activeBurger, setActiveBurger] = useState(false);

  const pages = [
    { page: "Home", whereTo: "" },
    { page: "About Me", whereTo: "about" },
    { page: "Projects", whereTo: "projects" },
    { page: "Resume", whereTo: "pdf/resume.pdf" },
  ];
  const pagesList = pages.map((item, i) => (
    <NavigationBarItem key={i} itemName={item.page} itemLink={item.whereTo} />
  ));

  const handleClick = () => {
    setActiveBurger(!activeBurger);
  };

  return (
    <nav className="navbar is-dark is-spaced is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <NavigationBarItem itemName="Richard Perez Jr." itemLink="" />
          <button
            className={`navbar-burger${activeBurger ? " is-active" : ""}`}
            onClick={handleClick}
            style={{ position: "absolute", right: 0 }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          id="navigationBar"
          className={`navbar-menu ${activeBurger ? "is-active" : ""}`}
        >
          <div className="navbar-end">{pagesList}</div>
        </div>
      </div>
    </nav>
  );
}

function NavigationBarItem({
  itemName,
  itemLink,
}: {
  itemName: string;
  itemLink: string;
}) {
  return (
    <Link href={`/${itemLink}`} className="navbar-item">
      {itemName}
    </Link>
  );
}
