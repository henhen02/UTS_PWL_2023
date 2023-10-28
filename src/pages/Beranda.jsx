import React, { useState } from "react";
import toast from "react-hot-toast";
import Main from "../layouts/Main";
import Card from "../components/Card";
import Header from "../layouts/Header";
import useDaftarBarang from "../hooks/useDaftarBarang";
import LoadingCard from "../components/LoadingCard";
import { useNavigate } from "react-router-dom";

const Beranda = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useDaftarBarang();

  const handleNoReleaseFiture = () => {
    toast.error("Fitur ini belum tersedia");
  };

  return (
    <>
      <Header
        title={"Selamat Datang"}
        desc={"Pilih produk yang kamu mau disini"}
      />
      <Main>
        <div className="w-full flex flex-col px-[30px]">
          <div className="flex flex-row justify-between">
            <div>
              <h2>
                <span className="text-2xl font-semibold">Produk Terbaru</span>
              </h2>
              <p>
                Demi kamu, kami memperbaharui produk terbaru setiap hari{" "}
                <u>
                  <i>{`kalo ga lupa tapi`}</i>
                </u>
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[25px] py-[10px] w-full overflow-x-auto example">
            {isLoading ? (
              <LoadingCard />
            ) : (
              data?.map((item, index) => {
                return (
                  <Card
                    onClickDetail={() => navigate(`/produk/${item?.id}`)}
                    onClickBuy={handleNoReleaseFiture}
                    onClickCart={handleNoReleaseFiture}
                    product_title={item.nama_barang}
                    product_price={item.harga_barang}
                    img_url={item.gambar_barang}
                    key={index}
                  />
                );
              })
            )}
          </div>
        </div>
      </Main>
    </>
  );
};

export default Beranda;
