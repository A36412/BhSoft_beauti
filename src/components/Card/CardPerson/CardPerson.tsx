import { Card } from "antd";
import person1 from "@assets/images/person1.png";
import person2 from "@assets/images/person2.png";
import person3 from "@assets/images/person3.png";
import face from "@assets/images/facebook.png";
import insta from "@assets/images/instagram.png";
import twitter from "@assets/images/twitter.png";
import ImageCustom from "@components/ImageCustom";
import DetailCard from "@components/Detail/DetailCard";

interface CardPersonProps {
  tilteCard?: string;
  nameCard?: string;
  descriptionCard?: string;
  titleCardIn1?: string;
}

const cardDataV2 = [
  {
    image: person1,
    position: "Surgeon",
    name: "Briyan Nevalli",
    description:
      "Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit ut <br/> aliquam, purus sit",
  },
  {
    image: person2,
    position: "Dermatologist",
    name: "Bella sebastian",
    description:
      "Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit ut <br/> aliquam, purus sit",
  },
  {
    image: person3,
    position: "Stylist expert",
    name: "Lilly Adams",
    description:
      "Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit ut <br/> aliquam, purus sit",
  },
];

const CardPerson: React.FC<CardPersonProps> = (props) => {
  const { tilteCard = "", nameCard = "", descriptionCard = "" } = props;
  return (
    <>
      <DetailCard
        titleDetail={tilteCard}
        nameDetail={nameCard}
        descriptionDetail={descriptionCard}
      />

      <div className="md:max-lg:mt-5 lap:flex justify-center">
        <div className="">
          <div className="md:grid md:grid-cols-3 md:max-lg:gap-x-8 lap:gap-x-0 w-full justify-center">
            {cardDataV2.map((card, index) => (
              <div key={index} className={` flex justify-center `}>
                <Card
                  hoverable
                  className={`bg-transparent max-md:w-[100%] max-md:mt-[3rem] lap:w-[26.5rem] lap:mt-0 max-md:h-[100%]   last:mb-0 last:mt-0 lap:h-[39.125rem] border-none rounded-[25px] hover:lap:bg-white hover:shadow-[0px_25px_50px_25px_rgba(246,247,255,1)]`}
                >
                  <div className="flex justify-center lap:pl-[3.6875rem] lap:pr-[3.6875rem] lap:pt-[3.6875rem] lap:pb-[3.6875rem]">
                    <ImageCustom
                      className="tab:max-md:w-[5rem] lap:w-[9.125rem]"
                      src={card.image}
                    />
                  </div>
                  <div>
                    <p
                      className=" text-base font-semibold leading-5 text-center text-pinkCustom"
                      dangerouslySetInnerHTML={{ __html: card.position }}
                    ></p>
                    <p
                      className=" text-lg font-semibold leading-[22.5px] mt-[0.9375rem] text-center text-blackCustom"
                      dangerouslySetInnerHTML={{ __html: card.name }}
                    ></p>
                    <p
                      className=" text-sm font-normal leading-[21px] tracking-wide text-center mt-4 text-greyCustom"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    ></p>
                  </div>
                  <div className="flex flex-row mt-[3.125rem] justify-center">
                    <div>
                      <button className="w-[3.0625rem] h-[3.0625rem] rounded-full bg-white flex items-center justify-center shadow-custom">
                        <ImageCustom
                          src={twitter}
                          className="w-[1.5625rem] h-[1.5625rem]"
                        />
                      </button>
                    </div>
                    <div className="pl-[2.125rem] pr-[2.125rem]">
                      <button className="w-[3.0625rem] h-[3.0625rem] rounded-full bg-white flex items-center justify-center shadow-custom">
                        <ImageCustom
                          src={face}
                          className="w-[1.5625rem] h-[1.5625rem]"
                        />
                      </button>
                    </div>
                    <div>
                      <button className="w-[3.0625rem] h-[3.0625rem] rounded-full bg-white flex items-center justify-center shadow-custom">
                        <ImageCustom
                          src={insta}
                          className="w-[1.5625rem] h-[1.5625rem]"
                        />
                      </button>
                    </div>
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

export default CardPerson;
