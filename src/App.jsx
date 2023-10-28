import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Beranda from "./pages/Beranda";
import Akun from "./pages/Akun";
import Keranjang from "./pages/Keranjang";
import JualBarang from "./pages/JualBarang";
import RincianBarang from "./pages/RincianBarang";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Beranda />} />
        <Route path="produk/:id" element={<RincianBarang />} />
        <Route path="akun" element={<Akun />} />
        <Route path="keranjang" element={<Keranjang />} />
        <Route path="jual_barang" element={<JualBarang />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
