import React from "react";
import "../styles/Subtotal.css";
// import numeral from 'numeral';

import { useStateValue } from "../States/StateProvider";
import { Link } from "react-router-dom";

function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();
  const sumOfBasket = basket.reduce((sum, product) => sum + product.price, 0);
  return (
    <div className="subtotal">
    <h4>Subtotal {basket.length} item: {sumOfBasket} rs </h4>
    <h7> <input type="checkbox" /> This order contains a gift</h7>
    {basket.length !== 0 ? (
      <Link to="/checkoutForm">
        <button style={styles.enabledButton}>Proceed to Checkout</button>
      </Link>
    ) : (
      <button disabled style={styles.disabledButton}>
      Proceed to Checkout
    </button>
        )}
  </div>
  );
}

export default Subtotal;
const styles = {
  enabledButton: {
    backgroundColor: '#f0c14b',
    color: '#111',
    cursor: 'pointer',
  },
  disabledButton: {
    backgroundColor: '#ffffff',
    cursor: 'not-allowed',
  },
};