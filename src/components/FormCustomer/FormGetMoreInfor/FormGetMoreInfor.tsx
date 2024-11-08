import ButtonCustom from "@components/Button/ButtonCustom";

const FormGetMoreInfor: React.FC = () => {
  return (
    <>
      <form className="tab:max-md:pt-[1rem] lap:mt-0">
        <div className="lap:flex max-lg:pb-[1rem] pb-[2.4375rem] w-full">
          <div className="flex max-lap:pb-[1rem]  w-full justify-start">
            <input
              className="max-lap:w-[100%] max-lap:h-[3rem] gap-0 rounded-[0.9375rem] border pl-[1.5rem]"
              type="text"
              placeholder="Fisrt name"
            />
          </div>
          <div className="flex w-full justify-end ">
            <input
              className="max-lap:w-[100%]  max-lap:h-[3rem] lap:w-[15.125rem] lap:h-[3.84875rem] gap-0 rounded-[0.9375rem] border pl-[1.5rem]"
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="max-lap:pb-[1rem] pb-[2.4375rem]">
          <input
            className="max-lap:w-[100%] max-lap:h-[3rem]  lap:w-[32.5rem] lap:h-[3.84875rem] gap-0 rounded-[0.9375rem] border  pl-[1.5rem]"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="max-lap:pb-[1rem]  pb-[2.4375rem]">
          <input
            placeholder="Message"
            type="text"
            className="max-lap:w-[100%] max-lap:h-[3rem]  lap:w-[32.5rem] lap:h-[3.84875rem] gap-0 rounded-[0.9375rem]  border-[1px] pl-[1.5rem]"
          />
        </div>
        <div className="max-lap:pb-[1rem] pb-[2.4375rem]">
          <textarea
            placeholder="Your inquiry here"
            className="max-lap:w-[100%]   w-[32.5rem] h-[15rem] gap-0 rounded-[0.9375rem]  border-[1px] pl-[1.5rem] pt-[1.5625rem]"
          />
        </div>
        <div className="max-md:flex max-md:justify-center  ">
          <ButtonCustom
            classButton=" max-tab:px-[1.5rem] max-tab:py-[0.5rem] tab:px-[2.5rem] tab:py-[1rem]  lap:px-[2.5rem] "
            content="Send Message"
          />
        </div>
      </form>
    </>
  );
};

export default FormGetMoreInfor;
