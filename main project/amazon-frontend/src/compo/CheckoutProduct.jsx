import React from "react";
import "../styles/AddButton.css";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "../States/StateProvider";
function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // romove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct" style={{margin :'15px' }}>
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info" style={{ paddingLeft: '15vh' }}>
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="add-to-cart-button">
      <span>Remove From Basket</span>
    </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
