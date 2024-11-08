import ImageCustom from "@components/ImageCustom";
import LineTitle from "@assets/images/line_title.png";
import CollapseItem from "@components/CollapseCustom";
const CollapseData = [
    {
      label: "Is beauty consultation handled thoroughly?",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus <br/> venenatis, lectus magna fringilla urna <br/> porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est <br/> ullamcorper eget nulla",
    },
    {
      label: "Can I be beautiful in an instant time?",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus <br/> venenatis, lectus magna fringilla urna <br/> porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est <br/> ullamcorper eget nulla",
    },
    {
      label:
        "Are there any side effects to the treatment methods or treatments at this clinic?",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus <br/> venenatis, lectus magna fringilla urna <br/> porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est <br/> ullamcorper eget nulla",
    },
    {
      label: "Do professionals have accreditation in their respective fields?",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus <br/> venenatis, lectus magna fringilla urna <br/> porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est <br/> ullamcorper eget nulla",
    },
  ];


export const FAQServices  = () => {
  return (
    <section className="max-des:pl-[2rem] max-des:pr-[2rem] max-des:pt-[2rem] des:mt-[7.25rem]">
    <div>
      <p className=" max-tab:text-[1.25rem] md:max-lg:text-[2rem] text-3xl font-semibold leading-[2.8125rem] text-center text-blackCustom">
        Services FAQ’s
      </p>
      <div className="flex justify-center mt-[1.3125rem]">
        <ImageCustom src={LineTitle} />
      </div>
    </div>
    <div className=" max-tab:mt-[1rem] lap:mt-[4.375rem]">
      {CollapseData.map((collap, index) => (
        <CollapseItem
          key={index}
          className="max-tab:w-[100%] tab:w-[100%] lap:w-[50%]  lap:ml-[25%] justify-center"
          label={collap.label}
          children={collap.children}
        />
      ))}
    </div>
  </section>
  );
};
