import { useEffect, useState } from "react";

//Styled Components
import {
  Carrousel,
  ImageSelected,
  SliderContainer,
} from "./ItemDetailSlider.elements";

const ItemDetailSlider = ({ pictures }) => {
  const [imagePreview, setImagePreview] = useState();

  useEffect(() => {
    if (pictures !== undefined) {
      setImagePreview(pictures[0]);
    }
  }, [pictures]);

  const selectPicture = (url) => {
    setImagePreview(url);
  };

  return (
    <>
      {pictures !== undefined && (
        <SliderContainer>
          <ImageSelected src={imagePreview} />
          <Carrousel>
            {pictures.map((url, index) => {
              return (
                <img
                  onClick={() => {
                    selectPicture(url);
                  }}
                  key={index}
                  src={url}
                  alt={`detail_${index}`}
                />
              );
            })}
          </Carrousel>
        </SliderContainer>
      )}
    </>
  );
};

export default ItemDetailSlider;
