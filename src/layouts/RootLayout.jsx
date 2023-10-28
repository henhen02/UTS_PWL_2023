import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
// import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
