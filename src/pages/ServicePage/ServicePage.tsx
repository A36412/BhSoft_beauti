import { OurServicesPage } from "./OurServicesPage/OurServicesPage";
import { CustomerServicesPage } from "./CustomerService/CustomerService";
import { BestResponsibility } from "./BestResponsibility/BestResponsibility";
import { FAQServices } from "./FAQServices/FAQServies";

const ServicePage: React.FC = () => {
  return (
    <>
      <OurServicesPage />
      <CustomerServicesPage />
      <BestResponsibility />
      <FAQServices />
    </>
  );
};

export default ServicePage;
