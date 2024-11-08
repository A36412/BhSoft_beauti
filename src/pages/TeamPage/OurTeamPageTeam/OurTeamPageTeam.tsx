import { CardPerson } from "@components/Card";
import ImageCustom from "@components/ImageCustom";
import BubbleAboutUs from "@assets/images/bubble_aboutUs.png";


export const OurTeamPageTeam = () => {
  return (
    <section className="max-des:pl-[2rem] max-des:pr-[2rem] max-md:pt-[4rem] md:max-lg:pt-[6rem] lap:pt-[14.3125rem]">
      <div>
        <ImageCustom
          className="absolute top-[14.125rem] right-0 w-full bg-cover"
          src={BubbleAboutUs}
        />
        <div className="relative">
          <CardPerson
            tilteCard="Our Team"
            nameCard="We are Professional"
            descriptionCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          />
        </div>
      </div>
    </section>
  );
};
