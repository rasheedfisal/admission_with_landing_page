import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar/Navbar";
import Footer from "./container/Footer";
import { ToastContainer } from "react-toastify";
const Layout = () => {
  const { pathname } = useLocation();

  const variants = {
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 0,
      y: -100,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    in: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <motion.div
        key={pathname}
        initial="in"
        animate="inactive"
        exit="out"
        variants={variants}
      >
        <ToastContainer />
        <Outlet />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;
