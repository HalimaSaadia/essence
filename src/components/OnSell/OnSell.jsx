import { useEffect, useState } from "react";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const OnSell = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/onSell.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div className="py-20">
        <SectionHeading text="On Selling Products"/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 mt-10">
        {products?.map((product) => (
          <div
            key={product?.id}
            className="card lg:card-side bg-base-100 shadow-xl rounded-none"
          >
            <figure>
              <img
                src={product?.image}
                alt="Album"
                className="h-full  object-fill"
              />
            </figure>
            <div className="card-body p-0 px-4 lg:w-11/12  justify-center border">
              <div>
                <h2 className="card-title font-bold">{product?.name}</h2>
                <p className="text-textNeutral font-semibold">
                  {product?.description}
                </p>
                <p className="my-3">
                  <span className="text-xl font-bold">
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
        ))}
      </div>
    </div>
  );
};

export default OnSell;
