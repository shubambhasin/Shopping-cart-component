import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [empty, setEmpty] = useState("Cart Empty, click to buy !");

  const addToCart = (e) => {
    setCart((cart) => [...cart, e.target.value]);
    setEmpty("");
  };
  console.log(cart);

  return (
    <div className="App">
      <div className="goods">
        <button value="iphone 12 Pro Max 📱" onClick={addToCart}>
          iphone 12 Pro Max 📱
        </button>
        <button value="MacBook Pro M1 💻" onClick={addToCart}>
          MacBook Pro M1 💻
        </button>
        <button value="Sony alpha7📷 " onClick={addToCart}>
          Sony alpha7📷
        </button>
        <button value="Samsung curve 📺 " onClick={addToCart}>
          Samsung curve 📺
        </button>
      </div>
      <h1 style={{ textAlign: "center" }}>🛒</h1>
      <h3>{empty}</h3>

      <div className="cart">
        <ul className="cart-list">
          {cart.map((item, index) => {
            return (
              <li key={index} className="item-bars">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
