import React from "react";
import ParticularItem from "./ParticularItem";
import "./styles/items.scss";

const Items = () => {
  const items = [
    { name: "Laptop", price: 123, desc: "new laptop", id: 1 },
    { name: "Shoes", price: 12, desc: "new shoe", id: 2 },
  ];
  return (
    <>
      <div className="container">
        <ul>
          {items.map((item) => (
            <li key={item.price}>
              <ParticularItem
                name={item.name}
                price={item.price}
                desc={item.desc}
                id={item.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Items;
