import { Card } from "antd";
import image1 from "@assets/images/imageBlog3.png";
import image2 from "@assets/images/imageBlog2.png";
import image3 from "@assets/images/imageBlog.png";
import Folder from "@assets/images/folder.png";
import ImageCustom from "@components/ImageCustom";
import ButtonCustom from "@components/Button/ButtonCustom";

const cardData = [
  {
    image: image1,
    type: "Consultation",
    title: "How much does a consultation <br/> cost at our clinic?",
    description:
      "A wonderful serenity has taken possession of my entire soul, <br/>like these sweet mornings of spring which I enjoy with my <br/>whole heart. I am alone, and feel the charm of existence in <br/> this spot, which was created for the…",
  },
  {
    image: image2,
    type: "Beauty",
    title: "Watch out! don't choose the <br/>wrong beauty product",
    description:
      "A wonderful serenity has taken possession of my entire soul, <br/>like these sweet mornings of spring which I enjoy with my <br/>whole heart. I am alone, and feel the charm of existence in <br/> this spot, which was created for the…",
  },
  {
    image: image3,
    type: "Treatments",
    title: "About skin care you need to <br/> know",
    description:
      "A wonderful serenity has taken possession of my entire soul, <br/>like these sweet mornings of spring which I enjoy with my <br/>whole heart. I am alone, and feel the charm of existence in <br/> this spot, which was created for the…",
  },
];

const CardStyleTwo: React.FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="md:max-lg:grid max-tab:gap-y-3 lap:block w-full justify-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="des:mb-[8.3125rem] max-tab:flex max-tab:justify-center tab:max-md:flex tab:max-md:justify-center md:max-lg:flex md:max-lg:justify-center lap:max-des:pl-[4rem] des:pl-[9.375rem] mb-12 last:mb-0"
            >
              <Card
                className="shadow-card-blog max-tab:w-[70%] tab:max-md:w-[70%] md:max-lg:w-[70%] max-tab:h-[100%] des:w-[45.625rem] des:h-[59.5625rem] rounded-[3.125rem]"
                cover={<ImageCustom src={card.image} />}
              >
                <div className="mt-14 lap:ml-[5rem] mr-5">
                  <p className="flex  text-base font-semibold leading-5 text-left text-blink">
                    <span className="mr-[0.9375rem] mb-[1.125rem]">
                      <ImageCustom src={Folder} />
                    </span>
                    <div className="flex pt-[0.3125rem]">
                      <p>{card.type}</p>
                    </div>
                  </p>
                  <p
                    className="mb-[1.9375rem]  max-tab:text-xl tab:max-md:text-2xl md:max-lg:text-3xl lap:text-4xl font-semibold leading-[2.8125rem] text-left text-blackCustom"
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  ></p>
                  <p
                    className=" max-tab:text-sm tab:max-md:text-base md:max-lg:text-base lap:text-base font-normal leading-[1.5rem] tracking-[0.1em] text-left text-greyCustom"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  ></p>
                  <div className="max-tab:mt-[1rem] tab:max-md:mt-[1rem] md:max-lg:mt-[1rem] lap:mt-[2.5rem]">
                    <ButtonCustom
                      showImage={true}
                      content="Read more"
                      classContent=" text-[1rem] font-semibold leading-[24px] tracking-[0.1em] text-center"
                      classButton="flex max-tab:py-[0.5rem] max-tab:px-[1rem] tab:max-md:py-[0.5rem] tab:max-md:px-[1rem] md:max-lg:py-[0.5rem] md:max-lg:px-[1rem] lap:py-[1rem] lap:px-[3.125rem]"
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardStyleTwo;
