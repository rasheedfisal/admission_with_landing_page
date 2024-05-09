import React from "react";
import useFormContext from "../../hooks/useFormContext";
import { useTranslation } from "react-i18next";
import { Checkbox } from "../ui/checkbox";
const TermsAndConditions = () => {
  const { t } = useTranslation();
  const { data, handleChange } = useFormContext();
  return (
    <div>
      <p>{t("terms_text1")}</p>
      <p>{t("terms_text2")}</p>
      <p>{t("terms_text3")}</p>
      <p></p>
      <p>{t("terms_text4")}</p>
      <div className="flex items-center gap-2 mt-5">
        <Checkbox
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
    </div>
  );
};

export default TermsAndConditions;
