import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./store/cartSlice";

const IndividualAdded = ({ name, price, quantity, totalPrice, id }) => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(addToCart({ name, price, id }));
  };
  const decrement = () => {
    dispatch(removeFromCart({ id, quantity, totalPrice, price }));
  };
  return (
    <div className="container2">
      <div className="card">
        <h3 className="first">{name}</h3>
        <h3 className="second">{price}</h3>
        <h3 className="third">{quantity}</h3>
        <h3 className="forth">{totalPrice}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default IndividualAdded;
