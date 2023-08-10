import React from "react";
// import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
const MobileNavLinks = ({ setToggle, href, link }) => {
  const { t } = useTranslation();
  return (
    <li className="list-none cursor-pointer mr-8">
      <HashLink
        to={href}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-bold transition-all duration-300"
        onClick={(prev) => setToggle(!prev)}
      >
        {t(link)}
      </HashLink>
    </li>
  );
};

export default MobileNavLinks;
