
import { GetInQuotaGallry } from "./GetTheQuotaGallery/GetTheQuotaGallery";
import { OurGalleryPageGallery } from "./OurGallery/OurGallery";
import { TourVideoGallery } from "./TourVideoGallery/TourVideoGallery";

const GalleryPage: React.FC = () => {
  return (
    <>
    <OurGalleryPageGallery />      
    <TourVideoGallery />
    <GetInQuotaGallry />
    </>
  );
};

export default GalleryPage;
