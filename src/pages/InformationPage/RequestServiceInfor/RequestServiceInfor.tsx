import ImageCustom from "@components/ImageCustom";
import Phone from "@assets/images/phone_value.png";

export const RequestServiceInfor = () => {
  return (
    <section className="bg-bgElement lap:max-des:pt-[5.625rem] des:pl-[11.875rem] des:pt-[10.625rem] des:pb-[7.5rem] bg-no-repeat	 max-tab:mb-[3rem] max-des:pl-[2rem] max-des:pr-[2rem] tab:max-md:mb-[3rem] md:max-lg:mt-[2rem]">
      <div className="max-tab:block md:max-lg:flex lap:flex">
        <div className="md:max-lg:w-1/2">
          <p className=" max-tab:text-[1.25rem] max-tab:text-center  tab:max-md:text-[1.5rem] tab:max-md:text-center lap:text-4xl font-semibold leading-[2.8125rem] lap:mb-[1.25rem] text-left text-blackCustom">
            Request call services
          </p>
          <p className=" max-tab:text-[0.75rem] max-tab:text-center tab:max-md:text-[0.75rem] tab:max-md:text-center  lap:text-base font-normal leading-6 tracking-[0.1em] text-left text-greyCustom">
            Lorem ipsum dolor sit amet, consect <br /> adipiscing elit{" "}
            <span className=" text-base font-semibold leading-6 tracking-[0.1em] text-left text-blackCustom">
              Contact Us.
            </span>
          </p>
        </div>
        <div className="lap:ml-[5.625rem] max-tab:mt-[2rem] tab:max-md:mt-[2rem] md:max-lg:w-1/2">
          <div className="flex">
            <input
              type="text"
              className="pl-[1.6875rem] w-[34.0625rem] h-[4.0625rem] border border-searchCustom text-placehoder gap-0 rounded-l-full caret-white focus:outline-none"
              placeholder="Insert your phone number here ..."
            />
            <div className="flex items-center justify-center w-[7.0625rem] h-[4.0625rem] bg-blink rounded-r-full">
              <button>
                <ImageCustom
                  src={Phone}
                  className="max-tab:w-[75%] tab:max-md:w-[75%] md:max-lg:w-[75%]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
