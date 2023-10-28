import React from "react";
import Main from "../layouts/Main";
import toast from "react-hot-toast";

const Keranjang = () => {
  const handleCheckout = () => {
    toast.error("Fitur ini belum tersedia");
  };

  return (
    <Main>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Keranjang</h1>
        <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <h1 className="text-lg font-bold">Nama Barang</h1>
              <h1 className="text-lg font-bold">Harga</h1>
            </div>
            <div className="flex flex-row justify-between">
              <h1 className="text-lg">Jumlah Barang</h1>
              <h1 className="text-lg">Total Harga</h1>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <h1 className="text-lg font-bold">Total Belanja</h1>
            <h1 className="text-lg font-bold">Total Harga</h1>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <button
              className="bg-[#3689D7] text-[#F7F7F7] rounded-md flex items-center justify-center h-[40px] w-full"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Keranjang;
