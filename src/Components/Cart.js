import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/features/shopSlice";
import "./Cart.css";

const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.shop);
  //   console.log(list);
  //   const amt = useSelector((state) => state.shop.totalAmount);
  //   console.log(amt);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>My Cart</h1>
      {cartItems.length === 0 && <h4 style={{textAlign:"center"}}>No items added ☹️. Please add some items in the cart from the Home Page.</h4>}
      <div id="main-container">
        <div id="cart-container">
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <div className="card" key={item.id}>
                <img
                  className="card-img"
                  src={item.thumbnail}
                  alt="Item Image"
                />
                <p>Title: {item.title}</p>
                <p>Price: ${item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => {
                    dispatch(removeItem({ id: item.id, price: item.price }));
                  }}
                >
                  Remove From Cart
                </button>
              </div>
            ))}
        </div>
        {cartItems.length > 0 && (
          <div id="checkout-list">
            <p id="list-title">Checkout list</p>
            {cartItems.length > 0 &&
              cartItems.map((item, index) => (
                <div key={item.id} className="item-data">
                  <p>
                    {index + 1}. {item.title}
                  </p>
                  <p>${item.price}</p>
                </div>
              ))}
            <div className="item-data total-container">
              <p style={{ fontWeight: "bold" }}>Total</p>
              <p>$ {totalAmount}</p>
            </div>
            <button
              id="checkout-btn"
              onClick={() => {
                dispatch(clearCart());
                alert("Items have been checkout out.");
              }}
            >
              Click to checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
