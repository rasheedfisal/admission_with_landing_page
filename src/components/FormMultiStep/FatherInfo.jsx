import React from "react";
import useFormContext from "../../hooks/useFormContext";
import { PhoneInput } from "../ui/phone-input";
import { useTranslation } from "react-i18next";
import { Checkbox } from "../ui/checkbox";
const FatherInfo = () => {
  const { t } = useTranslation();
  const { data, handleChange, handleCustomElementChange } = useFormContext();

  const content = (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Checkbox
          id="sameAsFather"
          name="sameAsFather"
          onChange={handleChange}
          checked={data.sameAsFather}
        />
        <label
          htmlFor="sameAsFather"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {t("same_as_gaurdian")}
        </label>
      </div>

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="f_firstName">
            {t("1st_name")} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="f_firstName"
            name="f_firstName"
            disabled={data.sameAsFather}
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="f_secondName">
            {t("2nd_name")} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            disabled={data.sameAsFather}
            id="f_secondName"
            name="f_secondName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_secondName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="f_middleName">
            {t("3rd_name")} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            disabled={data.sameAsFather}
            id="f_middleName"
            name="f_middleName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_middleName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="f_surname">
            {t("4th_name")} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            disabled={data.sameAsFather}
            id="f_surname"
            name="f_surname"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.f_surname}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="f_email">
          {t("email")} <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          className="form-textbox"
          disabled={data.sameAsFather}
          id="f_email"
          name="f_email"
          value={data.f_email}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="f_phone1">
            {t("phone1")} <span className="text-red-600">*</span>
          </label>

          <PhoneInput
            defaultCountry="SD"
            disabled={data.sameAsFather}
            id="f_phone1"
            name="f_phone1"
            value={data.f_phone1}
            onChange={(e) => handleCustomElementChange(e, "f_phone1")}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="f_phone2">{t("phone2")}</label>

          <PhoneInput
            defaultCountry="SD"
            disabled={data.sameAsFather}
            id="f_phone2"
            name="f_phone2"
            value={data.f_phone2}
            onChange={(e) => handleCustomElementChange(e, "f_phone2")}
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="f_address">
          {t("address")} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="form-textbox"
          disabled={data.sameAsFather}
          id="f_address"
          name="f_address"
          value={data.f_address}
          onChange={handleChange}
        />
      </div>

      {/* <label htmlFor="f_religion">Religion</label>
      <select
        id="f_religion"
        className="form-textbox"
        name="f_religion"
        value={data.f_religion}
        onChange={handleChange}
      >
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="jows">jows</option>
      </select> */}

      {/* <label htmlFor="f_country">Country</label>
      <select
        id="f_country"
        className="form-textbox"
        name="f_country"
        value={data.f_country}
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

export default FatherInfo;
