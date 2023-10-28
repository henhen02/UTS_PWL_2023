import React from "react";
import Main from "../layouts/Main";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useDetailBarang from "../hooks/useDetailBarang";

const RincianBarang = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useDetailBarang(id);
  const navigate = useNavigate();
  return (
    <>
      {isLoading ? (
        <Main>
          <div className="flex flex-col items-center justify-center">
            <div className="w-64 h-64 animate-pulse rounded-lg shadow-lg mb-4"></div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2 animate-pulse">
              Nama Barang
            </h1>
            <h2 className="text-xl font-medium text-gray-700 mb-4 animate-pulse">
              Kategori Barang
            </h2>
            <p className="text-lg font-normal text-gray-700 mb-4 animate-pulse">
              Deskripsi Barang
            </p>
            <div className="flex flex-col items-center justify-center mb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2 animate-pulse">
                Harga:
              </h3>
              <p className="text-2xl font-bold text-green-600 animate-pulse">
                Harga Barang
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2 animate-pulse">
                Penjual:
              </h3>
              <p className="text-lg font-normal text-gray-700 mb-1 animate-pulse">
                Nama Penjual
              </p>
              <p className="text-lg font-normal text-gray-700 mb-1 animate-pulse">
                Kontak Penjual
              </p>
              <p className="text-lg font-normal text-gray-700 mb-4 animate-pulse">
                Alamat Penjual
              </p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <button
                onClick={() => navigate("/")}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Kembali
              </button>
              <button className="bg-[#3689D7] text-[#F7F7F7] hover:bg-blue-200 font-bold py-2 px-4 rounded animate-pulse">
                Beli
              </button>
            </div>
          </div>
        </Main>
      ) : (
        <Main>
          <div className="py-10 flex flex-col items-center justify-center">
            <img
              src={data?.gambar_barang}
              alt={`${data?.nama_barang}.png`}
              className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {data?.nama_barang}
            </h1>
            <h2 className="text-xl font-medium text-gray-700 mb-4">
              {data?.kategori_barang}
            </h2>
            <p className="text-lg font-normal text-gray-700 mb-4">
              {data?.deskripsi_barang}
            </p>
            <div className="flex flex-col items-center justify-center mb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Harga:</h3>
              <p className="text-2xl font-bold text-green-600">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(data?.harga_barang)}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Penjual:
              </h3>
              <p className="text-lg font-normal text-gray-700 mb-1">
                {data?.nama_penjual}
              </p>
              <p className="text-lg font-normal text-gray-700 mb-1">
                {`+62${data?.kontak_penjual}`}
              </p>
              <p className="text-lg font-normal text-gray-700 mb-4">
                {data?.alamat_penjual}
              </p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <button
                onClick={() => navigate("/")}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Kembali
              </button>
              <button className="bg-[#3689D7] text-[#F7F7F7] hover:bg-blue-200 font-bold py-2 px-4 rounded">
                Beli
              </button>
            </div>
          </div>
        </Main>
      )}
    </>
  );
};

export default RincianBarang;
