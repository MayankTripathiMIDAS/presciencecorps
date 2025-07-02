import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const [navbar, setNavbar] = useState("navbar");
  const [navwrap, setNavwrap] = useState("nav-wrapper");
  const changeBackground = () => {
    if (window.scrollY >= 0.5) {
      setNavbar("sticky");
      setNavwrap("sticky-nav-wrapper");
    } else {
      setNavbar("navbar");
      setNavwrap("nav-wrapper");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  function handleClick() {
    setMobileNavOpen(!isMobileNavOpen);
    setActive(!isActive);
  }
  return (
    <>
      <div class={navwrap}>
        <nav class={navbar}>
          <Link href="/">
            <h1 className="nav-heading">Prescience Corporation</h1>
          </Link>
          {/* <div className="color-block"></div> */}
          <div
            class={`menu-toggle ${isActive ? "is-active" : ""}`}
            id="mobile-menu"
            onClick={handleClick}
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class={`nav ${isMobileNavOpen ? "mobile-nav" : ""}`}>
            <li
              class="nav-item"
              style={{ textAlign: "center", marginLeft: "14px" }}
            >
              <Link href="/">HOME</Link>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <button class="dropbtn">
                  ABOUT US
                  <i
                    class="fa-solid fa-chevron-down"
                    style={{ marginLeft: "7px", fontSize: "13px" }}
                  ></i>
                </button>
                <div class="dropdown-content">
                  <div className="area-content">
                    <Link href="/company">Company</Link>
                    <Link href="/mission">Mission & Vision</Link>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <button class="dropbtn">
                  SERVICES
                  <i
                    class="fa-solid fa-chevron-down"
                    style={{ marginLeft: "7px", fontSize: "13px" }}
                  ></i>
                </button>
                <div class="dropdown-content">
                  <div className="area-content">
                    <Link href="/managed-services">Managed Services</Link>
                    <Link href="/enterprise">Enterprise Solutions</Link>
                    <Link href="/management-consulting">
                      Management Consulting
                    </Link>
                    <Link href="/healthcare-solutions">
                      Healthcare IT Solutions
                    </Link>
                    <Link href="/workforce-solution">Workforce Solutions</Link>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <div class="dropdown">
                <button class="dropbtn">
                  CAREER CENTER
                  <i
                    class="fa-solid fa-chevron-down"
                    style={{ marginLeft: "7px", fontSize: "13px" }}
                  ></i>
                </button>
                <div class="dropdown-content">
                  <div className="area-content">
                    <Link href="/why-us">Why us?</Link>
                  </div>
                </div>
              </div>
            </li>

            {/* <li class="nav-item contact-btn" style={{ textAlign: "center" }}>
              <Link href="/contact">CONTACT US</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
