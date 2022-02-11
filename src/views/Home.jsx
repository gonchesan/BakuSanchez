import BannerSlider from "../components/BannerSlider/BannerSlider";
import BestSeller from "../sections/BestSeller/BestSeller";
import Collections from "../sections/Collections/Collections";
import PaymentData from "../sections/PaymentData/PaymentData";

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
