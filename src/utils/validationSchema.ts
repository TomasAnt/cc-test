import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  firstName: Yup.string()
    .min(3, "First name must be at least 3 characters")
    .max(50, "First name must be less than 50 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(3, "Last name must be at least 3 characters")
    .max(50, "Last name must be less than 50 characters")
    .required("Last name is required"),
  address: Yup.string()
    .min(3, "Address must be at least 3 characters")
    .max(100, "Address must be less than 100 characters")
    .required("Address is required"),
  city: Yup.string()
    .min(2, "City must be at least 2 characters")
    .max(50, "City must be less than 50 characters")
    .required("City is required"),
  state: Yup.string().required("State is required"),
  zip: Yup.string()
    .min(5, "ZIP code must be 5 characters")
    .max(10, "ZIP code must be less than 10 characters")
    .required("ZIP code is required"),
  country: Yup.string().required("Country is required"),
  cardNumber: Yup.string()
    .matches(/^[0-9]+$/, "Card number must be numeric")
    .length(16, "Card number must be 16 digits")
    .required("Card number is required"),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Expiration date must be MM/YY")
    .required("Expiry date is required"),
  securityCode: Yup.string()
    .matches(/^[0-9]+$/, "Security code must be numeric")
    .length(3, "Security code must be 3 digits")
    .required("Security code is required"),
  nameOnCard: Yup.string()
    .min(3, "Name on card must be at least 3 characters")
    .max(50, "Name on card must be less than 50 characters")
    .required("Name on card is required"),
});
