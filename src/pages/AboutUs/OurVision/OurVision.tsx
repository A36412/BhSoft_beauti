import ImageCustom from "@components/ImageCustom";
import { DetailSection } from "@components/Detail";
import OurVision from "@assets/images/ourVision.png";
import OurVision2 from "@assets/images/ourVision2.png";
import BgOurVision from "@assets/images/bgOurVision.png";
export const OurVisionAboutUs = () => {
  return (
    <section className="max-des:pr-[2rem] md:max-lg:pt-[3rem]">
      <div className="w-full relative">
        <ImageCustom
          className="max-lap:hidden absolute  left-0 top-[13.125rem]"
          src={BgOurVision}
        />
        <div className="w-full relative d mb-[6.625rem]">
          <div className="max-des:pl-[2rem]  md:max-lg:flex lap:grid lap:grid-cols-2">
            <div className="lap:pt-0">
              <ImageCustom
                className="des:pl-[12.8125rem] lap:mt-[9.375rem] tab:max-md:mx-auto relative"
                src={OurVision}
              />
            </div>
            <div>
              <DetailSection
                responsive="max-md:justify-center"
                textPosition="max-md:text-center"
                className="max-tab:mt-[1rem] lap:mt-[7.6875rem] lap:ml-[10.5rem]"
                titleSection="Our Vision"
                nameSection="Be the best and go <br/> international"
                descriptionSection="Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Elit, quam suscipit purus donec <br/> amet. Egestas volutpat facilisi eu libero.<br/> <br/> Nunc, ipsum ornare mauris sit quam quis enim.<br/> Varius tellus in suspendisse placerat."
              />
            </div>
          </div>
        </div>
        <div className="max-des:pl-[2rem] max-lap:flex max-md:flex-col-reverse  lap:grid lap:grid-cols-2 w-full relative">
          <div className="">
            <DetailSection
              responsive="max-md:justify-center "
              textPosition="max-md:text-center "
              className="des:ml-[9.5rem]"
              titleSection="Our Vision"
              nameSection="Special & premium service <br/>to any clients"
              descriptionSection="Lorem ipsum dolor sit amet, consectetur <br/> a dipiscing elit. Elit, quam suscipit purus donec <br/> amet. Egestas volutpat facilisi eu libero.<br/> <br/> Nunc, ipsum ornare mauris sit quam quis enim.<br/> Varius tellus in suspendisse placerat."
            />
          </div>
          <div className="tab:max-md:flex tab:max-md:justify-center">
            <ImageCustom
              className="lap:pl-[8.125rem] tab:max-md:mx-auto"
              src={OurVision2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
