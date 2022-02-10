import React from "react";

//Styled Components
import {
  ButtonArrow,
  Option,
  Options,
  SelectedOptions,
  WrapperSelect,
} from "./SelectShipping.elements";

//Icons
import { GoChevronDown } from "react-icons/go";

const SelectShipping = ({
  isVisible,
  setisVisible,
  indexArray,
  setIndexArray,
}) => {
  const optionsArray = [
    "Standard Delivery - $us 50",
    "Same Day Delivery - $us 100",
    "Overnight Shipping - $us 175",
    "Express Delivery - $us 200",
  ];

  const handleSelect = (e) => {
    setIndexArray(e.target.value);
    setisVisible(false);
  };

  const showOptions = () => setisVisible(!isVisible);

  return (
    <>
      <WrapperSelect>
        <Options isVisible={isVisible}>
          {optionsArray.map((option, index) => (
            <Option onClick={handleSelect} key={index} value={index}>
              {option}
            </Option>
          ))}
        </Options>
        <SelectedOptions>
          <p>
            {indexArray > -1 ? optionsArray[indexArray] : "Select an option"}
          </p>
        </SelectedOptions>
        <ButtonArrow onClick={showOptions}>
          <GoChevronDown />
        </ButtonArrow>
      </WrapperSelect>
    </>
  );
};

export default SelectShipping;
