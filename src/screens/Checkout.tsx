import ContactForm from "../components/ContactForm/ContactForm";
import Navigation from "../components/Navigation/Navigation";
import { ContactFormSection, PageLayout } from "./checkout.styled";

const Checkout = () => {
  return (
    <div>
      <Navigation />
      <PageLayout>
        <ContactFormSection>
          <ContactForm />
        </ContactFormSection>
      </PageLayout>
    </div>
  );
};

export default Checkout;
