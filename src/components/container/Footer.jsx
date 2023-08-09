import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        
        <div>
          <div className="font-bold mb-6">Contact us</div>
          <div className="text-sm mb-4">registrar@nilevalleyschool.org</div>
          <div className="text-sm">+249912730881</div>
        </div>

        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/nvs.social" target={"_blank"} className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/nvs.social/"  target={"_blank"} className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="https://twitter.com/nvs_social" target={"_blank"} className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
          </div>
        </div>
        <div>
          <div className="font mb-6"><a href="http://www.keeti.sd" target={"_blank"}>Powered By Keeti IT</a></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
