import ImageCustom from "@components/ImageCustom";
import ButtonCustom from "@components/Button/ButtonCustom";
import AboutUs from "@assets/images/ourVision.png";
import DetailSection from "@components/Detail/DetailSection";

export const AboutUsInfor = () => {
  return (
    <section className="mt-[9.875rem] max-des:pr-[2rem] max-des:pl-[2rem] ">
      <div className="md:flex w-full mb-[6.625rem]">
        <div className="max-md:flex max-md:justify-center lap:w-1/2">
          <ImageCustom
            className="lap:max-des:pl-[4rem] des:ml-[9.375rem] des:mt-[9.375rem]"
            src={AboutUs}
          />
        </div>
        <div className="lap:w-1/2">
          <DetailSection
            responsive="max-md:justify-center"
            textPosition="max-md:text-center"
            className="des:mt-[7.6875rem] lap:max-des:pl-[2rem] lap:max-des:pr-[2rem] des:ml-[10.4375rem] mb-[2.5rem]"
            titleSection="About Us"
            nameSection="We are the best beauty clinic"
            descriptionSection="Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Elit, quam suscipit purus donec <br/> amet. Egestas volutpat facilisi eu libero.<br/> <br/> Nunc, ipsum ornare mauris sit quam quis enim.<br/> Varius tellus in suspendisse placerat."
          />
          <div className="max-tab:flex max-tab:justify-center tab:max-md:flex tab:max-md:justify-center lap:max-des:pl-[4rem] des:ml-[10.4375rem]">
            <ButtonCustom
              classButton="py-[1rem] max-md:px-[2rem] md:max-lg:px-[2.5rem]  lap:px-[2.5rem]"
              content="Learn more"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
