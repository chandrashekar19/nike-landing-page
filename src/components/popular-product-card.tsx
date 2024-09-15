import { star } from "../assets/icons";

interface PopularProductCardProps {
  product: {
    imgURL: string;
    name: string;
    price: string;
  };
}

const PopularProductCard = ({ product }: PopularProductCardProps) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={product.imgURL}
        alt={product.name}
        className="w-[280px] h-[280px] "
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {4.5}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {product.name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {product.price}
      </p>
    </div>
  );
};
export default PopularProductCard;
