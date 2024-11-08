interface ImageCustomProps {
  src: string;
  alt?: string;
  className?:string;
}

const ImageCustom: React.FC<ImageCustomProps> = ({ src, alt , className }) => {
  return (
    <>
      <img className={className} src={src} alt={alt} />
    </>
  );
};

export default ImageCustom;
