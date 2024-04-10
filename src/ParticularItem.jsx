import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store/cartSlice";

const ParticularItem = ({ name, id, price, desc }) => {
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(addToCart({ name, id, price, desc, totalPrice: price }));
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <h1>{desc}</h1>
      <button onClick={addCart} className="adder">
        Add to Cart
      </button>
    </div>
  );
};

export default ParticularItem;
