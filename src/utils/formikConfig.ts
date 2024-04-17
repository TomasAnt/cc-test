import { FormikHelpers } from "formik";

export interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  securityCode: string;
  nameOnCard: string;
}

export const initialValues: FormValues = {
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "Arizona",
  zip: "",
  country: "United States",
  cardNumber: "",
  expiryDate: "",
  securityCode: "",
  nameOnCard: "",
};

export const handleSubmit = (
  values: FormValues,
  actions: FormikHelpers<FormValues>
) => {
  actions.setValues(initialValues);
  console.log(values);
  actions.setSubmitting(false);
};
