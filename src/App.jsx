import React from "react";
import Items from "./Items";
import Header from "./Header";
import AddedElements from "./AddedElements";
import { useSelector } from "react-redux";

const App = () => {
  const checkState = useSelector((state) => state.reducer.showCart);

  return (
    <>
      <Header />
      <Items />
      {checkState && <AddedElements />}
    </>
  );
};

export default App;
