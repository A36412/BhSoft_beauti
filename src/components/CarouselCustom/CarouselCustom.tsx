import React, { useState } from "react";
import faceIcon from "@assets/images/face_Icon.png";
import vectorRight from "@assets/images/vector_right.png";
import vectorLeft from "@assets/images/vector_left.png";
import { Rate } from "antd";
import ImageCustom from "@components/ImageCustom";

const slides = [
  {
    image: faceIcon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
  },
  {
    image: faceIcon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
  },
  {
    image: faceIcon,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
  },
];

const CarouselCustom = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative tab:w-full lap:w-[50%] h-[50%] overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex flex-col items-center">
            <ImageCustom src={slide.image} className="lap:w-[4.5625rem] lap:h-[4.5625rem]" />

            <p className=" max-tab:pl-[15%] max-tab:pr-[15%]  tab:max-md:pl-[15%] tab:max-md:pr-[15%] md:max-lg:pl-[10%] md:max-lg:pr-[10%] lap:pl-[10%] lap:pr-[10%] w-full mt-[3.125rem] mb-[2.0625rem] max-tab:text-[0.7rem] tab:max-md:text-[0.7rem] text-[0.875rem] font-normal leading-[1.3125rem] tracking-[0.1em] text-center text-greyCustom">
              {slide.description}
            </p>

            <Rate disabled defaultValue={5} />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent text-blackCustom p-2 rounded-full"
        onClick={prevSlide}
      >
        <ImageCustom src={vectorLeft} className="max-tab:w-[75%]" />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent text-blackCustom p-2 rounded-full"
        onClick={nextSlide}
      >
        <ImageCustom src={vectorRight} className="max-tab:w-[75%]" />
      </button>
    </div>
  );
};

export default CarouselCustom;
