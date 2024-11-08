import { Card } from "antd";
import imageHome1 from "@assets/images/Animation1.png";
import imageHome2 from "@assets/images/Animation2.png";
import imageHome3 from "@assets/images/Animation3.png";
import ImageCustom from "@components/ImageCustom";
import DetailCard from "@components/Detail/DetailCard";

interface CardIconProps {
  tilteCard?: string;
  nameCard?: string;
  descriptionCard?: string;
  titleCardIn1?: string;
}

const cardDataV2 = [
  {
    image: imageHome1,
    title: "Beauty consultation",
    description:
      "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
  {
    image: imageHome2,
    title: "Skin treatments",
    description:
      "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
  {
    image: imageHome3,
    title: "Beauty product",
    description:
      "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
];

const CardIcon: React.FC<CardIconProps> = (props) => {
  const { tilteCard = "", nameCard = "", descriptionCard = "" } = props;
  return (
    <>
      <DetailCard
        titleDetail={tilteCard}
        nameDetail={nameCard}
        descriptionDetail={descriptionCard}
      />

        <div className=" max-md:pt-[1rem] md:max-lg:mt-3  tab:max-md:gap-y-4 tab:grid md:grid-cols-3 :md:max-lg:gap-6  lap:gap-x-14 justify-center">
          {cardDataV2.map((card, index) => (
            <div
              key={index}
              className={` flex justify-center max-md:mb-[5%] last:mb-0 `}
            >
              <Card
                hoverable
                className="shadow-card-blog tab:max-md:w-[16.625rem] tab:max-md:h-[20.75rem] lap:w-[21.4375rem] lap:h-[28.625rem] rounded-[25px]"
              >
                <div className="flex justify-center tab:max-md:pt-[15%] tab:max-md:pb-[10%] lap:pl-4 lap:pr-4 lap:pt-[3.6875rem] lap:pb-[3.6875rem]">
                  <ImageCustom
                    className="tab:max-md:w-[60%] lap:w-[10.375rem]"
                    src={card.image}
                  />
                </div>
                <div>
                  <div className="flex justify-center">
                    <p className="tab:max-md:text-[1.25rem]  lap:text-lg font-semibold leading-[1.40625rem] text-center text-blackCustom">
                      {card.title}
                    </p>
                  </div>
                  <p className=" tab:max-md:text-[1rem] font-normal leading-[1.3125rem] tracking-wide text-center mt-4 text-greyCustom">
                    {card.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
    </>
  );
};

export default CardIcon;
