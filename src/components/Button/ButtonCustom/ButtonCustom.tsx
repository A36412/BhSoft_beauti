import ImageCustom from "@components/ImageCustom";
import blog_caret from "@assets/images/blog_caret.png";

interface ButtonProps {
  content: string;
  classButton?: string;
  classContent?: string;
  showImage?: boolean; 
}

export const ButtonCustom: React.FC<ButtonProps> = (props) => {
  const { classContent, classButton, content, showImage } = props;

  return (
    <>
      <button className={`bg-blink rounded-[50px] des:mb-[0.46875rem] ${classButton}`}>
        <p className={` ${classContent} font-semibold leading-[1.5rem] tracking-[0.1em] text-white`}>
          {content}
        </p>
        {showImage && <ImageCustom src={blog_caret} />}
      </button>
    </>
  );
};

export default ButtonCustom;
