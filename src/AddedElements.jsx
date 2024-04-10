import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IndividualAdded from "./IndividualAdded";

const AddedElements = () => {
  //   const dispatch = useDispatch();
  const elements = useSelector((state) => state.reducer.itemList);
  if (elements.length > 0) {
    return (
      <>
        <ul>
          {elements.map((item) => (
            <li key={item.id}>
              <IndividualAdded
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
                id={item.id}
              />
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return <h1>Cart is empty</h1>;
  }
};

export default AddedElements;
