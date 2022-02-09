import { useState } from "react";
import { Outlet } from "react-router-dom";

// Components
import Spinner from "../components/Spinner/Spinner";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Navbar />
      <Outlet context={[isLoading, setIsLoading]} />
      {isLoading ? <Spinner /> : null}
      <Footer />
    </>
  );
};

export default Layout;
