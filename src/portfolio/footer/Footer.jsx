import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a href="#" className="link link-hover">
            Home
          </a>
          <a href="#education-and-certification" className="link link-hover">
            Education & Certification
          </a>
          <a href="#work-experience-and-projects" className="link link-hover">
            Work Exp. & Projects
          </a>
          <a href="#skills" className="link link-hover">
            Skills
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FontAwesomeIcon icon={faTwitter} size="2xl" />
            </a>
            <a>
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
            <a>
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </a>
            <a>
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © 2024 - Baked in Mumbai with ❤️ by{" "}
            <span className="font-extrabold">WAC</span>
          </p>
        </aside>
      </footer>
    </>
  );
}
