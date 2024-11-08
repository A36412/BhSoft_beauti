import { CardPerson } from "@components/Card";
import ImageCustom from "@components/ImageCustom";
import BubbleAboutUs from "@assets/images/bubble_aboutUs.png";

export const ProFesstionalTeamAboutUs = () => {
  return (
    <section className="max-des:pl-[2rem] max-tab:mt-[5rem] max-des:pr-[2rem] relative">
    <div>
      <ImageCustom
        className="max-md:hidden lap absolute top-[-33.1875rem] right-0"
        src={BubbleAboutUs}
      />
      <div className="relative">
        <CardPerson
          tilteCard="Professional Teams"
          nameCard="The Professional expert"
          descriptionCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        />
      </div>
    </div>
  </section>
  );
};
