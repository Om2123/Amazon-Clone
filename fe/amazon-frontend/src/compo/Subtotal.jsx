import React from "react";
import "../styles/Subtotal.css";
// import numeral from 'numeral';

import { useStateValue } from "../States/StateProvider";
import { getBasketTotal} from "../States/reducer";
import { Link } from "react-router-dom";

function Subtotal() {
  // const formattedValue = getBasketTotal(basket).toFixed(2);

  const [{ basket }, dispatch] = useStateValue();
  const sumOfBasket = basket.reduce((sum, product) => sum + product.price, 0);
  return (
    <div className="subtotal">
      {/* <p>
        Subtotal ({basket.length} items): <strong>{formattedValue}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This Order Contains a gift
      </small> */}
      <h4>Subtotal  { basket.length} item: {sumOfBasket} rs </h4>
      <h7> <input type="checkbox" name="" id="" /> This order contains a gift</h7>
      <Link to="/checkout">

        </Link>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
