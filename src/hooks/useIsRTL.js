import { languages } from "../components/LanguageSetting";
import cookies from "js-cookie";
const useIsRTL = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  return currentLanguage.dir === "rtl" ? true : false;
};

export default useIsRTL;
