import ImageCustom from "@components/ImageCustom";
import ServiceIcon1 from "@assets/images/serviceIcon1.png";
import ServiceIcon2 from "@assets/images/serviceIcon2.png";
import DetailSection from "@components/Detail/DetailSection";
import ServiceIcon3 from "@assets/images/serviceIcon3.png";
import AngleRight from "@assets/svgs/AngleRight.svg?react";

export const CustomerServicesPage  = () => {
  return (
    <section className="max-md:pt-[2rem] max-des:pl-[2rem] max-des:pr-[2rem] md:max-lg:mt-[10rem]  des:pl-[9.375rem]">
    <div className="md:flex w-full lap:mb-[6.25rem]">
      <div className="max-md:flex max-md:justify-center">
        <ImageCustom
          className="max-tab:w-[50%] max-tab:mt-[2rem] lap:mt-[9.375rem]"
          src={ServiceIcon1}
        />
      </div>
      <div className="md:max-lg:w-1/2">
        <DetailSection
          responsive="max-md:justify-center"
          textPosition="max-md:text-center "
          className=" lap:mt-[10.625rem] lap:pl-[12.5rem] mb-[1.25rem] lap:w-full"
          titleSection="Beauty Consultation"
          nameSection="We services beauty <br/>consultation"
          descriptionSection="Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Elit, quam suscipit purus donec <br/> amet. Egestas volutpat facilisi eu libero."
        />
        <a className="flex max-md:justify-center des:ml-[3rem] tab:max-md:text-base lap:text-base font-semibold lap:leading-6 lap:tracking-[0.1em]  lap:max-des:pl-[12.5rem]  des:pl-[9.5rem] text-left text-blackCustom">
          Make an Appointment
          <span className="max-lap:pl-[0.6375rem] lap:pl-[0.9375rem]">
            <AngleRight className=" w-full" />
          </span>
        </a>
      </div>
    </div>

    <div className=" md:flex md:flex-row-reverse w-full relative">
      <div className="md:w-1/2">
        <ImageCustom
          className=" max-tab:mt-[2rem]   lap:mt-[9.375rem] tab:max-lg:w-full tab:max-md:flex tab:max-md:justify-center"
          src={ServiceIcon2}
        />
      </div>
      <div className="md:w-1/2">
        <DetailSection
          responsive="max-md:justify-center"
          textPosition="max-md:text-center"
          className=" lap:mt-[7.6875rem]  mb-[1.25rem] "
          titleSection="Skin Treatements"
          nameSection="Skin care and <br/> treatment by expert"
          descriptionSection="Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Elit, quam suscipit purus donec <br/> amet. Egestas volutpat facilisi eu libero."
        />
        <a className="flex max-tab:justify-center tab:max-md:justify-center tab:max-md:text-base  w-full   lap:text-base font-semibold lap:leading-6 tracking-[0.1em] text-left text-blackCustom">
          Make an Appointment
          <span className="max-lap:pl-[0.6375rem] lap:pl-[0.9375rem]">
            <AngleRight className="w-full" />
          </span>
        </a>
      </div>
    </div>

    <div className="max-md:flex-col max-lap:pb-[2rem] flex w-full des:mb-[9.875rem]">
      <div className="tab:max-md:flex max-md:justify-center">
        <ImageCustom
          className="max-tab:mt-[2rem] lap:mt-[9.375rem] lap:w-[38.3rem]"
          src={ServiceIcon3}
        />
      </div>
      <div>
        <DetailSection
          responsive="max-md:justify-center"
          textPosition="max-md:text-center"
          className="lap:mt-[10.625rem] des:pl-[3rem] mb-[1.25rem] des:w-[100%]"
          titleSection="Beauty Product"
          nameSection="We present quality<br/> beauty products"
          descriptionSection="Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Elit, quam suscipit purus donec <br/> amet. Egestas volutpat facilisi eu libero."
        />
        <a className="flex max-md:justify-center  des:ml-[3rem] tab:text-base font-semibold lap:leading-6 lap:tracking-[0.1em] text-left text-blackCustom">
          Make an Appointment
          <span className="max-lap:pl-[0.6375rem] lap:pl-[0.9375rem]">
            <AngleRight className="w-full" />
          </span>
        </a>
      </div>
    </div>
  </section>
  );
};
