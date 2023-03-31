import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleRemoveCartItems = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1>Cart page {cartItems.length} </h1>
      <button onClick={() => handleRemoveCartItems()}>Clear cart</button>
      {cartItems.map((item) => {
        return <>{/* <Food key=item.id {...item}/> */}</>;
      })}
    </div>
  );
};

export default Cart;
