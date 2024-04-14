import { useState } from "react";
import { states, countries } from "../../../config";
import {
  Cards,
  Container,
  Form,
  Input,
  OneFieldContainer,
  Payment,
  PaymentContainer,
  PaymentOption,
  SectionSubtitle,
  SectionTitle,
  Select,
  SelectContainer,
  SelectLabel,
  ThreeFieldsContainer,
  TwoFieldsContainer,
} from "./contactForm.styled";
import Button from "../Button/Button";

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

  return (
    <Container>
      <Form>
        <SectionTitle>Contact</SectionTitle>
        <OneFieldContainer>
          <Input type="email" placeholder="Email Address" />
        </OneFieldContainer>
        <SectionTitle>Delivery</SectionTitle>
        <TwoFieldsContainer>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
        </TwoFieldsContainer>
        <OneFieldContainer>
          <Input type="text" placeholder="Address" />
        </OneFieldContainer>
        <ThreeFieldsContainer>
          <Input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            required
            onChange={handleChange}
            value={formData.city}
          />

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

          <Input
            type="text"
            name="zip"
            placeholder="ZIP / Postal Code"
            id="zip"
            required
            onChange={handleChange}
            value={formData.zip}
          />
        </ThreeFieldsContainer>
        <OneFieldContainer>
          <SelectContainer>
            <SelectLabel htmlFor="country">Country</SelectLabel>
            <Select
              name="country"
              id="country"
              required
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
        </OneFieldContainer>

        <SectionTitle>Payment</SectionTitle>
        <SectionSubtitle>
          All transactions are secure and encrypted.
        </SectionSubtitle>
        <Payment>
          <PaymentOption>
            <Input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="Credit Card"
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
          <OneFieldContainer>
            <Input type="text" placeholder="Card number" />
          </OneFieldContainer>
          <TwoFieldsContainer>
            <Input type="text" placeholder="Expiration (MM/YY)" />
            <Input type="text" placeholder="Security code" />
          </TwoFieldsContainer>
          <Input type="text" placeholder="Name on card" />
        </PaymentContainer>
        <Button $variant="green" type="submit">
          Complete Order
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
