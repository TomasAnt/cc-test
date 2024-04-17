import styled from "styled-components";
import { Formik, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import { states, countries } from "../../../config";
import CartSection from "../CartSection/CartSection";
import WhySection from "../WhySection/WhySection";
import useIsMobile from "../../hooks/useIsMobile";
import { validationSchema } from "../../utils/validationSchema";

// Styled components
import {
  Center,
  Container,
  Contact,
  Headline,
  Input,
  Select,
  SelectContainer,
  SelectLabel,
  TwoFields,
  OneField,
  ThreeFields,
  Delivery,
  PaymentFields,
  Payment,
  PaymentOption,
  Cards,
  ButtonContainer,
  Disclaimer,
  IconContainer,
  Subtitle,
  CartContainer,
  PaymentContainer,
  ErrorMsg,
  Absolute,
} from "./contactForm.styled";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;

  @media ${({ theme }) => theme.media.maxSmallDesktop} {
    max-width: 100%;
  }
`;

const ContactForm = () => {
  const isMobile = useIsMobile();

  const initialValues = {
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

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
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
            <StyledForm onSubmit={formik.handleSubmit}>
              {isMobile && <CartSection />}
              <Contact>
                <Headline>Contact</Headline>
                <OneField>
                  <Absolute>
                    <Field
                      as={Input}
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <ErrorMessage name="email" component={ErrorMsg} />
                  </Absolute>
                </OneField>
              </Contact>
              <Delivery>
                <Headline>Delivery</Headline>
                <TwoFields>
                  <Absolute>
                    <Field
                      as={Input}
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                    />
                    <ErrorMessage name="firstName" component={ErrorMsg} />
                  </Absolute>
                  <Absolute>
                    <Field
                      as={Input}
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                    />
                    <ErrorMessage name="lastName" component={ErrorMsg} />
                  </Absolute>
                </TwoFields>
                <OneField>
                  <Absolute>
                    <Field
                      as={Input}
                      type="text"
                      name="address"
                      placeholder="Address"
                    />
                    <ErrorMessage name="address" component={ErrorMsg} />
                  </Absolute>
                </OneField>
                <ThreeFields>
                  <Absolute>
                    <Field
                      as={Input}
                      type="text"
                      name="city"
                      placeholder="City"
                    />
                    <ErrorMessage name="city" component={ErrorMsg} />
                  </Absolute>
                  <SelectContainer>
                    <SelectLabel htmlFor="state">State / Province</SelectLabel>
                    <Field as={Select} name="state">
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </Field>
                  </SelectContainer>
                  <Absolute>
                    <Field
                      as={Input}
                      type="text"
                      name="zip"
                      placeholder="ZIP"
                    />
                    <ErrorMessage name="zip" component={ErrorMsg} />
                  </Absolute>
                </ThreeFields>
                <OneField>
                  <SelectContainer>
                    <SelectLabel htmlFor="country">Country</SelectLabel>
                    <Field as={Select} name="country">
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </Field>
                  </SelectContainer>
                </OneField>
              </Delivery>
              <PaymentFields>
                <Headline>Payment</Headline>
                <Disclaimer>
                  All transactions are secured and encrypted
                </Disclaimer>
                <Payment>
                  <PaymentOption>
                    <Field
                      as={Input}
                      type="radio"
                      id="creditCard"
                      name="paymentMethod"
                      value="Credit Card"
                    />
                    <span>Credit Card</span>
                  </PaymentOption>
                  <Cards>
                    <img src="./visa.svg" alt="Visa" />
                    <img src="./masterCard.svg" alt="MasterCard" />
                    <img src="./amex.svg" alt="Amex" />
                    <img src="./dinnersClub.svg" alt="Dinners Club" />
                    <img src="./others.svg" alt="Others" />
                  </Cards>
                </Payment>
                <PaymentContainer>
                  <OneField>
                    <Absolute>
                      <Field
                        as={Input}
                        type="text"
                        name="cardNumber"
                        placeholder="Card number"
                      />
                      <ErrorMessage name="cardNumber" component={ErrorMsg} />
                    </Absolute>
                  </OneField>
                  <TwoFields>
                    <Absolute>
                      <Field
                        as={Input}
                        type="text"
                        name="expiryDate"
                        placeholder="Expiration (MM/YY)"
                      />
                      <ErrorMessage name="expiryDate" component={ErrorMsg} />
                    </Absolute>
                    <Absolute>
                      <Field
                        as={Input}
                        type="text"
                        name="securityCode"
                        placeholder="Security code"
                      />
                      <ErrorMessage name="securityCode" component={ErrorMsg} />
                    </Absolute>
                  </TwoFields>
                  <Absolute>
                    <Field
                      as={Input}
                      type="text"
                      name="nameOnCard"
                      placeholder="Name on card"
                    />
                    <ErrorMessage name="nameOnCard" component={ErrorMsg} />
                  </Absolute>
                </PaymentContainer>
              </PaymentFields>

              <ButtonContainer>
                <Button
                  $variant="green"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Complete Order
                </Button>
              </ButtonContainer>
              <IconContainer>
                <img src="./securityDesktop.svg" alt="Security Icon" />
                <Subtitle>All transactions are secured and encrypted</Subtitle>
              </IconContainer>
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
