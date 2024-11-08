import ImageCustom from "@components/ImageCustom";
import slide from "@assets/images/home1_slide.png";
import slide_button from "@assets/images/slide_button.png";
import { HeaderHomeOne } from "./Header/Header";
import { MainServiceHomeOne } from "./MainServices/MainServices";
import { AboutUsHomeOne } from "./AboutUs/AboutUs";
import { ProFesstionalTeamHomeOne } from "./ProTeam/ProTeam";
import { ContactUsHomeOne } from "./ContactUs/ContactUs";


const HomeOne: React.FC = () => {
  return (
    <>
      <div className="max-w-full">
        <ImageCustom src={slide} className="bg-cover" />
          <HeaderHomeOne />

        <div className="flex w-full justify-center">
          <ImageCustom src={slide_button} />
        </div>
        <MainServiceHomeOne />
        <AboutUsHomeOne />
        <ProFesstionalTeamHomeOne />
        <ContactUsHomeOne />
      </div>
    </>
  );
};

export default HomeOne;
