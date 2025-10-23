import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AnimatedParagraph = ({ className, content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, color: "#6B7280" }, 
    visible: { opacity: 1, color: "#FFFFFF", transition: { duration: 0.4 } }, 
  };

  const blueVariant = {
    hidden: { opacity: 0, color: "#4B5563" }, 
    visible: { opacity: 1, color: "#61B2E4", transition: { duration: 0.4 } }, 
  };

  const renderContent = (contentData) => {
 
    if (contentData?.props?.children) {
      contentData = contentData.props.children;
    }

    if (typeof contentData === "string") {
      return contentData.split(" ").map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ));
    }

    if (Array.isArray(contentData)) {
      return contentData.map((item, i) => {
        if (typeof item === "string") {
          return item.split(" ").map((word, j) => (
            <motion.span key={`${i}-${j}`} variants={wordVariant} className="inline-block mr-[0.25em]">
              {word}
            </motion.span>
          ));
        }
        
        if (item?.props?.className?.includes("text-[#61B2E4]")) {
          return (
            <motion.span key={i} variants={blueVariant} className={item.props.className}>
              {item.props.children}
            </motion.span>
          );
        }
        
        return item;
      });
    }

    return contentData;
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