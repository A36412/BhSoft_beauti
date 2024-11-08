import ImageCustom from "@components/ImageCustom";
import BgService from "@assets/images/bgService.png";
import ServiceImage1 from "@assets/images/serviceImage1.png";
import ServiceImage1_2 from "@assets/images/serviceImage1_2.png";
import ServiceImage2 from "@assets/images/serviceImage2.png";
import ServiceImage2_1 from "@assets/images/serviceImage2_1.png";
import { DetailCard } from "@components/Detail";

export const OurServicesPage  = () => {
  return (
    <section className="max-tab:w-full max-tab:pt-[2rem]  md:max-lg:pt-[7rem] lap:pt-[14.3125rem]">
    <ImageCustom
      src={BgService}
      className="absolute w-full top-[12.4375rem]"
    />
    <div className="relative z-10 max-des:pr-[2rem] max-des:pl-[2rem] tab:max-md:mt-[4rem] ">
      <DetailCard
        titleDetail="Our Services"
        nameDetail="We focus on your beauty"
        descriptionDetail="Lorem ipsum dolor sit amet"
      />
    </div>

    <div className="w-auto max-des:pt-[2rem]  max-des:pr-[2rem] max-des:pl-[2rem] tab:max-md:pt-[5rem] pl-[10.625rem] pr-[10.625rem] relative">
      <div className="flex justify-center">
        <div className="lap:w-1/4 lap:mr-[5.25rem]">
          <ImageCustom
            src={ServiceImage1}
            className="des:w-[18.1875rem] lap:max-des:h-[12.5rem] des:h-[15.875rem]"
          />
        </div>
        <div className="lap:w-3/4">
          <ImageCustom
            src={ServiceImage1_2}
            className="tab:w-[100%]  tab:max-md:h-full md:max-lg:h-full tab:pl-[20%] lap:w-[90%] lap:pl-0 lap:ml-[5.0625rem]"
          />
        </div>
      </div>
      <div className="flex justify-center tab:max-lap:mt-[2rem] lap:mt-[4.25rem] lap:max-des:w-[103%] ">
        <div className="lap:w-3/4  lap:max-des:mr-[6rem]  des:mr-[5.25rem]">
          <ImageCustom
            src={ServiceImage2}
            className="tab:w-[100%] h-full tab:pr-[20%] lap:w-[90%] lap:pr-0 "
          />
        </div>
        <div className="lap:w-1/4">
          <ImageCustom
            src={ServiceImage2_1}
            className="des:w-[18.1875rem]  lap:max-des:w-[13rem]  lap:max-des:h-[13rem] des:h-[16.125rem]"
          />
        </div>
      </div>
    </div>
  </section>
  );
};
