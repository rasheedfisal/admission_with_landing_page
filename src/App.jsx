import "./globals";
import { HomePage, Layout, Form, UpdateForm } from "./components/index";
import ReportLayout from "./components/ReportLayout";
import { Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import { UpdateFormProvider } from "./context/FormUpdateContext";
import "react-toastify/dist/ReactToastify.css";
import AdmissionReport from "./components/Reports/AdmissionReport";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} exact>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admission"
          element={
            <FormProvider>
              <Form />
            </FormProvider>
          }
        />

        <Route
          path="/old"
          element={
            <UpdateFormProvider>
              <UpdateForm />
            </UpdateFormProvider>
          }
        />
      </Route>
      <Route path="/report" element={<ReportLayout />}>
        <Route path="/report/admission" element={<AdmissionReport />} />
      </Route>
    </Routes>
  );
}

export default App;
