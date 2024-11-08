import Gallery1 from "@assets/images/galleryimage1.png";
import Gallery2 from "@assets/images/galleryimage2.png";
import Gallery3 from "@assets/images/galleryimage3.png";
import Gallery4 from "@assets/images/galleryimage4.png";
import Gallery5 from "@assets/images/galleryimage5.png";
import Gallery6 from "@assets/images/galleryimage6.png";
import Gallery7 from "@assets/images/galleryimage7.png";
import Gallery8 from "@assets/images/galleryimage8.png";
import Gallery9 from "@assets/images/galleryimage9.png";
import ImageCustom from "@components/ImageCustom";

export const OurGalleryPageGallery = () => {
  return (
    <>
      <section className="max-des:pl-[2rem] max-des:pr-[2rem]  max-des:pt-[3rem] md:max-lg:pt-[10rem]  pl-[9.375rem] pr-[9.375rem]  lap:pt-[14.31rem]">
        <div className="max-tab:block lap:flex">
          <div>
            <div className="flex max-lg:justify-center lap:justify-left">
              <p className="tab:max-lg:text-[1.25rem] text-base font-semibold leading-5 text-left text-pinkCustom">
                Our Gallery
              </p>
            </div>
            <div className="flex max-lg:justify-center lap:justify-left mt-[1.25rem] mb-[1.25rem]">
              <p className=" text-4xl	font-semibold leading-9 max-lg:text-center lap:text-left text-blackCustom">
                Check out the collection pictures <br /> from our clinic
              </p>
            </div>
          </div>
          <div className="lap:ml-[11.25rem] flex max-lg:justify-center lap:justify-left items-center">
            <p className="tab:max-md:text-[1rem] md:max-lg:text-[1.25rem] text-base font-normal leading-6 tracking-[0.1em] max-lg:text-center lap:text-left text-greyCustom">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut
              aliquam, purus sit amet <br />
              luctus venenatis
            </p>
          </div>
        </div>
      </section>
      <section className=" mt-[4.6875rem] max-des:pl-[2rem]  max-des:pr-[2rem] pl-[9.375rem] pr-[9.375rem] ">
        <div className="max-tab:grid max-tab:grid-cols-2 max-tab:gap-1 tab:max-md:grid tab:max-md:grid-cols-2 tab:max-md:gap-1 md:max-lg:grid md:max-lg:grid-cols-3 md:max-lg:gap-1 lap:grid lap:grid-cols-3 lap:gap-9">
          <div>
            <ImageCustom className="w-full" src={Gallery1} />
          </div>
          <div>
            <ImageCustom className="w-full" src={Gallery2} />
          </div>
          <div>
            <ImageCustom className="w-full" src={Gallery3} />
          </div>
          <div>
            <ImageCustom className="w-full" src={Gallery4} />
          </div>
          <div>
            <ImageCustom className="w-full" src={Gallery5} />
          </div>
          <div>
            <ImageCustom className="w-full" src={Gallery6} />
          </div>
          <div>
            <ImageCustom className="w-full" src={Gallery7} />
          </div>
          <div>
            <ImageCustom className="w-full" src={Gallery8} />
          </div>
          <div>
            <ImageCustom
              className="max-tab:hidden tab:max-md:hidden w-full"
              src={Gallery9}
            />
          </div>
        </div>
        <div className="pt-[4.125rem]">
          <p className=" md:max-lg:text-[1.25rem] tab:max-md:text-[1rem] text-base font-normal leading-6 tracking-[0.1em] text-left text-greyCustom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            <br />
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor <br /> rhoncus dolor purus non enim,
            <span className=" text-base font-semibold leading-6 tracking-[0.1em] text-left text-blackCustom">
              our teams
            </span>
            .
          </p>
        </div>
      </section>
    </>
  );
};
