import React, { useState } from "react";
import styled from "styled-components";

const AddToCart = ({ product }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(true);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "#232F3E",
        color: "white",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <span style={{ animation: isAnimated ? "btn-pulse 1s infinite" : "none" }}>
        Add to Cart
      </span>
    </button>
  );
};

const BtnPulse = () => {
  return {
    animation: "btn-pulse 1s infinite",
  };
};

const styledAddToCartButton = styled(AddToCart)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default styledAddToCartButton;
