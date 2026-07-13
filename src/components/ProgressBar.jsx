function ProgressBar({ step }) {
  const progress = (step / 3) * 100;

  return (
    <div className="progress-section">

      <div className="progress-header">
        <h3>
          Step {step} of 3
        </h3>

        <span>{Math.round(progress)}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

    </div>
  );
}

export default ProgressBar;