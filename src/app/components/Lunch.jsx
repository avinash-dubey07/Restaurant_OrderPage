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
              {isAdded(item) ? (
                <p
                  className="mt-0"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <span>Added</span>{" "} &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              ) : (
                "Add +"
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lunch;
