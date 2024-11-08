import ImageCustom from "@components/ImageCustom";
import { ButtonCustom, DetailSection } from "@components/index";
import AboutUs from "@assets/images/about_us.png";
import PicAboutUs from "@assets/images/about_us_pic1.png";
import WaychVideo from "@assets/svgs/play_button.svg?react";

export const AboutUsHomeOne = () => {
  return (
    <section className="max-md:pt-[2rem]  des:pl-[9.375rem]">
    <div className="relative max-tab:justify-items-center  ">
      <ImageCustom
        className="relative right-0 lap:bottom-[12.5rem] w-[100%] pl-[2rem] lap:pl-[30%]  "
        src={AboutUs}
      />
      <div className="max-des:pl-[2rem] max-des:pr-[2rem] w-full absolute max-lap:top-0  lap:top-[10rem] md:max-lg:mt-[15.1875rem]">
        <DetailSection
          textPosition="max-tab:text-center"
          responsive="max-md:justify-center lap:max-des:pb-[1rem]"
          titleSection="About Us"
          nameSection="We are the best beauty clinic"
          descriptionSection="Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Elit, quam suscipit purus donec <br/> amet. Egestas volutpat facilisi eu libero. Nunc, <br/> ipsum ornare mauris sit quam quis enim. Varius <br/>tellus in suspendisse placerat.<br/>
        <br/>
        Id dui erat sed quam tellus in purus. Pellentesque <br/> congue fringilla cras tellus enim."
        />
        <div className="max-md:pt-[1rem] w-full flex max-md:justify-center md:max-des:justify-start des:pt-[3rem]">
          <ButtonCustom
            classContent="md:max-lg:text-[1rem] tab:max-md:text-[1rem] lap:tex-base "
            classButton=" max-tab:py-[0.5rem] max-tab:px-[1rem] tab:max-des:py-[1rem] tab:px-[2.5rem] "
            content="Learn More"
          />
          <button className="max-tab:pl-[0.5rem] tab:max-lg:pl-[3rem] lap:pl-[5rem] ">
            <div className="flex">
              <WaychVideo className="max-tab:w-[27%] md:max-des:w-[30%] lap:h-[3.5rem] " />
              <p className="flex  items-center  sm:text-xs lap:text-base font-semibold  lap:leading-6  lap:tracking-[0.1em]    md:max-des:pl-[0.625rem] ">
                Watch Video
              </p>
            </div>
          </button>
        </div>
      </div>

      <div className=" flex  md:max-des:justify-end  tab:max-md:justify-center absolute tab:max-md:top-[22.875rem] max-tab:top-[27.875rem] md:max-lg:top-[13.875rem] lap:top-[10.875rem] lap:max-des:right-[0.25rem] des:right-[6.25rem]  md:max-lg:right-[0] ">
        <ImageCustom
          src={PicAboutUs}
          className="tab:max-lg:w-[50%] lap:max-des:w-[70%]"
        />
      </div>
    </div>
  </section>
  );
};
