import BgBumbleContact from "@assets/images/BgBumbleContact.png";
import IgContactUs from "@assets/images/igContactUs.png";
import ImageCustom from "@components/ImageCustom";
import FormGetMoreInfor from "@components/FormCustomer/FormGetMoreInfor";

export const MapPageContact = () => {
    return (
        <section className="des:mt-[2.8125rem]">
        <div className="lap:flex flex-row  tab:max-md:pl-[2rem] tab:max-md:pr-[2rem]  ">
          <div className="relative lap:ml-auto">
            <ImageCustom src={BgBumbleContact} className="max-md:hidden w-full lap:right-0" />
            <div className="md:absolute max-md:top-[4rem] max-md:flex max-md:justify-center md:max-lg:top-[10rem] md:max-des:pl-[2rem] lap:top-[7.5rem]  des:left-[9.375rem]">
              <ImageCustom src={IgContactUs} className="max-lg:w-1/2 lap:max-des:w-[80%]"/>
            </div>
          </div>
          <div className=" max-des:pl-[2rem] max-des:pr-[2rem] md:max-lg:pt-[3rem] md:absolute md:max-lg:top-[20rem] md:max-lg:right-[0]   lap:max-des:right-[2rem] des:right-[9.375rem] lap:pt-[2.75rem]">
            <FormGetMoreInfor />  
          </div>
        </div>
        <div className="max-md:pt-[2rem]  w-full lap:absolute lap:top-[78rem] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0602209565677!2d105.78004197503148!3d21.030276280619475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cb69f572b%3A0x3b8fbd089b01207f!2sBac%20Ha%20Software%20(BHSoft)!5e0!3m2!1sen!2s!4v1729482416808!5m2!1sen!2s"
            className="w-full lap:h-[28.125rem]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    );
  };
  