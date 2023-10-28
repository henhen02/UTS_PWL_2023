import { NavLink } from "react-router-dom";
import * as MdIcon from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="inline w-full bg-[#323643] top-0 sticky py-[15px] px-[30px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <figure className="w-[50px] h-[50px] bg-[#93DEFF] rounded-[100%]">
            <img
              className="rounded-[100%]"
              src="https://buatlogoonline.com/wp-content/uploads/2022/04/PTL-43.jpg"
              alt="PTL-43.jpg"
            />
          </figure>
          <h2 className="text-4xl text-[#93DEFF] font-bold">Sonje Comp</h2>
        </div>
        <ul className="flex flex-1 flex-row gap-10 items-center justify-end">
          <li>
            <NavLink
              to={"/"}
              className={
                "flex flex-row gap-2 text-[#93DEFF] text-lg font-semibold items-center"
              }
            >
              <MdIcon.MdHome />
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/jual_barang"}
              className={
                "flex flex-row gap-2 text-[#93DEFF] text-lg font-semibold items-center"
              }
            >
              <MdIcon.MdSell />
              Jual Barang
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/keranjang"}
              className={
                "flex flex-row gap-2 text-[#93DEFF] text-lg font-semibold items-center"
              }
            >
              <MdIcon.MdShoppingCart />
              Keranjang
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/akun"}
              className={
                "flex flex-row gap-2 text-[#93DEFF] text-lg font-semibold items-center"
              }
            >
              <MdIcon.MdPerson />
              Akun
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
