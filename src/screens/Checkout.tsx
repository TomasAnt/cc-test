import Cart from "../components/Cart/Cart";
import ContactForm from "../components/ContactForm/ContactForm";
import Navigation from "../components/Navigation/Navigation";
import {
  CartSummarySection,
  ContactFormSection,
  PageLayout,
} from "./checkout.styled";

const Checkout = () => {
  return (
    <div>
      <Navigation />
      <PageLayout>
        <ContactFormSection>
          <ContactForm />
        </ContactFormSection>
        <CartSummarySection>
          <Cart
            products={[{ name: "LogoIpsum IPL", price: 299.97 }]}
            total={299.97}
          />
        </CartSummarySection>
      </PageLayout>
    </div>
  );
};

export default Checkout;
