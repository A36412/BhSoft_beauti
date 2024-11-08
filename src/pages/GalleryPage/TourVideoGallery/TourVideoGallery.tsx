import IconButton from "@assets/svgs/Play_Style2.svg?react";

export const TourVideoGallery = () => {
  return (
    <section className="bg-bgGallery bg-cover max-des:mt-[2rem] des:mt-[7.813rem]">
    <div className="relative max-des:pt-[2rem] max-des:pb-[2rem] max-tab:pl-[2rem] max-tab:pr-[2rem] pt-[10.625rem] pb-[10.625rem]">
      <div className="flex justify-center lap:mt-[1.25rem] lap:mb-[1.25rem]">
        <p className=" max-md:text-base lap:text-4xl font-semibold lap:leading-9 text-center text-textWhite">
          Watch the video tour
        </p>
      </div>
      <div className="flex justify-center">
        <p className=" max-md:text-xs lap:text-base font-normal leading-6 tracking-[0.1em] text-center text-textDesSologan">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />{" "}
          aliquam, purus sit amet luctus venenatis
        </p>
      </div>
      <div className="flex justify-center items-center lap:pt-[2.5625rem]">
        <IconButton className="max-tab:w-[15%] tab:max-lg:w-[20%] lap:w-[7.938rem] lap:h-[7.938rem] hover:cursor-pointer" />
      </div>
    </div>
  </section>
  );
};
