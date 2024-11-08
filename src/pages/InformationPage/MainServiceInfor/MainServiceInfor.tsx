import ImageCustom from "@components/ImageCustom";
import DetailCard from "@components/Detail/DetailCard";
import { Card } from "antd";
import AngleRight from "@assets/images/angle_right.png";
import WaveLine from "@assets/images/wave_line.png";
import Icon1 from "@assets/images/icon_1.png";
import Icon2 from "@assets/images/icon_2.png";
import Icon3 from "@assets/images/icon_3.png";

const cardDataV2 = [
    {
      image: Icon1,
      name: "Beauty consultation",
      description:
        "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit ut <br/> aliquam, purus sit",
    },
    {
      image: Icon2,
      name: "Skin treatments",
      description:
        "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit ut <br/> aliquam, purus sit",
    },
    {
      image: Icon3,
      name: "Beauty product",
      description:
        "Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit ut <br/> aliquam, purus sit",
    },
  ];

export const MainServiceInfor = () => {
  return (
    <section className="relative ">
      <DetailCard
        className="lap:max-des:pr-[2rem] lap:max-des:pl-[2rem]"
        titleDetail={"Main Services"}
        nameDetail={"Our focus services"}
        descriptionDetail={"Lorem ipsum dolor sit amet."}
      />

      <div className="flex justify-center max-des:mt-[2rem]  max-des:pr-[2rem] max-des:pl-[2rem]">
        <div className="flex relative">
          <div className="md:grid md:grid-cols-3 md:gap-x-[4rem] w-full justify-center">
            {cardDataV2.map((card, index) => (
              <div
                key={index}
                className={`max-md:mb-[2rem] lap:mb-0  lap:flex justify-center 
            `}
              >
                <Card
                  hoverable
                  className="max-tab:w-[100%] bg-white  md:max-lg:w-full md:max-lg:h-full lap:w-[16.3125rem] lap:h-[18.9375rem] rounded-[1.5625rem]"
                >
                  <div className="flex ml-[0.75rem] mb-[1.5625rem] mt-[0.4375rem]">
                    <ImageCustom src={card.image} />
                  </div>
                  <div>
                    <p
                      className=" text-lg font-semibold leading-[22.5px] mt-[0.9375rem] text-left text-blackCustom"
                      dangerouslySetInnerHTML={{ __html: card.name }}
                    ></p>
                    <p
                      className=" text-sm leading-[21px] tracking-wide text-left mt-[1rem] mb-[0.9375rem] text-greyCustom"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    ></p>
                    <a className="flex  text-sm font-semibold leading-6 tracking-[0.1em] text-left text-blink">
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
      <div className="absolute top-[18.75rem]">
        <ImageCustom src={WaveLine} />
      </div>
    </section>
  );
};
