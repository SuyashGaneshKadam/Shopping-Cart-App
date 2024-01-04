import React from "react";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
