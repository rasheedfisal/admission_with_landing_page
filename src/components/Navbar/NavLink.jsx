import React from "react";
// import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
const NavLink = ({ href, link }) => {
  const { t } = useTranslation();
  return (
    <li className="list-none cursor-pointer mr-8">
      {/* <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-bold transition-all duration-300"
      >
        {t(link)}
      </Link> */}
      <HashLink
        smooth={true}
        duration={500}
        offset={-50}
        to={href}
        className="font-bold transition-all duration-300"
      >
        {t(link)}
      </HashLink>
    </li>
  );
};

export default NavLink;
