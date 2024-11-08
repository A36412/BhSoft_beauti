interface DetailSectionProps {
  titleSection: string;
  nameSection: string;
  descriptionSection: string;
  className?: string;
  responsive?: string;
  textPosition?: string;
}

const DetailSection: React.FC<DetailSectionProps> = (props) => {
  const {
    textPosition,
    responsive,
    titleSection,
    nameSection,
    descriptionSection,
    className,
  } = props;
  return (
    <>
      <div className={` ${className || ``}`}>
        <div className={`flex md:max-lg:pb-[0.5rem] ${responsive}`}>
          <p
            className={` max-tab:text-[1rem] tab:max-lg:text-[1.25rem] lap:text-base font-semibold ${responsive} leading-5 text-left text-pinkCustom`}
            dangerouslySetInnerHTML={{ __html: titleSection }}
          ></p>
        </div>
        <div className={`flex md:max-lg:pb-[0.5rem] ${responsive} des:mt-5 des:mb-5`}>
          <p
            className={` max-tab:text-[1.25rem] tab:max-md:text-[1.5rem] md:max-lg:text-[2rem] lap:text-4xl	font-semibold leading-9 ${textPosition}  lap:text-left text-blackCustom`}
            dangerouslySetInnerHTML={{ __html: nameSection }}
          ></p>
        </div>
        <div className={`flex md:max-lg:pb-[0.5rem] ${responsive}`}>
          <p
            className={`  tab:max-md:text-[1rem]  md:max-lg:text-[1.25rem]  lap:text-base font-normal leading-6  tracking-wide ${textPosition} lap:text-left text-greyCustom`}
            dangerouslySetInnerHTML={{ __html: descriptionSection }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default DetailSection;
