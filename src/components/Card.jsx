import React from "react";
import { MdShoppingCart } from "react-icons/md";

const Card = ({
  img_url,
  product_title,
  product_price,
  onClickDetail,
  onClickBuy,
  onClickCart,
}) => {
  return (
    <>
      <div className="flex flex-col p-[20px] h-[400px] w-[240px] shadow-xl rounded-xl">
        <figure className="w-[200px] h-[200px] self-center justify-self-center bg-[#d9d9d9]">
          <img
            src={img_url}
            alt={`${product_title}.png`}
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="flex flex-1 flex-col w-full gap[5px]">
          <h1 className="text-[#323643]">{product_title}</h1>
          <div className="flex flex-col gap-[5px] items-end justify-end flex-1">
            <p className="text-[#3689D7] text-lg font-medium justify-self-start self-start">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(product_price)}
            </p>
            <div className="flex flex-row gap-[10px] w-full">
              <button
                onClick={onClickDetail}
                className="rounded-md flex items-center justify-center h-[40px] flex-1 bg-slate-500 text-[#F7F7F7]"
              >
                Rincian
              </button>
              <button
                onClick={onClickCart}
                className="rounded-md flex items-center justify-center w-[40px] h-[40px] bg-orange-400 text-[#F7F7F7]"
              >
                <MdShoppingCart />
              </button>
            </div>
            <button
              onClick={onClickBuy}
              className="bg-[#3689D7] text-[#F7F7F7] rounded-md flex items-center justify-center h-[40px] w-full"
            >
              Beli
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
