import React, { useEffect, useState } from "react";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const AppleProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/apple.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div className="py-20">
      <SectionHeading text="Apple" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-5 mt-10">
        {products?.map((product) => (
          <div key={product?.id} className="flex">
            <div className="flex flex-col gap-3">
              <img
                src={product?.image}
                alt=""
                className="h-48 w-40 flex-1 block"
              />
              <p className="text-lg font-semibold text-center mt-3">
                {product?.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppleProducts;
