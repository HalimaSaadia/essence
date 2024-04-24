import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import BrandSlider from "../../shared/Slider/Slider";


const TopBrands = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 4,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ],
      };
    return (
        <div className="pb-20">
            <div className="mb-5">
                <SectionHeading text="Top Brands"/>
            </div>
            <BrandSlider settings={settings} />
        </div>
    );
};

export default TopBrands;