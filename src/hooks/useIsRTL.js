import { languages } from "../components/LanguageSetting";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";
const useIsRTL = () => {
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  //   useEffect(() => {
  //     console.log("dir", currentLanguage.dir);
  //   }, [currentLanguage]);

  return currentLanguage.dir === "rtl" ? true : false;
};

export default useIsRTL;
