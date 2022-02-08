import { useEffect, useState } from "react";

import { useOutletContext } from "react-router-dom";

import { getBanners } from "../../utils/information";

import {
  BannerContainer,
  ButtonContainers,
  ButtonSlider,
} from "./BannerSlider.elements";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BannerSlider = () => {
  const [banner, setBanner] = useState();
  const [indexPicture, setIndexPicture] = useState(0);
  const [isLoading, setIsLoading] = useOutletContext();

  useEffect(() => {
    getBanners().then((result) => setBanner(result[indexPicture]));

    setIsLoading(false);
  }, [indexPicture]);

  const handleSlider = (event) => {
    if (event.target.name === "+") {
      setIndexPicture(indexPicture + 1);
      if (indexPicture >= 4) {
        setIndexPicture(0);
      }
    } else {
      setIndexPicture(indexPicture - 1);
      if (indexPicture <= 0) {
        setIndexPicture(4);
      }
    }
  };

  return (
    <BannerContainer>
      <img src={banner} alt="Banner" />
      <ButtonContainers>
        <ButtonSlider onClick={handleSlider} name="-">
          <FaChevronLeft />
        </ButtonSlider>
        <ButtonSlider onClick={handleSlider} name="+">
          <FaChevronRight />
        </ButtonSlider>
      </ButtonContainers>
    </BannerContainer>
  );
};

export default BannerSlider;
