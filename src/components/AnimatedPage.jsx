import { motion } from "framer-motion";
import TransitionEffect from "./TransitionEffect";

const variants = {
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: -100,
    transition: {
      delay: 0.7,
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  in: {
    y: 100,
    opacity: 0,
    transition: {
      delay: 0.7,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const AnimatedPage = ({ children }) => {
  return (
    <>
      <TransitionEffect />
      <motion.div
        initial="in"
        animate="inactive"
        exit="out"
        variants={variants}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedPage;
