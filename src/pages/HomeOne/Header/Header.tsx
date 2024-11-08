import ButtonCustom from "@components/Button/ButtonCustom";

export const HeaderHomeOne = () => {
  return (
    <div
      className="absolute max-des:pl-[2rem] max-tab:top-[4rem] tab:max-md:top-[6.25rem] 
                  md:max-lg:top-[10.5rem]
                  lap:max-des:top-[15rem]
                  des:top-[19.75rem] des:left-[11.8125rem]"
    >
      <p className=" max-tab:text-[1rem] tab:max-md:text-[1.5rem] md:max-lg:text-4xl lap:text-5xl font-semibold md:max-lg:leading-[2.5rem] text-left">
        Clinic & beauty <br /> consultant
      </p>
      <p className=" max-tab:top-[0] max-tab:text-[0.6rem]  tab:max-md:text-[0.8rem]  md:max-lg:text-[1rem] lap:text-base lap:leading-6 lap:tracking-wide font-medium md:max-lg:leading-[1.5rem] md:max-lg:tracking-[0.1em] text-left text-blackCustom">
        It is a long established fact that a reader will be <br />
        by the readable content of a page.
      </p>
      <div className="md:max-lg:mt-[1.75rem] lap:mt-[1.875rem]">
        <ButtonCustom
          classContent="max-tab:text-[0.5rem] tab:max-lg:text-[1rem] "
          classButton=" max-tab:py-[0.25rem] max-tab:px-[0.5rem] md:max-lg:py-[1rem] md:max-lg:px-[2.5rem] tab:max-md:py-[0.5rem] tab:max-md:px-[1rem] lap:py-[1rem] lap:px-[2.5rem]"
          content="More Details"
        />
      </div>
    </div>
  );
};
