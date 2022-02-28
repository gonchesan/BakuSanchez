import { useEffect } from "react";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import BestSeller from "../sections/BestSeller/BestSeller";
import Collections from "../sections/Collections/Collections";
import PaymentData from "../sections/PaymentData/PaymentData";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BannerSlider />
      <PaymentData />
      <Collections />
      <BestSeller />
    </>
  );
};

export default Home;
