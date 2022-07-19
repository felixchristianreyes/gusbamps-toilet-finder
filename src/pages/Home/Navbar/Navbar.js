/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { classNames, useScrollPosition } from "../tools";

const Navbar = () => {
  //activate sidebar

  //console.logs position of window.offsetY
  const scrollPosition = useScrollPosition();

  return (
    <header
      id="header"
      className={classNames(
        scrollPosition > 100 ? "header-scrolled fixed-top" : "fixed-top"
      )}
      data-testid="Navbar"
    >
      <div className="container d-flex align-items-center">
        <a href="index.html" className="logo me-auto">
          GUSBAMPS
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Features
              </a>
            </li>
            <li className="dropdown">
              <a className="nav-link" href="#">
                <span>
                  Community <FaChevronDown />
                </span>
              </a>
              <ul>
                <li>
                  <a href="#">Join Discord</a>
                </li>
                <li>
                  <a href="#">Provide toilet data</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link getstarted scrollto" href="#about">
                Get Started
              </a>
            </li>
          </ul>
          <FaBars className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
