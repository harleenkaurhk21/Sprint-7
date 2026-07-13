import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalSchema } from "../validation/schema";
import { FaUser, FaEnvelope } from "react-icons/fa";

function PersonalInfo({ formData, updateData, nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(personalSchema),
    mode: "onChange",
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    },
  });

  const onSubmit = (data) => {
    updateData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">

      <h2>Personal Information</h2>
      <p className="form-subtitle">
        Please enter your personal details.
      </p>

      <div className="input-group">
        <FaUser className="input-icon" />

        <input
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
      </div>

      {errors.firstName && (
        <p className="error">{errors.firstName.message}</p>
      )}

      <div className="input-group">
        <FaUser className="input-icon" />

        <input
          type="text"
          placeholder="Last Name"
          {...register("lastName")}
        />
      </div>

      {errors.lastName && (
        <p className="error">{errors.lastName.message}</p>
      )}

      <div className="input-group">
        <FaEnvelope className="input-icon" />

        <input
          type="email"
          placeholder="Email Address"
          {...register("email")}
        />
      </div>

      {errors.email && (
        <p className="error">{errors.email.message}</p>
      )}

      <button
        type="submit"
        className="next-btn"
        disabled={!isValid}
      >
        Continue →
      </button>

    </form>
  );
}

export default PersonalInfo;