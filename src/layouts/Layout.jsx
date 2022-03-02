import { useState } from "react";
import { Outlet } from "react-router-dom";

import Spinner from "../components/Spinner/Spinner";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Toast from "../components/Toast/Toast";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Navbar />
      <Toast />
      <Outlet context={[isLoading, setIsLoading]} />
      {isLoading ? <Spinner /> : null}
      <Footer />
    </>
  );
};

export default Layout;
