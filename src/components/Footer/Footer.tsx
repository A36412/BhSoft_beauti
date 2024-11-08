import slideFooter from "@assets/images/footer_slide.png";
import logo from "@assets/images/footer_logo.png";
import Caret from "@assets/images/caret_right.png";
import Face from "@assets/images/face_light.png";
import Ins from "@assets/images/ins_light.png";
import Lnk from "@assets/images/lnk_light.png";
import Ytb from "@assets/images/ytb_light.png";
import Twi from "@assets/images/twi_light.png";
import { Link } from "react-router-dom";
import ImageCustom from "@components/ImageCustom";

const Footer: React.FC = () => {
  return (
    <>
      <section>
        <div className="bg-footer-texture relative w-full">
          <ImageCustom
            className="bg-cover w-full"
            src={slideFooter}
            alt="footer slide"
          />
          <div className="absolute  min-h-[1.75rem] max-tab:top-[2rem] tab:top-[3.125rem] tab:left-[0.125rem] md:max-lg:top-[5rem] lap:max-des:top-[9rem] des:top-[15.0625rem] lap:left-[9.375rem] flex">
            <div className="max-tab:pl-[1rem] tab:max-lg:pl-[1rem]  ">
              <ImageCustom
                className="max-tab:w-[40%] tab:w-1/2 lap:w-64"
                src={logo}
              />
              <div className="flex max-tab:w-full  tab:w-full md:max-lg:pl-[2rem] tab:ml-[0%] tab:mt-[0.3125rem] lap:ml-[1.9375rem] lap:mt-[1.875rem]">
                <p className=" max-tab:text-[50%] tab:text-[50%]  md:max-lg:text-[100%] lap:text-base font-bold lap:leading-6 lap:tracking-[0.1em] text-left text-footerTextCustom">
                  Beautice
                </p>
                <p className=" max-tab:text-[50%] tab:text-[50%] md:max-lg:text-[100%] lap:text-base font-normal lap:leading-6 lap:tracking-[0.1em] text-left text-footerTextCustom">
                  is a Beauty Clinic WordPress Theme.
                </p>
              </div>
              <div className="tab:ml-[0%] tab:mt-[0.3125rem] lap:ml-[1.9375rem] md:max-lg:pl-[2rem]  lap:mt-[1.625rem] max-w-full">
                <p className=" max-tab:text-[50%] tab:text-[50%] md:max-lg:text-[100%] lap:text-base italic lap:leading-6 lap:tracking-[0.1em] text-left text-footerTextCustom">
                  Baker Steet 101, NY, United States.
                </p>
                <div className="flex">
                  <p className="w-1/2  max-tab:text-[50%] tab:text-[50%] md:max-lg:text-[100%] lap:text-base italic lap:leading-6 lap:tracking-[0.1em] text-left text-footerTextCustom">
                    +521 569 8966.
                  </p>
                  <p className="w-1/2  max-tab:text-[50%] tab:text-[50%] md:max-lg:text-[100%] lap:text-base italic lap:leading-6 lap:tracking-[0.1em] text-left text-footerTextCustom">
                    mail@company.com.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 l md:max-lg:gap-x-5 md:max-lg:pl-[5rem]">
              <div className=" tab:mt-[1%] lap:max-des:ml-[4rem] lap:ml-[9.375rem] lap:mt-[0.3125rem]">
                <p className=" font-semibold max-tab:text-[50%] tab:text-[50%] md:max-lg:text-[100%] lap:text-lg lap:leading-6 lap:tracking-[0.1em] text-left text-white  lap:mb-[1.5rem]">
                  Pages
                </p>
                <ul className="max-md:grid max-md:grid-cols-5 max-md:gap-x-1  FF max-tab:text-[50%] tab:text-[50%] md:max-lg:text-[100%] lap:text-base lap:leading-6 lap:tracking-[0.1em] text-left text-footerTextCustom">
                  <li className="tab:mb-[10%] lap:mb-[0.6875rem]">
                    <Link to="/" className="flex items-center">
                      <span className="lap:mr-[0.5rem]">
                        <ImageCustom
                          src={Caret}
                          className="max-md:hidden "
                        />
                      </span>
                      Home
                    </Link>
                  </li>
                  <li className="tab:mb-[10%] lap:mb-[0.6875rem]">
                    <Link to="about" className="flex items-center">
                      <span className="lap:mr-[0.5rem]">
                        <ImageCustom
                          src={Caret}
                          className="max-md:hidden"
                        />
                      </span>
                      About
                    </Link>
                  </li>
                  <li className="tab:mb-[10%] lap:mb-[0.6875rem]">
                    <Link to="/services" className="flex items-center">
                      <span className="lap:mr-[0.5rem]">
                        <ImageCustom
                          src={Caret}
                          className="max-md:hidden"
                        />
                      </span>
                      Services
                    </Link>
                  </li>
                  <li className="tab:mb-[10%] lap:mb-[0.6875rem]">
                    <Link to="/gallery" className="flex items-center">
                      <span className="lap:mr-[0.5rem]">
                        <ImageCustom
                          src={Caret}
                          className="max-md:hidden"
                        />
                      </span>
                      Gallery
                    </Link>
                  </li>
                  <li className="tab:mb-[10%] lap:mb-[0.6875rem]">
                    <Link to="/team" className="flex items-center">
                      <span className="lap:mr-[0.5rem]">
                        <ImageCustom
                          src={Caret}
                          className="max-md:hidden"
                        />
                      </span>
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tab:mt-[1%] lap:max-des:ml-[2rem] lap:ml-[9.375rem] lap:mt-[0.3125rem] ">
                <p className=" font-semibold max-tab:text-[50%] tab:text-[50%]  md:max-lg:text-[100%] lap:text-lg lap:leading-6 lap:tracking-[0.1em] text-left text-white lap:mb-[1.5rem]">
                  Informations
                </p>
                <ul className="max-md:grid max-md:grid-cols-4 max-md:gap-x-1 max-tab:text-[50%]  tab:text-[50%] md:max-lg:text-[100%] lap:text-base lap:leading-6 lap:tracking-[0.1em] text-left text-footerTextCustom">
                  <li className="tab:mb-[6%] lap:mb-[0.6875rem]">
                    <Link to="/term" className="flex items-center">
                      <span className="lap:mr-[0.5rem]">
                        <ImageCustom
                          src={Caret}
                          className="max-md:hidden"
                        />
                      </span>
                      Terms & conditions
                    </Link>
                  </li>
                  <li className="tab:mb-[6%] lap:mb-[0.6875rem]">
                    <Link to="/policy" className="flex items-center">
                      <span className="lap:mr-[0.5rem]">
                        <ImageCustom
                          src={Caret}
                          className="max-md:hidden"
                        />
                      </span>
                      Privacy policy
                    </Link>
                  </li>
                  <li className="tab:mb-[6%] lap:mb-[0.6875rem]">
                    <Link to="/blog" className="flex items-center">
                      <span className="lap:mr-[0.5rem]">
                        <ImageCustom
                          src={Caret}
                          className="max-md:hidden"
                        />
                      </span>
                      Blog
                    </Link>
                  </li>
                  <li className="tab:mb-[6%] lap:mb-[0.6875rem]">
                    <Link to="/contacts" className="flex items-center">
                      <span className="lap:mr-[0.5rem]">
                        <ImageCustom
                          src={Caret}
                          className="max-md:hidden"
                        />
                      </span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute w-full flex max-des:pl-[2rem]  tab:max-des:bottom-[2rem]   max-tab:bottom-[0.8125rem] lap:pl-[9.375rem]  des:bottom-[5.6875rem]  max-tab:block">
            <div className="flex  w-full">
              <div className="max-tab:mr-[0.625rem] tab:max-md:mr-[0.625rem]  md:max-lg:mr-[1.5rem]   lap:mr-[2.8125rem]">
                <ImageCustom
                  className="max-tab:w-1/2 tab:max-md:w-1/2 lap:w-full hover:cursor-pointer"
                  src={Face}
                />
              </div>
              <div className="max-tab:mr-[0.5rem] tab:max-md:mr-[0.625rem] md:max-lg:mr-[1.5rem] lap:mr-[2.8125rem]">
                <ImageCustom
                  className="max-tab:w-1/2 tab:max-md:w-1/2 lap:w-full hover:cursor-pointer"
                  src={Twi}
                />
              </div>
              <div className="max-tab:mr-[0.5rem] tab:max-md:mr-[0.625rem] md:max-lg:mr-[1.5rem] lap:mr-[2.8125rem]">
                <ImageCustom
                  className="max-tab:w-1/2 tab:max-md:w-1/2 lap:w-full hover:cursor-pointer"
                  src={Lnk}
                />
              </div>
              <div className="max-tab:mr-[0.5rem] tab:max-md:mr-[0.625rem] md:max-lg:mr-[1.5rem] lap:mr-[2.8125rem]">
                <ImageCustom
                  className="max-tab:w-1/2 tab:max-md:w-1/2 lap:w-full hover:cursor-pointer"
                  src={Ytb}
                />
              </div>
              <div className="max-tab:mr-[0.5rem] tab:max-md:mr-[0.625rem] md:max-lg:mr-[1.5rem] lap:mr-[2.8125rem]">
                <ImageCustom
                  className="max-tab:w-1/2 tab:max-md:w-1/2 lap:w-full hover:cursor-pointer"
                  src={Ins}
                />
              </div>
            </div>
            <div className="flex max-des:pr-[2rem] max-tab:justify-start lap:justify-end w-full lap:pr-[9.375rem]">
              <p className=" max-md:text-[0.5rem]  lap:text-[1rem] font-normal leading-[2rem] tracking-[0.1em] text-right text-blueCustom">
                © AltDesain Studio 2021 - All right reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
