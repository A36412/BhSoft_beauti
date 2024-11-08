

import { AboutPageAbout } from "./About/About";
import { OurClientAboutUs } from "./OurClient/OurClient";
import { ProFesstionalTeamAboutUs } from "./ProTeamAbout/ProTeamAbout";
import { SloganAboutUs } from "./Slogan/Slogan";


const AboutUs: React.FC = () => {
  return (
    <>
      <AboutPageAbout />
      <ProFesstionalTeamAboutUs/>
      <SloganAboutUs />
      <OurClientAboutUs />
    </>
  );
};

export default AboutUs;
