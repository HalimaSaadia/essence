import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const MegaOffer = () => {
  return (
    <div className="py-20">
      <SectionHeading text="Mega Offer" />
      <div className="grid grid-cols-12 md:gap-10 mt-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-5 lg:order-first">
          <div>
            <img
              src="https://c8.alamy.com/comp/2J617BR/back-to-school-sale-vector-banner-design-back-to-school-sale-text-in-special-offer-discount-with-backpack-bags-element-for-education-supplies-2J617BR.jpg"
              alt=""
              className="lg:w-full"
            />
          </div>
          <div>
            <img
              src="https://c8.alamy.com/comp/2J617BR/back-to-school-sale-vector-banner-design-back-to-school-sale-text-in-special-offer-discount-with-backpack-bags-element-for-education-supplies-2J617BR.jpg"
              alt=""
              className="lg:w-full"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-6 order-first">
          <div className="">
            <img
              src="https://img.freepik.com/free-vector/asbtract-colorful-sales-background-concept_23-2148388499.jpg?w=740&t=st=1713968841~exp=1713969441~hmac=e317c7291ec2bd20d1124973ae99eb87e387f8c87b81a787f239826ccc368123"
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-5">
          <div>
            <img
              src="https://c8.alamy.com/comp/2J617BR/back-to-school-sale-vector-banner-design-back-to-school-sale-text-in-special-offer-discount-with-backpack-bags-element-for-education-supplies-2J617BR.jpg"
              alt=""
              className="lg:w-full"
            />
          </div>
          <img
            src="https://c8.alamy.com/comp/2J617BR/back-to-school-sale-vector-banner-design-back-to-school-sale-text-in-special-offer-discount-with-backpack-bags-element-for-education-supplies-2J617BR.jpg"
            alt=""
            className="lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MegaOffer;
