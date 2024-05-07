import React from "react";

export default function SectionStructure({
  children,
  title,
  className = "",
  id,
}) {
  return (
    <>
      <section
        className={`section px-5 lg:px-28 h-full my-20 flex flex-col items-center ${className}`}
        id={id}
      >
        <h2 className="lg:text-5xl text-3xl font-extrabold flex items-start lg:justify-center w-full pb-14">
          {title}
        </h2>
        {children}
      </section>
    </>
  );
}
