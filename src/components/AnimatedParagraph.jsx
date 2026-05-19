import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import PropTypes from "prop-types";

export const AnimatedParagraph = ({ className = "", content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

 
  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.03 },
      },
    }),
    []
  );

  const wordVariant = useMemo(
    () => ({
      hidden: { opacity: 0, color: "#6B7280" },
      visible: {
        opacity: 1,
        color: "#FFFFFF",
        transition: { duration: 0.8 },
      },
    }),
    []
  );

  const blueVariant = useMemo(
    () => ({
      hidden: { opacity: 0, color: "#4B5563" },
      visible: {
        opacity: 1,
        color: "#61B2E4",
        transition: { duration: 0.8 },
      },
    }),
    []
  );

  const renderWords = (text, keyPrefix = "") =>
    text.split(" ").map((word, i) => (
      <motion.span
        key={`${keyPrefix}-${i}`}
        variants={wordVariant}
        className="inline-block h-7 mr-[0.25em]"
      >
        {word}
      </motion.span>
    ));

  const renderContent = (input) => {
    if (!input) return null;

    if (input?.props?.children && typeof input !== "string") {
      input = input.props.children;
    }
    if (typeof input === "string") {
      return renderWords(input, "str");
    }

    
    if (Array.isArray(input)) {
      return input.map((item, i) => {
        if (typeof item === "string") {
          return renderWords(item, `arr-${i}`);
        }

        if (item?.props?.children) {
          const isBlue =
            item.props.className?.includes("text-[#61B2E4]");

          if (isBlue) {
            return (
              <motion.span
                key={`blue-${i}`}
                variants={blueVariant}
                className={item.props.className}
              >
                {item.props.children}
              </motion.span>
            );
          }

          return (
            <motion.span key={`node-${i}`} variants={wordVariant}>
              {item.props.children}
            </motion.span>
          );
        }

        return item;
      });
    }

    // fallback (ReactNode, numbers, etc.)
    return input;
  };

  return (
    <motion.p
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {renderContent(content)}
    </motion.p>
  );
};

AnimatedParagraph.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
};