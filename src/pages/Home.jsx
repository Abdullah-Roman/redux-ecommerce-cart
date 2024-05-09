import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Slides from "../components/Slides";
import Cart from "./Cart";

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Header setShow={setShow} />
      {show && <Cart setShow={setShow} />}
      <Slides />
      <Outlet />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Home;
