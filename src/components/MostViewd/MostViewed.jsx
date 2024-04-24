import { useEffect, useState } from "react";
import Rating from "react-rating";
import Slider from "react-slick";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const MostViewed = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/mostViewed.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
   
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-20">
      <div className="mb-5">
      <SectionHeading text="Most Viewed Items" />
      </div>
      <Slider {...settings}>
        {products?.map((product) => (
          <div key={product?.id}>
            <div className="card bg-base-100 shadow-xl rounded-none mx-2 h-full">
              <figure className="">
                <img src={product?.image} alt="Shoes" className="h-40 w-full" />
              </figure>
              <div className="card-body items-center text-center px-0">
                <h2 className="card-title text-base font-bold">
                  {product?.name}
                </h2>
                <div className="">
                  <Rating
                    readonly
                    placeholderRating={5}
                    emptySymbol={<FaRegStar />}
                    className="icon"
                    placeholderSymbol={<FaStar style={{ color: "#F6B100" }} />}
                    fullSymbol={
                      <FaStar
                        style={{ color: "#F6B100", backgroundColor: "#F6B100" }}
                        className="text-secondaryColor"
                      />
                    }
                  />
                  <p className="font-semibold text-textNeutral">
                    {product?.review} Review
                  </p>
                </div>
                <div className="card-actions">
                <p className="my-3">
                  <span className="text-lg font-bold">
                    ${product?.offerPrice}
                  </span>
                  <span className="text-lg line-through ml-3 text-textNeutral">
                    ${product?.originalPrice}
                  </span>
                  <span className="text-lg text-textNeutral">
                    -{product?.discount}%
                  </span>
                </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MostViewed;
