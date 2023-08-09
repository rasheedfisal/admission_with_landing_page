import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
const MobileNavLinks = ({ setToggle, href, link }) => {
  const { t } = useTranslation();
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-bold transition-all duration-300"
        onClick={(prev) => setToggle(!prev)}
      >
        {t(link)}
      </Link>
    </li>
  );
};

export default MobileNavLinks;
