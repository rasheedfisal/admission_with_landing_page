import React from "react";
import useFormContext from "../../hooks/useUpdateFormContext";
import { useTranslation } from "react-i18next";
import { Checkbox } from "../ui/checkbox";
const TermsAndConditions = () => {
  const { t } = useTranslation();
  const { data, handleChange } = useFormContext();
  return (
    <div>
      <p>{t("re_terms_text1")}</p>
      <p>{t("re_terms_text2")}</p>
      <p>{t("re_terms_text3")}</p>
      <p>{t("re_terms_text4")}</p>

      <div className="flex items-center gap-2 mt-5">
        <Checkbox
          type="checkbox"
          id="t_agreed"
          name="t_agreed"
          onChange={handleChange}
          checked={data.t_agreed}
        />
        <label
          htmlFor="t_agreed"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {t("i_agree")}
        </label>
      </div>

      {/* <div className="form-check mt-5">
        <input
          className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          id="t_agreed"
          name="t_agreed"
          onChange={handleChange}
          checked={data.t_agreed}
        />
        <label className="form-check-label inline-block text-gray-800 dark:text-gray-100">
          {t("i_agree")}
        </label>
      </div> */}
    </div>
  );
};

export default TermsAndConditions;
