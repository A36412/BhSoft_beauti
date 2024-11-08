import ImageCustom from "@components/ImageCustom";
import Play_Style2 from "@assets/svgs/play_Style2.svg?react";
import InforamtionBg from "@assets/images/information_page_bg.png";

export const HeaderInfor = () => {
  return (
    <section className=" w-full">
      <ImageCustom className="w-full bg-cover" src={InforamtionBg} />
      <div className="absolute max-tab:top-[1rem] max-des:pl-[2rem] tab:max-md:top-[6rem]  md:max-lg:top-[15rem] lap:top-[19.1875rem] des:left-[9.375rem]">
        <p className=" max-tab:text-lg md:max-lg:text-4xl lap:text-5xl font-semibold max-tab:leading-[1rem] tab:max-md:leading-[1rem] leading-[2.5rem] mb-[0.625rem] text-left text-textWhite">
          Your beauty center <br /> place
        </p>
        <p className=" max-tab:w-[60%] max-tab:text-[0.8rem] w-fit md:max-lg:text-[1rem] lap:text-base font-medium  max-lg:leading-[1rem]  lap:leading-[1.5rem] lap:tracking-[0.1em] text-left text-blueCustom">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
          Commodo, massa pellentesque arcu fusce et <br /> magna consequat neque
          vitae lobortis.
        </p>
        <div className="tab:mt-[1rem] lap:mt-[1.75rem]">
          <button className="bg-transparent gap-0 rounded-[3.125rem] border-solid border tab:max-md:py-[0.5rem] max-tab:py-[0.25rem] max-md:px-[1.5rem] max-tab:mt-[1rem] lap:py-[0.875rem] lap:px-[1.875rem] md:max-lg:py-[1rem] md:max-lg:px-[2.5rem]  mb-[0.46875rem]">
            <p className=" max-tab:text-[0.8rem] lap:text-[1rem] font-semibold leading-[1.5rem] tracking-[0.1em] text-white">
              More Details
            </p>
          </button>
        </div>
      </div>
      <div className=" lap:flex absolute max-tab:top-0  max-md:right-0 md:max-lg:top-[10rem] md:max-lg:right-[3rem]  max-tab:mt-[2rem] tab:top-[6rem] lap:top-[22.75rem] lap:max-des:right-[7rem] des:right-[18.4375rem]">
        <button className="max-lg:flex  max-tab:justify-center">
          <Play_Style2 className="max-md:w-1/2  md:w-full " />
        </button>
        <span className="max-tab:hidden flex items-center md:max-lg:justify-center max-tab:justify-center  text-base font-semibold leading-9 text-left text-textWhite">
          Tour Video
        </span>
      </div>
    </section>
  );
};
