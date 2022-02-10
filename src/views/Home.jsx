import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import { db } from "../firebase";
import BestSeller from "../sections/BestSeller/BestSeller";
import Collections from "../sections/Collections/Collections";
import PaymentData from "../sections/PaymentData/PaymentData";

const Home = () => {
  // useEffect(() => {
  //   const getFromFirebase = async () => {
  //     const query = collection(db, "products");
  //     const snapshot = await getDocs(query);
  //     snapshot.forEach((item) => {
  //       console.log(item.data());
  //       console.log(item.id);
  //     });
  //   };

  //   getFromFirebase();
  // }, []);

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
