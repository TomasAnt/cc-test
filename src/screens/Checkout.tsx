import ContactForm from "../components/ContactForm/ContactForm";
import Navigation from "../components/Navigation/Navigation";
import { ContactFormSection, PageLayout } from "./checkout.styled";

const Checkout = () => {
  return (
    <>
      <Navigation />
      <PageLayout>
        <ContactFormSection>
          <ContactForm />
        </ContactFormSection>
      </PageLayout>
    </>
  );
};

export default Checkout;
