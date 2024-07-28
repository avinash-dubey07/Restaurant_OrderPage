"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartReducer } from "../redux/CartSlice";

const Lunch = ({ items }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState({});


  const addToCart = (item) => {
    dispatch(addToCartReducer(item));
    setAddedItems((prev) => ({...prev, [item.name] : true }))
  };

  const isAdded = (item) => {
    return addedItems[item.name] || cartItems.some((cartItem) => cartItem.name === item.name);
  };


  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-medium">Lunch</h2>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="p-10 mt-6 w-[800px] h-auto flex shadow border border-gray-300 rounded-lg"
        >
          <div className="flex-1">
            <h3 className="font-medium">{item.name}</h3>
            <strong>₹ {item.discountedPrice}</strong> &nbsp; &nbsp;
            <em className="line-through">₹ {item.originalPrice}</em>
            <p className="text-gray-500">{item.description}</p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              <span className="mt-1 ml-1">{item.timeInMins} mins</span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <>
              <div style={{ position: "relative" }}>
                <img
                  className="rounded-lg w-[150px] h-[150px] object-cover"
                  src={item.foodImage}
                  alt={item.name}
                />
                <img
                  src="/Images/green.jpg"
                  style={{
                    width: 12,
                    height: 12,
                    position: "absolute",
                    top: 8,
                    left: 8,
                  }}
                  alt="sign"
                />
              </div>
            </>
            <button
              onClick={() => addToCart(item)}
              style={{ zIndex: 2 }}
              className="bg-green-600 p-1 w-[70px] h-6 font-bold border-none rounded text-white cursor-pointer -mt-3"
            >
              {isAdded(item) ? "Added +" : "Add +"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lunch;
