import React from "react";
import useFormContext from "../../hooks/useFormContext";
import { PhoneInput } from "../ui/phone-input";
import { useTranslation } from "react-i18next";
import { Checkbox } from "../ui/checkbox";
const MotherInfo = () => {
  const { t } = useTranslation();
  const { data, handleChange, handleCustomElementChange } = useFormContext();

  const content = (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Checkbox
          name="sameAsMother"
          id="sameAsMother"
          onChange={handleChange}
          checked={data.sameAsMother}
          disabled={data.sameAsFather}
        />
        <label
          htmlFor="sameAsMother"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {t("same_as_gaurdian")}
        </label>
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="m_firstName">
          {t("full_name")} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="form-textbox"
          disabled={data.sameAsMother}
          id="m_fullname"
          name="m_fullname"
          pattern="([A-Z])[\w+.]{1,}"
          value={data.m_fullname}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="m_email">
          {t("email")} <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          className="form-textbox"
          disabled={data.sameAsMother}
          id="m_email"
          name="m_email"
          value={data.m_email}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="m_phone1">
            {t("phone1")} <span className="text-red-600">*</span>
          </label>

          <PhoneInput
            defaultCountry="SD"
            disabled={data.sameAsMother}
            id="m_phone1"
            name="m_phone1"
            value={data.m_phone1}
            onChange={(e) => handleCustomElementChange(e, "m_phone1")}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="m_phone2">{t("phone2")}</label>

          <PhoneInput
            defaultCountry="SD"
            disabled={data.sameAsMother}
            id="m_phone2"
            name="m_phone2"
            value={data.m_phone2}
            onChange={(e) => handleCustomElementChange(e, "m_phone2")}
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="m_address">
          {t("address")} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="form-textbox"
          disabled={data.sameAsMother}
          id="m_address"
          name="m_address"
          value={data.m_address}
          onChange={handleChange}
        />
      </div>

      {/* <label htmlFor="m_religion">Religion</label>
      <select
        id="m_religion"
        className="form-textbox"
        name="m_religion"
        value={data.m_religion}
        onChange={handleChange}
      >
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="jows">jows</option>
      </select> */}

      {/* <label htmlFor="m_country">Country</label>
      <select
        id="m_country"
        className="form-textbox"
        name="m_country"
        value={data.m_country}
        onChange={handleChange}
      >
        <option value="Sudan">Sudan</option>
        <option value="Egypt">Egypt</option>
        <option value="UAE">UAE</option>
      </select> */}
    </div>
  );

  return content;
};

export default MotherInfo;
