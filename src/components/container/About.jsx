import React from "react";
import about from "../../assets/About.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="section pt-0 md:pt-[6rem]" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <p className="text-sm text-gray leading-7 mb-4">{t("about_us")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
