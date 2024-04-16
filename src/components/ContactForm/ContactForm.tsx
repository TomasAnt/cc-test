import React, { useEffect, useState } from "react";
import {
  Cards,
  Center,
  Contact,
  Container,
  Headline,
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
  CartContainer,
  Delivery,
} from "./contactForm.styled";
import Button from "../Button/Button";
import { states, countries, products } from "../../../config";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../utils/validationSchema";
import styled from "styled-components";
import WhySection from "../WhySection/WhySection";

import CartSection from "../CartSection/CartSection";
import useIsMobile from "../../hooks/useIsMobile";

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

export const StyledForm = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    max-width: 100%;
  }
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

  const isMobile = useIsMobile();

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
    <Center>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <StyledForm>
              {isMobile ? <CartSection /> : null}
              <Contact>
                <Headline>Contact</Headline>
                <OneField>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </OneField>
              </Contact>
              <Delivery>
                <Headline>Delivery</Headline>
                <TwoFields>
                  <Input
                    type="firstName"
                    name="firstName"
                    placeholder="First Name"
                  />

                  <Input
                    type="lastName"
                    name="lastName"
                    placeholder="Last Name"
                  />
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
              </Delivery>
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
      <CartContainer>
        {!isMobile && <CartSection />}
        <WhySection />
      </CartContainer>
    </Center>
  );
};

export default ContactForm;
