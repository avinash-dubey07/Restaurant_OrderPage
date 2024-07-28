import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOtherFieldsReducer } from "../redux/CartSlice";

const Instructions = () => {
  const specialInstructions = useSelector(
    (state) => state.cart.specialInstructions
  );
  const dispatch = useDispatch();
  const setOtherFields = (item) => dispatch(setOtherFieldsReducer(item));

  return (
    <div className=" shadow border bg-gray-100 w-[400px] h-[200px] rounded-lg p-3 ml-7 mt-4 mr-9">
      <div className="ml-5">
        <h4 className="font-medium">SPECIAL INSTRUCTIONS</h4>
      </div>
      <div className="flex justify-center items-center ml-0 mt-0">
        <input
          type="text"
          value={specialInstructions}
          className="rounded-md border-none w-[350px] h-[115px] "
          onChange={(e) =>
            setOtherFields(["specialInstructions", e.target.value])
          }
        />
      </div>
    </div>
  );
};

export default Instructions;
