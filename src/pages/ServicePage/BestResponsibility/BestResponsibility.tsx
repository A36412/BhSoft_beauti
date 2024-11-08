import Play_Style2 from "@assets/svgs/play_Style2.svg?react";

export const BestResponsibility = () => {
  return (
    <section className="relative bg-bgservice  bg-cover">
      <div
        className="flex max-des:pt-[2rem] max-des:pb-[2rem] max-des:pl-[2rem] max-des:pr-[2rem]
       des:pt-[11.375rem] des:pb-[11.375rem] des:pl-[9.375rem] des:pr-[13.188rem] w-full justify-between"
      >
        <div>
          <div className="flex justify-left lap:pt-5 lap:pb-5">
            <p className=" max-tab:text-[0.8rem] tab:max-md:text-[1.5rem] md:max-lg:text-[2rem] lap:text-4xl font-semibold lap:leading-9 text-left text-textWhite">
              Best responsibility and service
              <br /> for our customers
            </p>
            ``
          </div>
          <div className="flex justify-left">
            <p className=" max-tab:text-[0.5rem] tab:max-md:text-[1rem] md:max-lg:text-[1rem] lap:text-base font-normal lap:leading-6 lap:tracking-[0.1em] text-left text-textDesSologan">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <Play_Style2 className="max-tab:w-[50%] max-tab:h-[50%]  lap:w-full tab:w-1/2 hover:cursor-pointer" />
          <span className="max-tab:text-[0.75rem] w-full lap:flex items-center  text-base font-semibold leading-9 text-left text-textWhite">
            Treatments Videos
          </span>
        </div>
      </div>
    </section>
  );
};
