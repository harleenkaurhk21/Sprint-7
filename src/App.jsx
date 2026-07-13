import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";
import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import Review from "./components/Review";
import Success from "./components/Success";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateData = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return <Success />;
  }

  return (
    <div className="app">

      <Sidebar step={step} />

      <div className="main-card">

        <h1>
          ✨ React Onboarding Wizard ✨
        </h1>

        <ProgressBar step={step} />

        {step === 1 && (
          <PersonalInfo
            formData={formData}
            updateData={updateData}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <AccountDetails
            formData={formData}
            updateData={updateData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <Review
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        )}

        <div className="security-box">
          🔒 Your data is protected with secure encryption.
        </div>

      </div>

    </div>
  );
}

export default App;
