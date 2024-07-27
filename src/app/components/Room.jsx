import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOtherFieldsReducer } from "../redux/CartSlice";

const RoomNumber = () => {
  const roomNumber = useSelector((state) => state.cart.roomNumber);
  const dispatch = useDispatch();
  const setOtherFields = (item) => dispatch(setOtherFieldsReducer(item));

  return (
    <div className=" shadow border bg-gray-100 w-[400px] h-[120px] rounded-lg p-3 ml-5 mt-4 mr-9">
      <div className="ml-5">
        <h4 className="font-medium">ROOM NUMBER</h4>
      </div>
      <div className="flex justify-center items-center ml-0 mt-0">
        <input
          type="text"
          value={roomNumber}
          className="rounded-md border-none w-[350px] h-[34px]"
          onChange={(e) => setOtherFields(["roomNumber", e.target.value])}
        />
      </div>
    </div>
  );
};

export default RoomNumber;
