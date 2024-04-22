import React from "react";
import { ErrorMessage, useField } from "formik";
import { Input, ErrorMsg, Absolute } from "./formFields.styled";

interface TextInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  autocomplete?: string;
  maxLength?: number;
}

export const TextInputField: React.FC<TextInputProps> = ({
  id,
  name,
  type,
  placeholder,
  autocomplete,
  maxLength,
}) => {
  const [field, meta] = useField(name);

  return (
    <Absolute>
      <Input
        {...field}
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autocomplete}
        maxLength={maxLength}
        $error={meta.touched && meta.error ? meta.error : undefined} // Ensures error is a string or undefined
      />
      <ErrorMessage name={name} component={ErrorMsg} />
    </Absolute>
  );
};
