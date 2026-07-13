import {
  FaUser,
  FaEnvelope,
  FaIdBadge,
  FaLock,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

function Review({ formData, prevStep, handleSubmit }) {
  return (
    <div className="form">

      <h2>Review Your Details</h2>

      <p className="form-subtitle">
        Please verify your information before submitting.
      </p>

      <div className="review-card">

        <div className="review-item">
          <FaUser className="review-icon" />
          <div>
            <span>First Name</span>
            <h4>{formData.firstName}</h4>
          </div>
        </div>

        <div className="review-item">
          <FaUser className="review-icon" />
          <div>
            <span>Last Name</span>
            <h4>{formData.lastName}</h4>
          </div>
        </div>

        <div className="review-item">
          <FaEnvelope className="review-icon" />
          <div>
            <span>Email</span>
            <h4>{formData.email}</h4>
          </div>
        </div>

        <div className="review-item">
          <FaIdBadge className="review-icon" />
          <div>
            <span>Username</span>
            <h4>{formData.username}</h4>
          </div>
        </div>

        <div className="review-item">
          <FaLock className="review-icon" />
          <div>
            <span>Password</span>
            <h4>{"•".repeat(formData.password.length)}</h4>
          </div>
        </div>

      </div>

      <div className="button-row">

        <button
          className="back-btn"
          onClick={prevStep}
        >
          <FaArrowLeft />
          Back
        </button>

        <button
          className="submit-btn"
          onClick={handleSubmit}
        >
          <FaCheckCircle />
          Submit
        </button>

      </div>

    </div>
  );
}

export default Review;