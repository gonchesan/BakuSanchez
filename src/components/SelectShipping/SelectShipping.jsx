import React, { useState } from "react";

const SelectShipping = () => {
  const [indexArray, setIndexArray] = useState(0);

  const optionsArray = [
    "Standard Delivery - $us 50",
    "Same Day Delivery - $us 100",
    "Overnight Shipping Services - $us 175",
    "Express Delivery - $us 200",
  ];

  const handleSelect = (e) => {
    console.log(e.target);
  };

  return (
    <ul>
      {optionsArray.map((option, index) => (
        <li onClick={handleSelect} key={index} value={index}>
          {option}
        </li>
      ))}
    </ul>
  );
};

export default SelectShipping;
