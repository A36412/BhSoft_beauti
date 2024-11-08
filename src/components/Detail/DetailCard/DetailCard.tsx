interface DetailCardProps {
  titleDetail: string;
  nameDetail: string;
  descriptionDetail: string;
  className?: string;
}

const DetailCard: React.FC<DetailCardProps> = (props) => {
  const { titleDetail, nameDetail, descriptionDetail, className } = props;
  return (
    <>
      <div className={`tab:max-sm:mb-10 lap:mb-20 ${className || ""}`}>
        <div className="flex justify-center md:max-lg:pb-[0.5rem]">
          <p
            className=" max-tab:text-[1rem] tab:max-lg:text-[1.25rem]  lap:text-base font-semibold lap:leading-5 text-center text-pinkCustom"
            dangerouslySetInnerHTML={{ __html: titleDetail }}
          ></p>
        </div>
        <div className="flex justify-center tab:max-sm:mt-2 tab:max-sm:mb-2 md:max-lg:pb-[0.5rem] lap:mt-[1.25rem] lap:mb-[1.25rem]">
          <p
            className=" max-tab:text-[1.25rem] tab:max-sm:text-[1.5rem] md:max-lg:text-[2rem] lap:text-[2.5rem] font-semibold lap:leading-9 text-center text-blackCustom"
            dangerouslySetInnerHTML={{ __html: nameDetail }}
          ></p>
        </div>
        <div className="flex justify-center md:max-lg:pb-[0.5rem]">
          <p
            className=" max-md:text-[1rem] md:max-lg:text-[1.25rem] lap:text-base font-normal lap:leading-6 tracking-wide text-center text-greyCustom"
            dangerouslySetInnerHTML={{ __html: descriptionDetail }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
