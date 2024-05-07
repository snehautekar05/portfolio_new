import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Hero() {
  const wrapCharactersWithMotion = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        whileHover={{ scale: 1.5 }} // Increase scale on hover
        style={{ display: "inline-block" }}
      >
        {char}
      </motion.span>
    ));
  };

  const airplaneControls = useAnimation();

  useEffect(() => {
    const animateAirplane = async () => {
      // Animate the airplane flying in and landing
      await airplaneControls.start({
        x: 0, // Final x-position (original position)
        y: 0,
        opacity: 1, // Make the airplane visible
        transition: {
          type: "spring", // Animation type (spring for bouncy effect)
          stiffness: 100, // Stiffness of the spring
          damping: 10, // Damping of the spring
          duration: 1.5, // Duration of the animation
        },
      });
    };

    // Trigger the animation when the component mounts
    animateAirplane();
  }, [airplaneControls]);

  return (
    <>
      <section className="section">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <motion.img
              src="data:image/jpeg;base64,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"
              className="max-w-sm rounded-lg shadow-2xl"
              whileHover={{ scale: 1.1 }}
              initial={{ x: "-100%", opacity: 0 }} // Initial off-screen position and hidden
              animate={airplaneControls}
              whileInView={"visible"}
            />

            <motion.div
              initial={{ y: "-100%", opacity: 0 }} // Initial off-screen position and hidden
              animate={airplaneControls}
              whileInView={"visible"}
            >
              {/* <h1 className="lg:text-7xl text-5xl font-primary">Welcome! 👋</h1> */}

              <h1 className="lg:text-7xl text-5xl font-primary">
                {wrapCharactersWithMotion("Welcome!")} 👋
              </h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis culpa magnam aliquid adipisci? Voluptatem quam aliquam
                omnis aliquid facilis commodi praesentium asperiores nisi,
                accusamus modi beatae quidem eveniet earum quae.
              </p>
              <button className="btn btn-primary">
                <a href="mailto:huzaifsk12@gmail.com">Contact Me</a>
              </button>
              <button className="btn btn-primary ml-1 btn-outline">
                <a
                  href="../../../public/Huzaif Shaikh Resume.pdf"
                  download={true}
                >
                  Download CV
                </a>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}