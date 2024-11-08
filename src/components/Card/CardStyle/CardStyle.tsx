import { Card } from "antd";
import AdressIcon from "@assets/images/mapIcon.png";
import PhoneIcon from "@assets/images/phoneIcon.png";
import MailIcon from "@assets/images/mailIcon.png";
import DetailCard from "@components/Detail/DetailCard";
import ImageCustom from "@components/ImageCustom";

interface CardStyleProps {
  tilteCard?: string;
  nameCard?: string;
  descriptionCard?: string;
  titleCardIn1?: string;
}

const cardDataV2 = [
  {
    image: AdressIcon,
    position: "Address",
    name: "101 Baker Street, NY",
    description:
      "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit ut <br/> aliquam, purus sit",
  },
  {
    image: PhoneIcon,
    position: "Phone",
    name: "+896 120 5889",
    description:
      "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit ut <br/> aliquam, purus sit",
  },
  {
    image: MailIcon,
    position: "Mail",
    name: "mail@company.com",
    description:
      "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit ut <br/> aliquam, purus sit",
  },
];

const CardStyle: React.FC<CardStyleProps> = (props) => {
  const { tilteCard = "", nameCard = "", descriptionCard = "" } = props;
  return (
    <>
      <DetailCard
        titleDetail={tilteCard}
        nameDetail={nameCard}
        descriptionDetail={descriptionCard}
      />

      <div className="flex justify-center mt-[2rem]">
        <div className=" flex">
          <div className="flex w-full max-md:grid max-md:grid-cols-1 max-tab:gap-2  md:grid md:grid-cols-3  lap:gap-x-0 md:max-lg:gap-x-2  justify-center">
            {cardDataV2.map((card, index) => (
              <div
                key={index}
                className={`  justify-center
                  `}
              >
                <Card
                  hoverable
                  className="bg-transparent border-none max-tab:w-full max-tab:h-full   des:w-[26.5rem] des:h-[25.125rem] rounded-[1.5625rem] hover:lap:bg-white hover:shadow-[0px_25px_50px_25px_rgba(246,247,255,1)]"
                >
                  <div className="flex justify-center mb-[2.875rem] max-tab:mt-[1rem] lap:mt-[5rem]">
                    <ImageCustom src={card.image} className="max-tab:w-[30%] "/>
                  </div>
                  <div>
                    <p className=" lap:text-base font-semibold leading-5 text-center text-pinkCustom" dangerouslySetInnerHTML={{ __html: card.position }}>
                    </p>
                    <p className=" lap:text-lg font-semibold leading-[22.5px] mt-[0.9375rem] text-center text-blackCustom" dangerouslySetInnerHTML={{ __html: card.name }}>
                    </p>
                    <p className=" lap:text-sm font-normal leading-[21px] tracking-wide text-center mt-4 text-greyCustom" dangerouslySetInnerHTML={{ __html: card.description }}>
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStyle;
