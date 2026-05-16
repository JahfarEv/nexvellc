import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useScrollReveal from "../../hooks/useScrollReveal";
import { fadeUpVariant } from "../../animations/variants";

const Hero = () => {
  const { ref, controls } = useScrollReveal();
  const [text, setText] = useState("");
  const words = ["ERP Systems", "POS Platforms", "Enterprise Solutions"];

  useEffect(() => {
    let i = 0, j = 0, del = false;

    const type = () => {
      const word = words[i];

      setText(word.substring(0, j + (del ? -1 : 1)));
      j += del ? -1 : 1;

      if (!del && j === word.length) {
        del = true;
        setTimeout(type, 1500);
        return;
      }

      if (del && j === 0) {
        del = false;
        i = (i + 1) % words.length;
      }

      setTimeout(type, del ? 50 : 100);
    };

    const t = setTimeout(type, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.section
      id="home"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeUpVariant}
      className="pt-32 pb-16 text-center"
    >
      <h1 className="text-5xl font-bold">
        Where Innovation Meets Execution
      </h1>

      <p className="mt-4 text-xl text-gray-600">
        Powering {text}
      </p>
    </motion.section>
  );
};

export default Hero;