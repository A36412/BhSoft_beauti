import { Card } from "antd";
import image1 from "@assets/images/card_image1.png";
import image2 from "@assets/images/card_image2.png";
import image3 from "@assets/images/card_image3.png";
import AngleRight from "@assets/images/angle_right.png";
import ImageCustom from "@components/ImageCustom";
import DetailCard from "@components/Detail/DetailCard";

interface CardDescriptionProps {
  tilteCard?: string;
  nameCard?: string;
  descriptionCard?: string;
}

const cardData = [
  {
    image: image1,
    title: "How much does a consultation cost at our clinic?",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
  },
  {
    image: image2,
    title: "Watch out! don't choose the wrong beauty product",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
  },
  {
    image: image3,
    title: "About skin care you need to know",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
  },
];

const CardDescription: React.FC<CardDescriptionProps> = ({
  tilteCard = "",
  nameCard = "",
  descriptionCard = "",
}) => {
  return (
    <div>
      <DetailCard
        titleDetail={tilteCard}
        nameDetail={nameCard}
        descriptionDetail={descriptionCard}
      />

      <div className="flex justify-center md:max-lg:mt-[4rem] max-tab:pt-[1rem] tab:max-md:pt-[1rem]">
        <div className="md:grid md:grid-cols-3 gap-x-[3.125rem] w-full justify-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex justify-center mb-[5rem] last:mb-0"
            >
              <Card
                hoverable
                className="w-[21.4375rem] h-[33.9375rem] rounded-[1.563rem] shadow-card-blog"
                cover={<ImageCustom src={card.image} />}
              >
                <div className="mt-[0.6875rem] px-[0.875rem]">
                  <p className=" text-lg font-semibold leading-[1.40625rem] text-left text-blackCustom">
                    {card.title}
                  </p>
                  <p className=" text-sm font-normal leading-[1.3125rem] tracking-wide text-left mb-[1.875rem] text-greyCustom">
                    {card.description}
                  </p>
                  <a className="flex items-center  text-sm font-semibold leading-6 tracking-[0.1em] text-left text-blink">
                    Learn more
                    <span className="pl-[0.9375rem]">
                      <ImageCustom src={AngleRight} />
                    </span>
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
