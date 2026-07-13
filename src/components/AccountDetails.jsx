import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "../validation/schema";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function AccountDetails({
  formData,
  updateData,
  nextStep,
  prevStep,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(accountSchema),
    mode: "onChange",
    defaultValues: {
      username: formData.username,
      password: formData.password,
    },
  });

  const onSubmit = (data) => {
    updateData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">

      <h2>Account Details</h2>

      <p className="form-subtitle">
        Create your username and password.
      </p>

      <div className="input-group">
        <FaUser className="input-icon" />

        <input
          type="text"
          placeholder="Username"
          {...register("username")}
        />
      </div>

      {errors.username && (
        <p className="error">{errors.username.message}</p>
      )}

      <div className="input-group">

        <FaLock className="input-icon" />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password")}
        />

        <button
          type="button"
          className="eye-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

      </div>

      {errors.password && (
        <p className="error">{errors.password.message}</p>
      )}

      <div className="button-row">

        <button
          type="button"
          className="back-btn"
          onClick={prevStep}
        >
          ← Back
        </button>

        <button
          type="submit"
          className="next-btn"
          disabled={!isValid}
        >
          Continue →
        </button>

      </div>

    </form>
  );
}

export default AccountDetails;