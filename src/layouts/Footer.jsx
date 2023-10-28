import React from "react";
import * as AiIcon from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#606470] text-[#F7F7F7] py-10 w-full">
      <div className="container mx-auto flex gap-[20px]">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold mb-4">Tentang Kami</h1>
          <p className="mb-2">
            Sonje Comp adalah mobile platform ke-sekian-kalinya yang ada di Asia
            Tenggara yang menawarkan transaksi jual beli online yang
            menyenangkan, gratis, dan terpercaya via komputer. Bergabunglah
            dengan jutaan pengguna lainnya dengan mulai mendaftarkan produk
            jualan dan berbelanja berbagai penawaran menarik kapan saja, di mana
            saja. Keamanan transaksi kamu terjamin.. Ayo gabung dalam komunitas
            Sonje Comp dan mulai belanja sekarang!
          </p>
          <p className="mb-2">&copy; 2023. Hak Cipta Sonje Comp</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold mb-4">Hubungi Kami</h1>
          <p className="mb-2">Sonje Comp</p>
          <p className="mb-2">
            Way Kandis, Kec. Tj. Senang, Kota Bandar Lampung, Lampung 35135
          </p>
          <p className="mb-2">sonjecomp@gmail.com</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold mb-4">Sosial Media</h1>
          <div className="flex flex-col">
            <a href="#" className="mr-4">
              <i className="fab fa-facebook-f flex flex-row gap-1 items-center">
                <AiIcon.AiFillFacebook />
                Sonje Comp
              </i>
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-twitter flex flex-row gap-1 items-center">
                <AiIcon.AiFillTwitterSquare />
                @sonjecomp
              </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram flex flex-row gap-1 items-center">
                <AiIcon.AiFillInstagram />
                @sonjecomp.official
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
