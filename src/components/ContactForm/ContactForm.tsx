import React, { useState } from "react";
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
  Box,
  BoxParagraph,
  BoxTitle,
  CartCount,
  CartContainer,
  Content,
  ImageContainer,
  Price,
  Product,
  Separator,
  Subtotal,
  SubtotalPrice,
  SubtotalTitle,
  Title,
  Total,
  TotalPrice,
  TotalTitle,
  Why,
  WhyTitle,
} from "./contactForm.styled";
import Button from "../Button/Button";
import { states, countries, products } from "../../../config";
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

export const StyledForm = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
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

  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.count,
    0
  );

  return (
    <>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <StyledForm>
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
        {products.map((product) => (
          <Product key={product.id}>
            <ImageContainer>
              <img src={product.imageUrl} alt={product.title} />
              <CartCount>{product.count}</CartCount>
              <Title>{product.title}</Title>
            </ImageContainer>
            <Price>
              {product.displayMode === "each"
                ? `$${product.price.toFixed(2)}/each`
                : `$${(product.price * product.count).toFixed(2)}`}
            </Price>
          </Product>
        ))}
        <Subtotal>
          <SubtotalTitle>Subtotal</SubtotalTitle>
          <SubtotalPrice>${totalPrice.toFixed(2)}</SubtotalPrice>
        </Subtotal>
        <Total>
          <TotalTitle>Total</TotalTitle>
          <TotalPrice>${totalPrice.toFixed(2)}</TotalPrice>
        </Total>
        <Why>
          <Separator />
          <WhyTitle>Why Choose Logoipsum</WhyTitle>
          <Separator />
        </Why>
        <Content>
          <img src="./cashbackDesktop.svg" alt="Cash back" />
          <Box>
            <BoxTitle>90 Day Money Back Guarantee</BoxTitle>
            <BoxParagraph>
              We love our products and we're confident you will too! If you're
              not in love with your LogoIpsum product, our easy return and
              refund policy is designed to make things as easy as possible for
              you.
            </BoxParagraph>
          </Box>
        </Content>
        <Content>
          <img src="./ratingDesktop.svg" alt="Cash back" />
          <Box>
            <BoxTitle>Over 75,000+ Happy Customer</BoxTitle>
            <BoxParagraph>
              Everyone that tries LogoIpsum says it’s a must-have. We invest a
              lot of love and care into making our products, so you can enjoy
              seeing results when using it.
            </BoxParagraph>
          </Box>
        </Content>
        <Content>
          <img src="./customerServiceMobile.svg" alt="Cash back" />
          <Box>
            <BoxTitle>Professional Customer Support</BoxTitle>
            <BoxParagraph>
              Our customer service works 24/7 for your satisfaction. Feel free
              to reach out to us anytime.
            </BoxParagraph>
          </Box>
        </Content>
      </CartContainer>
    </>
  );
};

export default ContactForm;
