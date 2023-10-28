import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Main from "../layouts/Main";
import axios from "axios";

const JualBarang = () => {
  const [input, setInput] = useState({
    nama_penjual: "",
    kontak_penjual: "",
    alamat_penjual: "",
    nama_barang: "",
    harga_barang: "",
    kategori_barang: "",
    gambar_barang: "",
    deskripsi_barang: "",
  });

  const [persetujuan, setPersetujuan] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isInputEmpty = Object.values(input).some((value) => value === "");

    if (isInputEmpty) {
      toast.error("Isi dulu semua kolomnya ya...");
      return;
    }

    setLoading(true);
    toast
      .promise(axios.post("/api/barang", input), {
        loading: "Posting pending...",
        success: "Berhasil memposting barang...",
        error: "Gagal posting barang, coba beberapa saat lagi",
      })
      .then(() => {
        setInput({
          nama_penjual: "",
          kontak_penjual: "",
          alamat_penjual: "",
          nama_barang: "",
          harga_barang: "",
          kategori_barang: "",
          gambar_barang: "",
          deskripsi_barang: "",
        });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <Main>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Jual Barang</h1>
      </div>
      <div className="py-[10px] flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="nama_penjual"
              >
                Nama Penjual
              </label>
              <input
                name="nama_penjual"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="namaPenjual"
                type="text"
                placeholder="Masukkan nama penjual"
                value={input.nama_penjual}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="kontak_penjual"
              >
                Kontak Penjual
              </label>
              <input
                name="kontak_penjual"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="kontakPenjual"
                type="text"
                placeholder="Masukkan kontak penjual"
                value={input.kontak_penjual}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="alamat_penjual"
              >
                Alamat Penjual
              </label>
              <input
                name="alamat_penjual"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="alamatPenjual"
                type="text"
                placeholder="Masukkan alamat penjual"
                value={input.alamat_penjual}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="nama_barang"
              >
                Nama Barang
              </label>
              <input
                name="nama_barang"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="namaBarang"
                type="text"
                placeholder="Masukkan nama barang"
                value={input.nama_barang}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="kategori_barang"
              >
                Kategori
              </label>
              <div>
                <select
                  name="kategori_barang"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="kategori"
                  value={input.kategori_barang}
                  onChange={handleInput}
                >
                  <option value="">Pilih kategori</option>
                  <option value="elektronik">Elektronik</option>
                  <option value="perabot">Perabot</option>
                  <option value="aksesori">Aksesori</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="harga_barang"
              >
                Harga
              </label>
              <input
                name="harga_barang"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="harga"
                type="text"
                placeholder="Masukkan harga barang"
                value={input.harga_barang}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="gambar_barang"
              >
                Foto Barang
              </label>
              <input
                name="gambar_barang"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="fotoBarang"
                type="text"
                placeholder="Masukkan tautan barang kamu"
                value={input.gambar_barang}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="deskripsi_barang"
              >
                Deskripsi Barang
              </label>
              <textarea
                name="deskripsi_barang"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="deskripsiBarang"
                placeholder="Masukkan deskripsi barang"
                value={input.deskripsi_barang}
                onChange={handleInput}
                maxLength={400}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  checked={persetujuan}
                  onChange={(e) => setPersetujuan(e.target.checked)}
                />
                <span className="ml-2 text-gray-700">
                  Saya menyetujui persyaratan layanan
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  !persetujuan ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={!persetujuan}
              >
                {loading ? "Loading" : "Posting"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Main>
  );
};

export default JualBarang;
