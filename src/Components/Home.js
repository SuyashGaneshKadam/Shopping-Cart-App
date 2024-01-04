import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchData,
  addItem,
  removeItem,
  clearCart,
} from "../redux/features/shopSlice";
import axios from "axios";
import "./Home.css"

const Home = () => {
  const list = useSelector((state) => state.shop.allItems);
  //   console.log(list);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // console.log(response.data.products);
        dispatch(fetchData(response.data.products));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>All Items</h1>
      <div id="container">
        {list.length > 0 &&
          list.map((item) => (
            <div className="card" key={item.id}>
              <img className="card-img" src={item.thumbnail} alt="Item Image" />
              <p>Title: {item.title}</p>
              <p>Price: ${item.price}</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
