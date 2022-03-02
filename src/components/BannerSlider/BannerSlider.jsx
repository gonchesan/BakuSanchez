import { useContext, useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

import {
  BannerContainer,
  ButtonContainers,
  ButtonSlider,
} from "./BannerSlider.elements";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { DataContext } from "../../context/DataContext";
import { handleSlider } from "../../utils/functions";

const BannerSlider = () => {
  const [banner, setBanner] = useState(); // Images for the banner
  const [indexPicture, setIndexPicture] = useState(0);
  const [isLoading, setIsLoading] = useOutletContext();
  const { bannersFromDatabase } = useContext(DataContext);

  //References to control banner slider
  const minusRef = useRef(null);
  const addRef = useRef(null);

  useEffect(() => {
    // bannersFromDatabase
    setBanner(bannersFromDatabase[indexPicture]); //fetch url img for Banners

    setIsLoading(false);
  }, [indexPicture, setIsLoading, bannersFromDatabase]);

  return (
    <BannerContainer>
      {!isLoading ? <img src={banner} alt="Banner" /> : null}
      <ButtonContainers>
        <ButtonSlider
          onClick={() => handleSlider(indexPicture, setIndexPicture, minusRef)}
          ref={minusRef}
        >
          <FaChevronLeft />
        </ButtonSlider>
        <ButtonSlider
          onClick={() => handleSlider(indexPicture, setIndexPicture, addRef)}
          ref={addRef}
        >
          <FaChevronRight />
        </ButtonSlider>
      </ButtonContainers>
    </BannerContainer>
  );
};

export default BannerSlider;
