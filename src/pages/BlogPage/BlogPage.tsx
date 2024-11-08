import { Card } from "antd";
import { Pagination } from "antd";

import bgBlog from "@assets/images/bgBlog.png";
import bgBlog2 from "@assets/images/bgBlog2.png";
import bgBlog3 from "@assets/images/bgBlog3.png";
import BlogPost from "@assets/images/blog_post.png";
import Search from "@assets/images/search.png";
import Face from "@assets/svgs/facebook.svg?react";
import Insta from "@assets/svgs/instagram.svg?react";
import Twitter from "@assets/svgs/twitter.svg?react";
import Lnk from "@assets/svgs/linkin.svg?react";
import ImageCustom from "@components/ImageCustom";
import CardStyleTwo from "@components/Card/CardStyleTwo";
import { useState } from "react";
import { TitleBlog } from "./TitleBlog/TitleBlog";
import { ContentPageBlog } from "./ContentPageBlog/ContentPageBlog";

const PostData = [
  {
    image: BlogPost,
    title: "01 jan 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    image: bgBlog2,
    title: "01 jan 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    image: bgBlog3,
    title: "01 jan 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
];

const Social = [
  {
    Icon: Face,
  },
  {
    Icon: Insta,
  },
  {
    Icon: Twitter,
  },

  {
    Icon: Lnk,
  },
];

const tags = [
  "beauty",
  "cute",
  "skin",
  "glow",
  "style",
  "clinic",
  "style",
  "clinic",
  "cute",
];

const catrgories = ["Consultation", "Beauty", "Treatments", "News"];

const BlogPage: React.FC = () => {
  const [isRightOpen, setIsRightOpen] = useState(false);

  const toggleRightNavBar = () => {
    setIsRightOpen(!isRightOpen);
  };
  return (
    <>
      {!isRightOpen && (
        <button
          className=" lap:hidden px-[1rem] py-[0.5rem] bg-blackCustom text-white rounded-md fixed md:max-lg:top-[8rem] md:max-lg:right-[3rem]  max-md:right-4  z-50"
          onClick={toggleRightNavBar}
        >
          Category
        </button>
      )}


      <ContentPageBlog />
      <TitleBlog />


      {isRightOpen && (
        <div className="fixed top-0 right-0 h-full w-[21.875rem] p-4 bg-white overflow-y-auto z-50">
          <button
            onClick={toggleRightNavBar}
            className="absolute top-4 right-4 text-xl text-gray-700"
          >
            ✕
          </button>

          <div className="mt-[0rem]">
            <div className="mt-[2.25rem] ml-[1.625rem] mb-[0.875rem]">
              <p className=" text-[1rem] font-semibold leading-[1.25rem] text-left text-blackCustom">
                Recent Post
              </p>
            </div>
            {PostData.map((post, index) => (
              <div
                key={index}
                className="flex ml-[2.25rem] mb-[1.25rem] min-w-[5.125rem]"
              >
                <ImageCustom
                  className="w-[3.125rem] h-[3.125rem]"
                  src={post.image}
                />
                <div className="ml-[1.625rem]">
                  <p className=" text-[0.675rem] font-semibold leading-[1.3125rem] mb-[0.625rem] tracking-[0.1em] text-left text-blink">
                    {post.title}
                  </p>
                  <p className=" text-[0.575rem] font-normal leading-[1.125rem] tracking-[0.1em] text-left text-greyCustom">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[0rem]">
            <div className="mt-[2.25rem] ml-[1.625rem] mb-[0.875rem]">
              <p className=" text-[1rem] font-semibold leading-[1.25rem] text-left text-blackCustom">
                Categories
              </p>
            </div>
            <div className="ml-[1.625rem] grid grid-cols-2">
              {["Consultation", "Beauty", "Treatments", "News"].map(
                (category, idx) => (
                  <div key={idx}>
                    <a className=" text-sm font-normal leading-5 tracking-wide text-left text-greyCustom">
                      {category}
                    </a>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-[0rem]">
            <div className="mt-[0.25rem] ml-[1.625rem] mb-[0.5625rem]">
              <p className=" text-[1rem] font-semibold leading-[1.25rem] text-left text-blackCustom">
                Cloud Tags
              </p>
            </div>
            <div className="ml-[1.625rem] mb-[1.25rem] flex flex-wrap gap-2">
              {["beauty", "cute", "skin", "glow", "style", "clinic"].map(
                (tag) => (
                  <div
                    key={tag}
                    className="flex justify-center w-[5.125rem] h-[1.625rem] shadow-custom rounded-[3.125rem] items-center"
                  >
                    <a className=" text-sm font-normal leading-5 tracking-wide text-left text-greyCustom">
                      {tag}
                    </a>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-[0rem]">
            <div className="mt-[0.25rem] ml-[1.625rem] mb-[0.875rem]">
              <p className=" text-[1rem] font-semibold leading-[1.25rem] text-left text-blackCustom">
                Follow Us
              </p>
            </div>
            <div className="ml-[1.625rem] flex space-x-4">
              {Social.map((icon, index) => (
                <icon.Icon tabIndex={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
