import ImageCustom from "@components/ImageCustom";
import Search from "@assets/images/search.png";
import { Card } from "antd";
import CardStyleTwo from "@components/Card/CardStyleTwo";
import bgBlog2 from "@assets/images/bgBlog2.png";
import bgBlog3 from "@assets/images/bgBlog3.png";
import BlogPost from "@assets/images/blog_post.png";
import Face from "@assets/svgs/facebook.svg?react";
import Insta from "@assets/svgs/instagram.svg?react";
import Twitter from "@assets/svgs/twitter.svg?react";
import Lnk from "@assets/svgs/linkin.svg?react";

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


export const TitleBlog = () => {
  return (
    <section className="max-des:pt-[2rem] des:mt-[6.75rem]">
      <div className="flex">
        <div>
          <CardStyleTwo />
        </div>
        <div className="max-des:hidden block ml-[3.75rem] lap:max-des:pr-[4rem]">
          <div className="flex">
            <input
              type="text"
              className="pl-[1.6875rem] w-full h-[4.0625rem] border-none shadow-custom rounded-l-full bg-textWhite caret-white focus:outline-none"
              placeholder="Search here..."
            />
            <div className=" flex justify-center w-[4.75rem] h-[4.0625rem] bg-blackCustom rounded-r-full">
              <button>
                <ImageCustom src={Search} />{" "}
              </button>
            </div>
          </div>

          <div className="mt-[5rem]">
            <Card className="w-[21.875rem] h-[29.4375rem]  rounded-[1.5625rem]  shadow-blog-Category">
              <div className="mt-[2.25rem] ml-[1.625rem] mb-[1.875rem]">
                <p className=" text-[1rem] font-semibold leading-[1.25rem] text-left text-blackCustom">
                  Recent Post
                </p>
              </div>

              {PostData.map((post, index) => (
                <div
                  key={index}
                  className="flex ml-[2.25rem] mb-[1.25rem] min-w-[5.125rem]"
                >
                  <div className="flex mb-[0.625rem]">
                    <ImageCustom
                      className="w-[5.125rem] h-[5.125rem]"
                      src={post.image}
                    />
                    <div className="ml-[1.625rem]">
                      <p className=" text-[0.875rem] font-semibold leading-[1.3125rem] mb-[0.625rem] tracking-[0.1em] text-left text-blink">
                        {post.title}
                      </p>
                      <p className=" text-[0.75rem] font-normal leading-[1.125rem] tracking-[0.1em] text-left text-greyCustom">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>

          <div className="mt-[5rem]">
            <Card className="w-[21.875rem] h-[15.625rem]  rounded-[1.5625rem] shadow-blog-Category">
              <div className="mt-[2.25rem] ml-[1.625rem] mb-[1.875rem]">
                <p className=" text-[1rem] font-semibold leading-[1.25rem] text-left text-blackCustom">
                  Categories
                </p>
              </div>
              <div className="ml-[1.625rem] ">
                {catrgories.map((category, index) => (
                  <div key={index}>
                    <a className="text-sm font-normal leading-5 tracking-wide text-left text-greyCustom">
                      {category}
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-[5rem]">
            <Card className="w-[21.875rem] h-[17.125rem]  rounded-[1.5625rem]  shadow-blog-Category">
              <div className="mt-[2.25rem] ml-[1.625rem] mb-[1.5625rem]">
                <p className=" text-[1rem] font-semibold leading-[1.25rem] text-left text-blackCustom">
                  Cloud Tags
                </p>
              </div>
              <div className="grid grid-cols-3 gap-x-[0.625rem] gap-y-[1.25rem] ml-[1.625rem] mb-[1.25rem]">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex justify-center w-[5.125rem] h-[1.625rem] shadow-custom rounded-[3.125rem] items-center px-[0.625rem]"
                  >
                    <a className="text-sm font-normal leading-5 tracking-wide text-left text-greyCustom">
                      {tag}
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-[5rem]">
            <Card className="w-[21.875rem] h-[15.625rem]  rounded-[1.5625rem]">
              <div className="mt-[2.25rem] ml-[1.625rem] mb-[1.875rem]">
                <p className=" text-[1rem] font-semibold leading-[1.25rem] text-left text-blackCustom">
                  Follow Us
                </p>
              </div>
              <div className="ml-[1.625rem] ">
                <div className="grid grid-cols-4 gap-5">
                  {Social.map((icon, index) => (
                    <div key={index}>
                      <button className="w-[3.0625rem] h-[3.0625rem] rounded-full bg-white flex items-center justify-center shadow-custom">
                        <icon.Icon className="w-[1.5625rem] h-[1.5625rem]" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
