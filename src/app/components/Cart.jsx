"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCartReducer, removeFromCartReducer } from "../redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addToCart = (item) => dispatch(addToCartReducer(item));
  const removeFromCart = (item) => dispatch(removeFromCartReducer(item));

  return (
    <div className="shadow border bg-gray-100 flex w-[400px] min-h-[500px] rounded-md p-3 ml-7 mt-10 mr-9">
      <div className="p-2 justify-center items-center ml-0 mt-0">
        <h3 className="font-semibold text-xl">CART</h3>
        <div>
          {cartItems.length === 0 ? (
            <p className="text-center items-center">Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 border-gray-300"
                style={{
                  borderBottom:
                    index === cartItems.length - 1 ? 0 : "1px solid grey",
                }}
              >
                <span className="w-[150px] font-medium">{item.name}</span>
                <div className="flex justify-between space-x-2 p-2 w-[120px]">
                  <button className="rounded-md border-2 border-green-400 ">
                    <button
                      onClick={() => removeFromCart(item)}
                      className="p-1 w-[36px] h-6 font-extrabold border-none text-green-700 rounded cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-green-600 p-0 font-extrabold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="p-1 w-[36px] h-6 font-bold border-none rounded text-green-700 cursor-pointer"
                    >
                      +
                    </button>
                  </button>
                </div>
                <span className="font-medium ml-9">
                  ₹ {item.quantity * item.discountedPrice}
                </span>
                <div></div>
                <hr />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
