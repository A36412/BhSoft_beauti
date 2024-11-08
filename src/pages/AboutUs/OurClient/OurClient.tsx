import ImageCustom from "@components/ImageCustom";
import LogoBlizt from "@assets/svgs/LogoBlizt.svg";
import LogoKZ from "@assets/svgs/LogoKZ.svg";
import LogoCircle from "@assets/svgs/LogoCircle.svg";
import LogoGeogre from "@assets/svgs/LogoGeogre.svg";
import LogoAmanda from "@assets/svgs/LogoAmanda.svg";

const logoSources = [LogoBlizt, LogoKZ, LogoCircle, LogoGeogre, LogoAmanda];

export const OurClientAboutUs = () => {
  return (
    <section className="max-des:pt-[2rem] max-des:pl-[2rem] max-des:pr-[2rem] tab:max-md:pt-[2rem] des:pt-[7.6875rem] relative">
      <div className="max-tab:pb-[2rem] des:pb-20">
        <div className=" flex justify-center">
          <p className=" text-base font-semibold leading-5 text-center text-pinkCustom">
            Our Clients
          </p>
        </div>
        <div className=" flex justify-center mt-5 mb-5">
          <p className=" max-tab:text-[1.25rem] text-4xl	font-semibold leading-5 max-tab:leading-6 text-center text-blackCustom">
            Well-known agencies
          </p>
        </div>
        <div className=" flex justify-center">
          <p className=" text-base font-normal leading-6 tracking-wide text-center text-greyCustom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
      <div className="max-des:pt-[1rem] des:pt-[5.875rem] lap:pl-[9.375rem] lap:pr-[9.375rem]">
        <div className="max-tab:grid max-tab:grid-cols-3 flex flex-row justify-center">
          {logoSources.map((logoSrc, index) => (
            <ImageCustom
              key={index}
              className="tab:w-[20%] lap:mr-[3.3125rem]"
              src={logoSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
