import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const Vendors = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/vendors.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, [brands]);
  return (
    <div className="py-20">
      <SectionHeading text="Weekly Top Vendors" />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-5 mt-5">
        {brands?.map((brand) => (
          <div key={brand?.id} className="p-4 bg-white">
            <div className="flex gap-4">
              <div className="h-16 w-16 flex justify-center items-center rounded-full bg-[#F1F0EE]">
                <img
                  src={brand?.logo}
                  alt="Yankee Brand"
                  className="h-8 w-8 rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="font-bold  mt-2">{brand?.brand}</p>
                <div className="flex justify-between ">
                  <p className="text-sm text-[#010E0E]">
                    Items <br /> <span>{brand?.available}</span>
                  </p>
                  <div>
                    <Rating
                      readonly
                      placeholderRating={5}
                      emptySymbol={<FaRegStar />}
                      className="icon"
                      placeholderSymbol={
                        <FaStar style={{ color: "#F6B100" }} />
                      }
                      fullSymbol={
                        <FaStar
                          style={{
                            color: "#F6B100",
                            backgroundColor: "#F6B100",
                          }}
                          className="text-secondaryColor"
                        />
                      }
                    />
                    <p> {brand?.review} Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <div>
                <img src={brand?.image1} alt="" className="h-full" />
              </div>
              <div className="space-y-3">
                <img
                  src={brand?.image2}
                  alt=""
                  className="w-[124px] h-[89px]"
                />
                <img
                  src={brand?.image3}
                  alt=""
                  className="w-[124px] h-[89px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
