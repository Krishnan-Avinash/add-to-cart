import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowCart } from "./store/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.reducer.itemList);
  const state = useSelector((state) => state.reducer.showCart);
  const showElements = () => {
    dispatch(setShowCart(state));
  };
  return (
    <>
      <header>
        <h1>WELCOME</h1>
        <button onClick={showElements}>Cart: {elements.length}</button>
      </header>
    </>
  );
};

export default Header;
