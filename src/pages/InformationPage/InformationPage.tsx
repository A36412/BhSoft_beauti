


import { HeaderInfor } from "./HeaderInfor/HeaderInfor";
import { AboutUsInfor } from "./AboutUsInfor/AboutUsInfor";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";
import { RequestServiceInfor } from "./RequestServiceInfor/RequestServiceInfor";



const InformationPage: React.FC = () => {
  return (
    <>
      <div className="relative">
        <HeaderInfor />
        <AboutUsInfor />
        <WhyChooseUs />
        <RequestServiceInfor />

       
      </div>
    </>
  );
};

export default InformationPage;
