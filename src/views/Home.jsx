import BannerSlider from "../components/BannerSlider/BannerSlider";
import BestSeller from "../components/BestSeller/BestSeller";
import Collections from "../components/Collections/Collections";
import PaymentData from "../components/PaymentData/PaymentData";

const Home = () => {
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
