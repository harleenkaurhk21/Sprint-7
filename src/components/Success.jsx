import { FaCheckCircle, FaHome } from "react-icons/fa";

function Success() {
  return (
    <div className="success-page">

      <div className="success-card">

        <div className="success-icon">
          <FaCheckCircle />
        </div>

        <h1>Registration Successful!</h1>

        <p>
          Congratulations! Your account has been created successfully.
        </p>

        <p className="success-text">
          Thank you for completing the onboarding process.
          You can now start using all the features of our platform.
        </p>

        <button
          className="home-btn"
          onClick={() => window.location.reload()}
        >
          <FaHome />
          Back to Home
        </button>

      </div>

    </div>
  );
}

export default Success;