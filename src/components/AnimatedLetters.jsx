import { motion } from "motion/react";

const AnimatedLetter = ({letters}) => {
    const variants = {
        toLeft: { x: 20 },
        toRight: { x: 0 },
    };
    return(
        <motion.div
        whileHover={{
        children: {
            stagger: { children: 0.05  },
            y: -10,
            transition: { duration: 0.5 },
        },
        }}
        className="text-[#61b2e4] text-2xl"
    >
        {letters.split("").map((letter,index) => (
        <motion.span
            key={index}
            variants={variants}
        >
            {letter}
        </motion.span>
        ))}
        </motion.div>
    )
}

export default AnimatedLetter