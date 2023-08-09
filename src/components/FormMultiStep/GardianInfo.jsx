import React, { useState, useEffect } from "react";
import useFormContext from "../../hooks/useFormContext";
import PhoneInput from "react-phone-number-input";
import { useTranslation } from "react-i18next";
import MapPicker from "react-google-map-picker";
// import LocationPicker from "react-leaflet-location-picker";

const DefaultLocation = { lat: 15.500654, lng: 32.559898 };
const DefaultZoom = 10;

// const pointVals = [
//   [50, 2],

// ];
// const pointMode = {
//   banner: true,
//   control: {
//     values: pointVals,
//     onClick: (point) =>
//       console.log("I've just been clicked on the map!", point),
//     onRemove: (point) =>
//       console.log("I've just been clicked for removal :(", point),
//   },
// };
// const circleMode = {
//   banner: false,
// };

const GardianInfo = () => {
  const { t } = useTranslation();
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  // useEffect(() => {
  //   handleCustomElementChange(location.lat + "," + location.lng, "g_location");
  // }, [location]);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }
  const { data, handleChange, handleCustomElementChange } = useFormContext();

  const content = (
    <div className="flex flex-col">
      {/* <div className="flex items-center justify-start gap-5 flex-wrap">
        
       
      </div> */}

      <label htmlFor="g_title">
        {t("title")} <span className="text-red-600">*</span>
      </label>
      <select
        id="g_title"
        className="form-textbox"
        name="g_title"
        value={data.g_title}
        onChange={handleChange}
      >
        <option value="">{t("select")}</option>
        <option value="Mr">{t("mr")}</option>
        <option value="Mrs">{t("mrs")}</option>
        <option value="Ms">{t("ms")}</option>
      </select>

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="g_firstName">
            {t("1st_name")} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="g_firstName"
            name="g_firstName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="g_secondName">
            {t("2nd_name")} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="g_secondName"
            name="g_secondName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_secondName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="g_middleName">
            {t("3rd_name")} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="g_middleName"
            name="g_middleName"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_middleName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="g_surname">
            {t("4th_name")} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="form-textbox"
            id="g_surname"
            name="g_surname"
            pattern="([A-Z])[\w+.]{1,}"
            value={data.g_surname}
            onChange={handleChange}
          />
        </div>
      </div>

      <label htmlFor="g_email">
        {t("email")} <span className="text-red-600">*</span>
      </label>
      <input
        type="email"
        className="form-textbox"
        pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
        id="g_email"
        name="g_email"
        value={data.g_email}
        onChange={handleChange}
      />

      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div className="flex flex-col w-full">
          <label htmlFor="g_phone1">
            {t("phone1")} <span className="text-red-600">*</span>
          </label>
          <PhoneInput
            defaultCountry="SD"
            className="form-textbox"
            id="g_phone1"
            name="g_phone1"
            value={data.g_phone1}
            onChange={(e) => handleCustomElementChange(e, "g_phone1")}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="g_phone2">{t("phone2")}</label>
          <PhoneInput
            defaultCountry="SD"
            className="form-textbox"
            id="g_phone2"
            name="g_phone2"
            value={data.g_phone2}
            onChange={(e) => handleCustomElementChange(e, "g_phone2")}
          />
        </div>
      </div>

      <label htmlFor="g_address">
        {t("address")} <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        className="form-textbox"
        id="g_address"
        name="g_address"
        value={data.g_address}
        onChange={handleChange}
      />

      <label htmlFor="g_location" className="hidden">
        Location <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        className="form-textbox hidden"
        id="g_location"
        name="g_location"
        disabled
        value={data.g_location}
      />

      <button
        className="bg-transparent hidden mt-3 mb-3 hover:bg-Teal text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded cursor-pointer"
        type="button"
        onClick={handleResetLocation}
      >
        Reset Location
      </button>
      {/* <div className="mb-3" />
      <div>
        <MapPicker
          defaultLocation={defaultLocation}
          apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
          zoom={zoom}
          mapTypeId="roadmap"
          style={{ height: "700px" }}
          onChangeLocation={(lat, lng) =>
            handleCustomElementChange(lat + "," + lng, "g_location")
          }
          onChangeZoom={handleChangeZoom}
        />
      </div> */}
    </div>
  );

  return content;
};

export default GardianInfo;
