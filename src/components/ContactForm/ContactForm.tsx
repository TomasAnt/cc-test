import React, { useState } from "react";
import {
  Cards,
  Center,
  Container,
  Input,
  OneField,
  Payment,
  PaymentContainer,
  PaymentOption,
  Select,
  SelectContainer,
  SelectLabel,
  Subtitle,
  ThreeFields,
  TwoFields,
} from "./contactForm.styled";
import Button from "../Button/Button";
import { states, countries } from "../../../config";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../utils/validationSchema";
import styled from "styled-components";

type FormData = {
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
};

const StyledForm = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

const Headline = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  line-height: ${({ theme }) => theme.lineHeights.h3};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacings.s16};
`;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
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
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const initialValues: FormData = {
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

  const handleSubmit = (values: FormData) => {
    console.log(values);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <StyledForm>
            <Headline>Contact</Headline>
            <OneField>
              <Input type="email" name="email" placeholder="Email Address" />
            </OneField>
            <Headline>Delivery</Headline>
            <TwoFields>
              <Input
                type="firstName"
                name="firstName"
                placeholder="First Name"
              />

              <Input type="lastName" name="lastName" placeholder="Last Name" />
            </TwoFields>
            <OneField>
              <Input type="address" name="address" placeholder="Address" />
            </OneField>

            <ThreeFields>
              <Input type="city" name="city" placeholder="City" />
              <SelectContainer>
                <SelectLabel htmlFor="state">State / Province</SelectLabel>
                <Select
                  name="state"
                  id="state"
                  onChange={handleChange}
                  value={formData.state}
                >
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Select>
              </SelectContainer>
              <Input type="zip" name="zip" placeholder="ZIP" />
            </ThreeFields>
            <OneField>
              <SelectContainer>
                <SelectLabel htmlFor="country">Country</SelectLabel>
                <Select
                  name="country"
                  id="country"
                  onChange={handleChange}
                  value={formData.country}
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Select>
              </SelectContainer>
            </OneField>
            <Headline>Payment</Headline>
            <Payment>
              <PaymentOption>
                <Input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="Credit Card"
                  defaultChecked
                />
                <span>Credit Card</span>
              </PaymentOption>
              <Cards>
                <img src="./visa.svg" />
                <img src="./masterCard.svg" />
                <img src="./amex.svg" />
                <img src="./dinnersClub.svg" />
                <img src="./others.svg" />
              </Cards>
            </Payment>
            <PaymentContainer>
              <OneField>
                <Input type="text" placeholder="Card number" />
              </OneField>
              <TwoFields>
                <Input type="text" placeholder="Expiration (MM/YY)" />
                <Input type="text" placeholder="Security code" />
              </TwoFields>
              <Input type="text" placeholder="Name on card" />
            </PaymentContainer>
            <Button $variant="green" type="submit" disabled={!formik.isValid}>
              Submit
            </Button>
            <Center>
              <img src="./securityDesktop.svg" />
              <Subtitle>All transactions are secured and encrypted</Subtitle>
            </Center>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default ContactForm;
