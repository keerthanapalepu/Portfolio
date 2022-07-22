import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/nav.css";
import Title from "./Title";


const scrollToTop = function () {
  scroll.scrollToTop();
};



export default function Navbar() {
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (<>
    <section className="background">
      <header className={navBar ? "nav active" : "nav"}>
        <span class="navbar-brand" href="">
          <h3
            className="nav-logo"
            onClick={scrollToTop}
            >Keerthana Palepu
          </h3>
        </span>
        <center className="leftnav">
          <nav className="nav__container__actions ">
            <div>
              <ul className="navList mx-auto">
                <li>
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="skills"
                    offset={-65}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="tech"
                    offset={-65}
                    duration={500}
                  >
                    Tech
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="projects"
                    offset={-65}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    smooth="easeInOutBack"
                    spy
                    to="aboutme"
                    offset={-65}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1tvZhiD86s8oQv4flgCGJSkf2JlCVo69s/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </center>
      </header>
      <Title />
    </section>

    </>
  );
}
