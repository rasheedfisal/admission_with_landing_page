import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import "flag-icons/css/flag-icons.min.css";
import GlobeIcon from "../icons/GlobeIcon";
import i18next from "i18next";
import { AnimatePresence, motion } from "framer-motion";

export const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

const LanguageSetting = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [menuDir, setMenuDir] = useState("right-0");

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
    setMenuDir(currentLanguage.dir === "rtl" ? "left-0" : "right-0");
  }, [currentLanguage, t]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : "false"}
        className="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
      >
        <span className="sr-only">User menu</span>
        <GlobeIcon />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key={0}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "easeOut",
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              y: 20,
              transition: {
                ease: "easeIn",
                duration: 0.2,
              },
            }}
            className={`absolute ${menuDir} w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none z-10`}
            tabIndex={-1}
            role="menu"
            aria-orientation="vertical"
            aria-label="User menu"
          >
            {languages.map(({ code, name, country_code }) => (
              <a
                key={country_code}
                href="#"
                className={`block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 ${
                  currentLanguageCode === code
                    ? "opacity-25 pointer-events-none cursor-default"
                    : ""
                }`}
                onClick={() => {
                  i18next.changeLanguage(code);
                  setOpen(false);
                }}
              >
                <span
                  className={`fi fi-${country_code} mx-2`}
                  style={{
                    opacity: currentLanguageCode === code ? 0.5 : 1,
                  }}
                ></span>
                {name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSetting;
