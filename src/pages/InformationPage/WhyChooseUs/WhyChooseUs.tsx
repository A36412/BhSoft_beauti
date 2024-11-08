import Doctor from "@assets/svgs/doctor.svg?react";
import Earth from "@assets/svgs/earth.svg?react";
import HandShake from "@assets/svgs/handshake.svg?react";
import Brotherhood from "@assets/svgs/brotherhood.svg?react";

export const WhyChooseUs = () => {
  return (
    <section className="md:max-lg:mt-[11rem] mt-[5.1875rem] bg-bgInfor bg-cover">
      <div
        className="max-md:block flex max-tab:pt-[2rem] max-tab:pb-[2rem]
        tab:max-md:pt-[4rem] tab:max-md:pb-[4rem]
        md:max-lg:pt-[6rem] md:max-lg:pb-[6rem]
        lap:max-des:pt-[8rem] lap:max-des:pb-[8rem] 
        des:pt-[18.125rem] des:pb-[16.25rem]"
      >
        <div className="max-des:pl-[2rem]  des:pr-[8.75rem] des:pl-[9.375rem]">
          <div className="flex max-md:justify-center justify-left des:pb-[1rem] w-full">
            <p className=" max-tab:text-sm tab:max-md:text-xl  md:text-4xl font-semibold leading-9 text-left text-textWhite">
              Why choosing us?
            </p>
          </div>
          <div className="flex justify-left  max-md:justify-center">
            <p className=" max-tab:text-[0.5rem] max-tab:leading-[1rem] md:text-base tab:max-md:text-sm  font-normal lap:leading-6 lap:tracking-[0.1em] text-left text-blueCustom">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut
              aliquam, purus sit amet luctus <br /> venenatis.
            </p>
          </div>
        </div>
        <div className="des:pr-[11.25rem] md:pr-[3rem] ">
          <div className=" flex max-md:justify-center lap:mb-[2.688rem]">
            <div className="flex lap:max-des:pr-[4rem] des:pr-[4.5rem]">
              <HandShake className="max-lg:w-[50%] w-full h-full" />
              <div className="block">
                <p className=" max-tab:text-[0.5rem] max-tab:leading-[1rem] lap:text-4xl font-semibold lap:leading-[2.8125rem] text-left text-textWhite">
                  100%
                </p>
                <p className="  max-tab:text-[0.5rem] max-tab:leading-[1rem] lap:text-base font-semibold lap:leading-5 text-left text-blink lap:w-[7.625rem]">
                  trusted clinic
                </p>
              </div>
            </div>
            <div className="flex">
              <Brotherhood className="max-lg:w-[50%] w-full h-full" />
              <div className="block">
                <p className=" max-tab:text-[0.5rem] max-tab:leading-[1rem] lap:text-4xl font-semibold lap:leading-[2.8125rem] text-left text-textWhite">
                  99%
                </p>
                <p className=" max-tab:text-[0.5rem] max-tab:leading-[1rem] lap:text-base font-semibold lap:leading-5 text-left text-blueCustom lap:w-[7.625rem]">
                  Customer love
                </p>
              </div>
            </div>
          </div>
          <div className="flex x max-md:justify-center">
            <div className=" flex">
              <Earth className="max-lg:w-[50%] w-full h-full" />
              <div className="block">
                <p className=" max-tab:text-[0.5rem] lap:text-4xl font-semibold lap:leading-[2.8125rem] text-left text-textWhite">
                  75+
                </p>
                <p className=" max-tab:text-[0.5rem] lap:text-base font-semibold leading-5 text-left text-blueCustom lap:w-[7.625rem]">
                  asian branch
                </p>
              </div>
            </div>
            <div className="flex  des:pl-[3rem] lap:max-des:pl-[4rem]">
              <Doctor className="max-lg:w-[50%] w-full h-full" />
              <div className="block ">
                <p className="  max-tab:w-full max-tab:text-[0.5rem] max-tab:leading-[1rem] lap:text-4xl font-semibold lap:leading-[2.8125rem] text-left text-textWhite">
                  1.200+
                </p>
                <p className=" max-tab:w-full max-tab:text-[0.5rem] max-tab:leading-[1rem]  lap:text-base font-semibold lap:leading-5 text-left text-blueCustom lap:w-[7.625rem]">
                  licensed worker
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
