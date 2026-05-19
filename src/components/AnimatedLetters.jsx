import PropTypes from "prop-types";
import { motion } from "motion/react";

const AnimatedLetter = ({ letters = "" }) => {
  const variants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      whileHover={{
        transition: {
          staggerChildren: 0.05,
        },
      }}
      className="text-[#61b2e4] text-2xl inline-flex"
    >
      {letters.split("").map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={variants}
          whileHover={{ y: -10 }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

AnimatedLetter.propTypes = {
  letters: PropTypes.string,
};

export default AnimatedLetter;