import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { timelineData } from "./timelineData";

export default function TimeLine({ timeline = [] }) {
  const isLargeScreen = window.innerWidth > 786;

  const itemRight = {
    hidden: { x: isLargeScreen ? -100 : 0 },
    visible: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemLeft = {
    hidden: { x: isLargeScreen ? 100 : 0 },
    visible: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-6">
      <motion.ul
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        initial="hidden"
        whileInView={isLargeScreen ? "visible" : "hidden"}
        variants={
          isLargeScreen && { visible: { transition: { staggerChildren: 0.2 } } }
        }
      >
        {timelineData.map((item, index) => (
          <motion.li
            key={index}
            variants={index % 2 === 0 ? itemRight : itemLeft}
          >
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`timeline-${
                index % 2 === 0 ? "start md:text-end" : "end"
              } mb-10`}
            >
              <time className="font-mono italic">{item.year}</time>
              <div className="text-lg font-black">{item.title}</div>
              <p>{item.description}</p>
            </div>
            {index !== timelineData.length - 1 && <hr />}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
