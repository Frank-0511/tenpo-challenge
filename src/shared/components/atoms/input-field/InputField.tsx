import { FieldError, UseFormRegisterReturn } from "react-hook-form";

import { FC } from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
}

export const InputField: FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder = "",
  error,
  register,
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered ${error ? "input-error" : ""}`}
        {...register}
      />
      {error && (
        <span className="text-error text-sm mt-1">{error.message}</span>
      )}
    </div>
  );
};
