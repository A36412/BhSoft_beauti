import ImageCustom from "@components/ImageCustom";
import { DetailSection } from "@components/Detail";
import { ButtonCustom } from "@components/index";
import Bgbumblegallery from "@assets/images/bgbumblegallery.png";

export const GetInQuotaGallry = () => {
  return (
    <section className="max-des:pl-[2rem] max-tab:mt-[2rem] max-tab:mb-[2rem]">
    <div className="lap:flex w-full relative">
      <div className="tab:mt-[4.5rem] lap:mt-[7.5rem] lap:max-des:pl-[2rem] des:pl-[9.375rem]">
        <DetailSection
          responsive="max-lg:justify-center"
          textPosition="max-lg:text-center"
          titleSection="Get The Quota"
          nameSection="Want to be handled by our<br/> professional team immediately?"
          descriptionSection="Id dui erat sed quam tellus in purus. Pellentesque congue <br/> fringilla cras tellus enim."
        />
      </div>

      <div className="relative flex flex-1 items-center justify-center">
        <div className="absolute right-0 top-0">
          <ImageCustom
            src={Bgbumblegallery}
            className="max-lg:hidden lap:block"
          />
        </div>

        <div className="relative top-[1.375rem] ">
          <ButtonCustom
            classButton="max-lg:py-[0.5rem] max-lg:px-[2rem] lap:py-[1rem] lap:px-[2.5rem] "
            content="Make an Appointment"
          />
        </div>
      </div>
    </div>
  </section>
  );
};
