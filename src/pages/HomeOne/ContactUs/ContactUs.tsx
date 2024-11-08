import { DetailSection, FormGetMoreInfor, ImageCustom } from "@components/index";
import BgContactUs from "@assets/images/bgContactUs.png";
import IgContactUs from "@assets/images/igContactUs.png";

export const ContactUsHomeOne = () => {
  return (
    <section className="lap:max-des:pr-[4rem] des:pr-[9.375rem]">
      <div className="max-md:block md:flex ">
        <div className="relative md:max-lg:w-1/2">
          <ImageCustom src={BgContactUs} className="lap:max-w-[200%]" />
          <div className="absolute max-tab:w-full  tab:max-md:w-full max-tab:flex max-tab:justify-center tab:max-md:flex tab:max-md:justify-center max-tab:top-[40.625%] tab:max-md:top-[63.625%] md:max-tab:pl-[3rem] lap:max-des:pl-[4rem] lap:top-[21.875rem] des:pl-[9.375rem]">
            <ImageCustom
              className="max-tab:w-[40%] tab:max-md:w-[50%] md:max-lg:w-[85%] lap:w-full "
              src={IgContactUs}
            />
          </div>
        </div>
        <div className="max-des:pl-[2rem] max-des:pr-[2rem]  tab:max-md:pt-[6.25rem] md:max-lap:pt-[10.625rem] des:pt-[9rem] relative">
          <DetailSection
            textPosition="max-tab:text-center"
            titleSection="Contact Us"
            nameSection="Send your inquiry to<br/> our expert team"
            descriptionSection="Lorem ipsum dolor sit amet nulla turapis tellus."
            className="max-md:hidden  z-20"
          />

          <DetailSection
            textPosition="max-md:text-center  "
            titleSection="Contact Us"
            nameSection="Send your inquiry to our expert team"
            descriptionSection="Lorem ipsum dolor sit amet nulla turapis tellus."
            responsive="max-md:justify-center"
            className="md:hidden z-20"
          />
          <div className="max-tab:pb-[1rem] max-tab:pt-[1rem]  lap:mt-[2.5rem] lap:relative z-20">
            <FormGetMoreInfor />
          </div>
        </div>
      </div>
    </section>
  );
};
