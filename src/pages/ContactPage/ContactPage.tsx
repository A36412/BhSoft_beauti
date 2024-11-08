
import { ContactUsPageContact } from "./ContactUsSection/ContactUsSection";
import { GetInTouchPageContact } from "./GetInTouch/GetInTouch";
import { MapPageContact } from "./MapContactUs/MapContactUs";

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactUsPageContact />
      <MapPageContact />
      <GetInTouchPageContact />
    </>
  );
};

export default ContactPage;
