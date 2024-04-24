import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import ButtonPrimary from "../../shared/ButtonPrimary/ButtonPrimary";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const Deals = () => {
  return (
    <div className="py-20">
      <SectionHeading text="Deal Of The Day"/>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-5">
        <div className="card md:card-side bg-base-100 shadow-xl rounded-none p-5">
          <figure>
            <img
              src="https://images.pexels.com/photos/2046807/pexels-photo-2046807.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Album"
              className="h-full w-full"
            />
          </figure>
          <div className="card-body p-0 md:pl-4 md:w-10/12 lg:w-1/2 xl:w-10/12 mt-5 md:mt-0">
            <h2 className="card-title text-lg font-bold">
              Wireless Bluetooth Headset Single Ear Earplugs Ultra
            </h2>
            <div className="flex-1">
              <Rating
                readonly
                placeholderRating={3.5}
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
              <span className="ml-2 font-semibold">4.5(121) </span>
              <p className="my-3">
                <span className="text-xl">$</span>
                <span className="font-bold text-4xl">6</span>{" "}
                <span className="ml-3 text-textNeutral">($16 -50%)</span>
              </p>
              <p className="text-textNeutral font-semibold">
                Introducing Wireless Bluetooth Adapter, the ultimate solution
                for seamless connectivity on the go.
              </p>
            </div>
            <div className="card-actions justify-end">
              <ButtonPrimary text="Add To Cart" />
            </div>
          </div>
        </div>

        <div className="card md:card-side bg-base-100 shadow-xl rounded-none p-5">
          <figure>
            <img
              src="https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Album"
              className="h-full w-full"
            />
          </figure>
          <div className="card-body p-0 md:pl-4 md:w-10/12 lg:w-1/2 xl:w-10/12 mt-5 md:mt-0">
            <h2 className="card-title text-lg font-bold">
              Wireless Bluetooth Headset Single Ear Earplugs Ultra
            </h2>
            <div className="flex-1">
              <Rating
                readonly
                placeholderRating={3.5}
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
              <span className="ml-2 font-semibold">4.5(121) </span>
              <p className="my-3">
                <span className="text-xl">$</span>
                <span className="font-bold text-4xl">6</span>{" "}
                <span className="ml-3 text-textNeutral">($16 -50%)</span>
              </p>
              <p className="text-textNeutral font-semibold">
                Introducing Wireless Bluetooth Adapter, the ultimate solution
                for seamless connectivity on the go.
              </p>
            </div>
            <div className="card-actions justify-end">
              <ButtonPrimary text="Add To Cart" />
            </div>
          </div>
        </div>

        <div className="card md:card-side bg-base-100 shadow-xl rounded-none ">
          <div className="card-body p-0 md:pl-4 md:w-8/12 lg:w-1/3 xl:w-6/12 mt-5 md:mt-0 py-5 items-center justify-center">
            <div>
              <h2 className=" text-4xl font-bold">Wooden Sofa Aqua</h2>
              <p className="text-2xl my-4">1 Year Warranty</p>
              <p className=" text-4xl font-bold text-[#2B5856]">$279.99</p>
            </div>
          </div>
          <figure className="order-first md:order-last">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/19/02/58/sofa-2657172_640.png"
              alt="Album"
              className=""
            />
          </figure>
        </div>

        <div className="card md:card-side bg-base-100 shadow-xl rounded-none ">
          <div className="card-body p-0 md:pl-4 md:w-8/12 lg:w-1/3 xl:w-6/12 mt-5 md:mt-0 py-5 items-center justify-center">
            <div>
              <h2 className=" text-4xl font-bold">Wooden Sofa Aqua</h2>
              <p className="text-2xl my-4">1 Year Warranty</p>
              <p className=" text-4xl font-bold text-[#2B5856]">$279.99</p>
            </div>
          </div>
          <figure className="order-first md:order-last">
            <img
              src="https://cdn.pixabay.com/photo/2017/07/24/17/18/sofa-2535448_640.png"
              alt="Album"
              className=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Deals;
