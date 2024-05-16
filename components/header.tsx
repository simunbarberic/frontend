"use client";
import "../styles/navbar.css";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 769) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);
  return (
    <div className="navbar">
      <Link className="navItemLogo" href="/">
        <img src="/logo.png" alt="specklogo" className="logo" />
      </Link>

      <nav className="navigation">
        <a className="navItem" href="">
          Services
        </a>
        <a className="navItem" href="">
          Our work
        </a>
        <a className="navItem" href="">
          About us
        </a>
        <a className="navItem" href="">
          Careers
        </a>
        <Link href="/blog" className="navItem">
          {" "}
          Blog{" "}
        </Link>
        <a className="navItem" href="">
          Academy
        </a>
        <Link className="navItem" href="/contact">
          <button className="contactButton">Contact</button>
        </Link>
      </nav>

      <div className="hamburger">
        <button className="menu-button" onClick={toggleMenu}>
          <img
            id="hamburgerMenu"
            className="navItem"
            src="/hamburgermenu.png"
            alt="hamburger-menu"
          />
        </button>
      </div>
      {isMenuOpen && (
        <div id="menuOverlay" className="menuOverlay">
          <div className="buttonExit">
            <div className="logoImg">
              <Link className="navItemLogo" href="/">
                <img src="/icon-light.png" alt="specklogo" className="logo" />
              </Link>
            </div>
            <Link href="/contact">
              <button className="contactButton">Contact</button>
            </Link>
            <button className="exit-button" onClick={toggleMenu}>
              <img src="/icons8-x-48.png" alt="Xicon" />
            </button>
            <br />
          </div>
          <br />
          <div className="hamburgerNavigationFlex">
            <nav className="hamburgerNavigation">
              <a className="navItemMenu" href="">
                Services
              </a>
              <br />
              <a className="navItemMenu" href="">
                Our work
              </a>
              <br />
              <a className="navItemMenu" href="">
                About us
              </a>
              <br />
              <a className="navItemMenu" href="">
                Careers
              </a>
              <br />
              <Link href="/blog" className="navItemMenu">
                Blog
              </Link>
              <br />
              <a className="navItemMenu" href="">
                Academy
              </a>
              <div className="pageSocials">
                <a
                  className="socialsLink"
                  target="_blank"
                  href="https://www.facebook.com/speck.agency"
                  title="facebook"
                >
                  <img src="/icons8-facebook.svg" alt="Facebook ikonica"></img>
                </a>
                <a
                  className="socialsLink"
                  target="_blank"
                  href="https://www.instagram.com/speck.agency/"
                  title="instagram"
                >
                  <img
                    src="/icons8-instagram.svg"
                    alt="Instagram ikonica"
                  ></img>
                </a>
                <a
                  className="socialsLink"
                  target="_blank"
                  href="https://www.tiktok.com/@speck_agency"
                  title="tik-tok"
                >
                  <img src="/icons8-tik-tok-24.png" alt="Tik-tok ikonica"></img>
                </a>
                <a
                  className="socialsLink"
                  target="_blank"
                  href="https://www.linkedin.com/company/speck-agency/"
                  title="linked-in"
                >
                  <img src="/icons8-linkedin.svg" alt="Facebook ikonica"></img>
                </a>
                <a
                  className="socialsLink"
                  target="_blank"
                  href="https://clutch.co/profile/speck#highlights"
                  title="clutch"
                >
                  <img src="/clutchco.svg" alt="clutch ikonica"></img>
                </a>
                <br />
              </div>
            </nav>
            
          </div>
        </div>
      )}
    </div>
  );
}
