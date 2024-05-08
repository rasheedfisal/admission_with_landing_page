import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./container/Footer";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";

const Layout = () => {
  return (
    <div className="font-Tajawal bg-Solitude">
      <Navbar />
      <ToastContainer />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
