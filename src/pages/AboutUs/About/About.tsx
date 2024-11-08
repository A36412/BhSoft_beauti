import Play from "@assets/images/play_btn_fake.png";
import { DetailSection } from "@components/Detail";
import ImageCustom from "@components/ImageCustom";

export const AboutPageAbout = () => {
  return (
    <section className="relative z-10 max-des:pl-[2rem] max-des:pr-[2rem]  max-md:mt-[2rem]  md:max-lg:pt-[10rem]  tab:mb-[4.5rem] lap:pt-[14.3125rem] pl-[9.375rem] pr-[9.375rem] lap:mb-[8.5rem]">
    <DetailSection
      responsive="max-lap:justify-center"
      textPosition="max-lap:text-center"
      titleSection={"About"}
      nameSection={
        "We are a leading beauty clinic that has <br/> been around since 2002"
      }
      descriptionSection={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br/> purus sit amet luctus venenatis"
      }
    />
    <div className="bg-fakeVideo rounded-[3.125rem] bg-cover max-des:mt-[2rem] des:mt-[3.75rem]">
      <div className="flex w-full justify-center  max-des:pt-[2rem] max-des:pb-[2rem] pt-[14.125rem] pb-[14.125rem] hover:cursor-pointer">
        <ImageCustom src={Play} />
      </div>
    </div>
  </section>

  );
};
