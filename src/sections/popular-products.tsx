import PopularProductCard from "../components/popular-product-card";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5 ">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red"> Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-12 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of a comfort, desing and value
        </p>
      </div>
      <div
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:gap-4 gap-14
      "
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
