import React, { useState, useRef, useEffect } from "react";
import Arrow from "@assets/svgs/angle-down.svg";
import ImageCustom from "@components/ImageCustom";

interface CollapseItemProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const CollapseItem: React.FC<CollapseItemProps> = (props) => {
  const { label, children, className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className={className}>
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleCollapse}
      >
        <span className="   max-tab:w-[70%] max-tab:text-xs tab:max-md:text-base font-semibold leading-6 tracking-wide text-left text-blackCustom">
          {label}
        </span>
        <span
          className={`transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ImageCustom src={Arrow} />
        </span>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-[1000ms] ease-in-out"
        style={{ maxHeight }}
      >
        <div
          className="pt-[3.25rem] pl-[4.75rem] pr-[3.9375rem] pb-[3.3125rem] leading-[1.3125] tracking-[0.1em] text-greyCustom italic  text-sm bg-greyCollapse rounded-b-3xl"
          dangerouslySetInnerHTML={{ __html: children }}
        >
        </div>
      </div>
    </div>
  );
};

export default CollapseItem;
