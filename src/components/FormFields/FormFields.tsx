// components/TextInputField.tsx
import React from "react";
import { Field, ErrorMessage } from "formik";
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
}) => (
  <Absolute>
    <Field
      as={Input}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={autocomplete}
      maxLength={maxLength}
    />
    <ErrorMessage name={name} component={ErrorMsg} />
  </Absolute>
);
