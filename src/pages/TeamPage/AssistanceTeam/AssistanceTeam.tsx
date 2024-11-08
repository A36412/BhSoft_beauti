import ImageCustom from "@components/ImageCustom";
import { DetailCard } from "@components/Detail";
import Team1 from "@assets/images/team1.png";
import Team2 from "@assets/images/team2.png";
import Team3 from "@assets/images/team3.png";

const CardData = [
  {
    image: Team1,
    name: "Lina Gustav / ",
    position: "Pharmacist",
    description:
      "Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Nam id magnis at placerat <br/> pulvinar euismod neque.",
  },
  {
    image: Team2,
    name: "Adam White / ",
    position: "Finance",
    description:
      "Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Nam id magnis at placerat <br/> pulvinar euismod neque.",
  },
  {
    image: Team3,
    name: "Jane Doe / ",
    position: "Marketer",
    description:
      "Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Nam id magnis at placerat <br/> pulvinar euismod neque.",
  },
];

export const AssistanceTeamPageTeam = () => {
  return (
    <section className="max-des:pl-[2rem] max-des:pr-[2rem] max-des:mt-[3rem]  des:mt-[9.5625rem] relative">
      <DetailCard
        titleDetail="Assistance Team"
        nameDetail="Meet the pro assistance"
        descriptionDetail="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        className="relative"
      />
      <div className="des:ml-[9.375rem] max-lg:mt-[4rem] lap:mt-[6.875rem]">
        {CardData.map((card) => (
          <div className="lap:flex mb-[4.9375rem]">
            <div className="max-lg:flex max-lg:justify-center ">
              <ImageCustom
                src={card.image}
                className="max-tab:w-[100%] lap:w-full"
              />
            </div>
            <div className="max-lg:mt-[2rem] lap:ml-[10.75rem] lap:mt-[4rem] lap:mb-[4.375rem]">
              <div className="flex max-lg:justify-center  mb-[1.25rem]">
                <p className=" font-semibold text-lg leading-[1.40625rem] text-blackCustom">
                  {card.name}
                </p>
                <p className="pl-[0.3rem] flex  text-sm italic font-normal leading-[1.0625rem] items-center text-greyCustom">
                  {card.position}
                </p>
              </div>
              <p
                className="max-lg:text-center text-base font-normal leading-6 tracking-[0.1em] text-greyCustom"
                dangerouslySetInnerHTML={{ __html: card.description }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
