import ImageCustom from "@components/ImageCustom";
import bgBlog from "@assets/images/bgBlog.png";


export const ContentPageBlog = () => {
  return (
    <section className="max-md:pt-[4rem] lap:pt-[8.75rem] md:max-lg:pt-[6rem]">
      <div className="relative">
        <ImageCustom className="bg-cover w-full" src={bgBlog} />
        <div className="absolute max-md:pl-[4rem]   top-1/2 tab:left-[2.3125rem] lap:pl-[9.3125rem]  flex des:w-[71.375rem] mb-20">
          <div className="flex justify-left">
            <p className=" lap:text-4xl font-semibold lap:leading-9 text-center text-textWhite">
              Blog
            </p>
          </div>
          <div className=" flex max-tab:justify-end max-tab:pl-[10rem] ">
            <p className=" lap:text-base tab:ml-[14rem] lap:max-des:pl-[23rem] des:pl-[32rem] font-normal lap:leading-6 tracking-wide  text-textDesSologan">
              Home • Blog
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
