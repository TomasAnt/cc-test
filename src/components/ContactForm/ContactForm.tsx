import { Formik } from "formik";
import Button from "../Button/Button";
import { states, countries, paymentImages, buttonColor } from "../../../config";
import CartSection from "../CartSection/CartSection";
import WhySection from "../WhySection/WhySection";
import useIsMobile from "../../hooks/useIsMobile";
import { validationSchema } from "../../utils/validationSchema";

import {
  Center,
  Container,
  Contact,
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
  StyledForm,
  PaymentHeading,
  ContactHeading,
  DeliveryHeading,
  StyledLabel,
  StyledRadioButton,
} from "./contactForm.styled";
import { initialValues } from "../../utils/formikConfig";
import { TextInputField } from "../FormFields/FormFields";

const ContactForm = () => {
  const isMobile = useIsMobile();

  return (
    <Center>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log("Form submitted:", values);
            window.alert(
              "Payment was successful, check the console for details."
            );
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          {(formik) => (
            <StyledForm onSubmit={formik.handleSubmit}>
              {isMobile && <CartSection />}
              <Contact>
                <ContactHeading>Contact</ContactHeading>
                <OneField>
                  <TextInputField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    autocomplete="email"
                  />
                </OneField>
              </Contact>
              <Delivery>
                <DeliveryHeading>Delivery</DeliveryHeading>
                <TwoFields>
                  <TextInputField
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    autocomplete="given-name"
                  />
                  <TextInputField
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    autocomplete="family-name"
                  />
                </TwoFields>
                <OneField>
                  <TextInputField
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Address"
                    autocomplete="street-address"
                  />
                </OneField>
                <ThreeFields>
                  <TextInputField
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                    autocomplete="address-level2"
                  />
                  <SelectContainer>
                    <SelectLabel htmlFor="state">State / Province</SelectLabel>
                    <Select
                      id="state"
                      name="state"
                      as="select"
                      autoComplete="address-level1"
                    >
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </Select>
                  </SelectContainer>
                  <TextInputField
                    id="zip"
                    name="zip"
                    type="text"
                    placeholder="ZIP"
                    autocomplete="postal-code"
                  />
                </ThreeFields>
                <OneField>
                  <SelectContainer>
                    <SelectLabel htmlFor="country">Country</SelectLabel>
                    <Select
                      id="country"
                      name="country"
                      as="select"
                      autoComplete="country"
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
              <PaymentFields>
                <PaymentHeading>Payment</PaymentHeading>
                <Disclaimer>
                  All transactions are secured and encrypted
                </Disclaimer>
                <Payment>
                  <PaymentOption>
                    <StyledRadioButton
                      as="input"
                      type="radio"
                      id="creditCard"
                      name="paymentMethod"
                      value="Credit Card"
                      autoComplete="cc-type"
                      defaultChecked
                    />
                    <StyledLabel htmlFor="creditCard">Credit Card</StyledLabel>
                  </PaymentOption>
                  <Cards>
                    {paymentImages.map((image) => (
                      <img key={image.alt} src={image.src} alt={image.alt} />
                    ))}
                  </Cards>
                </Payment>
                <PaymentContainer>
                  <OneField>
                    <TextInputField
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      placeholder="Card number"
                      autocomplete="cc-number"
                      maxLength={16}
                    />
                  </OneField>
                  <TwoFields>
                    <TextInputField
                      id="expiryDate"
                      name="expiryDate"
                      type="text"
                      placeholder="Expiration (MM/YY)"
                      autocomplete="cc-exp"
                    />
                    <TextInputField
                      id="securityCode"
                      name="securityCode"
                      type="text"
                      placeholder="Security code"
                      autocomplete="cc-csc"
                      maxLength={3}
                    />
                  </TwoFields>
                  <TextInputField
                    id="nameOnCard"
                    name="nameOnCard"
                    type="text"
                    placeholder="Name on card"
                    autocomplete="cc-name"
                  />
                </PaymentContainer>
              </PaymentFields>
              <ButtonContainer>
                <Button
                  $variant={buttonColor}
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
