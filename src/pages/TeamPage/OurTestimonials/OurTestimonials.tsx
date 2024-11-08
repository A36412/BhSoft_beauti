import CarouselCustom from "@components/CarouselCustom";
import { DetailCard } from "@components/Detail";

export const OurTestimonials = () => {
  return (
    <section className="max-des:pl-[2rem] max-des:pr-[2rem] max-lg:mt-[1rem] lap:mt-[7.5rem] max-tab:mb-[1rem]">
      <div className="relative">
        <div className="bg-bgRating tab:top-[0rem] tab:left-[0rem] lap:top-[7.5rem] lap:left-[23.75rem]">
          <DetailCard
            titleDetail={"Our Testimonials"}
            nameDetail={"What our customer say"}
            descriptionDetail={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
            }
          />
          <div className="flex max-lg:mt-[1rem] justify-center">
            <CarouselCustom />
          </div>
        </div>
      </div>
    </section>
  );
};
