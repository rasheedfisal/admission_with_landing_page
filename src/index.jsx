import "./globals";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactQueryWrapper from "./ReactQueryWrapper";
// import "./i18next";
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    interpolation: { escapeValue: false },
    // react: { useSuspense: false },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });
const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading...</h3>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense fallback={loadingMarkup}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ReactQueryWrapper>
              {/* <I18nextProvider i18n={i18next}> */}
              <App />
              {/* </I18nextProvider> */}
            </ReactQueryWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  </Suspense>
  // </React.StrictMode>
);
