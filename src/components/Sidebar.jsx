import {
  FaRocket,
  FaUser,
  FaUserShield,
  FaCheckCircle,
} from "react-icons/fa";

function Sidebar({ step }) {
  return (
    <div className="sidebar">

      <div className="logo">
        <FaRocket className="rocket" />
      </div>

      <h2>Welcome!</h2>

      <p className="subtitle">
        Complete the steps
        <br />
        to get started ✨
      </p>

      <div className="steps">

        <div className="step-item">
          <div className={step >= 1 ? "circle active" : "circle"}>
            1
          </div>

          <div>
            <h4>Personal Info</h4>
            <span>Tell us about yourself</span>
          </div>
        </div>

        <div className="line"></div>

        <div className="step-item">
          <div className={step >= 2 ? "circle active" : "circle"}>
            2
          </div>

          <div>
            <h4>Account Details</h4>
            <span>Create your account</span>
          </div>
        </div>

        <div className="line"></div>

        <div className="step-item">
          <div className={step >= 3 ? "circle active" : "circle"}>
            3
          </div>

          <div>
            <h4>Review & Submit</h4>
            <span>Confirm your details</span>
          </div>
        </div>

      </div>

      <div className="bottom-card">

        <FaUser className="bottom-icon" />

        <FaUserShield className="shield" />

        <FaCheckCircle className="check" />

        <p>Secure Registration</p>

      </div>

    </div>
  );
}

export default Sidebar;
