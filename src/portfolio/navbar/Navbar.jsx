import React, { useRef, useState } from "react";
import ThemeController from "../theme-controller/ThemeController";
import ReactConfetti from "react-confetti";

export default function Navbar({ className = "" }) {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleConfetti = () => {
    setIsConfettiActive(true);
  };

  return (
    <>
      <div
        className={`navbar bg-base-100 shadow-2xl bg-primary z-10 fixed ${className}`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#education-and-certification">
                  Education & Certification
                </a>
              </li>
              <li>
                <a href="#work-experience-and-projects">Work Exp. & Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <button
            onClick={() => handleConfetti()}
            className="font-extrabold text-2xl text-primary-content cursor-pointer"
          >
            <a href="#"> Your Name</a>
          </button>
        </div>
        <div className="navbar-end">
          <ThemeController />
        </div>
      </div>
      {isConfettiActive && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false} // Ensures confetti particles don't recycle
          numberOfPieces={400}
          gravity={0.3}
          wind={0.01}
          tweenDuration={3000}
          onConfettiComplete={() => setIsConfettiActive(false)}
        />
      )}
    </>
  );
}
