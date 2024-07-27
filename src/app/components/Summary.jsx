import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
   const cartItems = useSelector((state) => state.cart.cartItems);

   const subTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.discountedPrice, 0
   );

   const gstCharges = Math.round(subTotal * 0.18);
   const couponDiscountedAmount = subTotal * 0.10;
   const netPayable = subTotal + couponDiscountedAmount + gstCharges;
   
  return (
    <div className=" shadow border bg-gray-100 w-[400px] h-[200px] font-medium rounded-lg p-3 ml-5 mt-4 mr-9">
      <div className='ml-5'>
      <h4 className="font-medium">SUMMARY</h4>
      </div>
     <div className='flex justify-between ml-5 mr-3'>
        <span>Subtotal</span>
        <span>₹ {subTotal}</span>
     </div>
     <div className='flex justify-between ml-5 mr-3 text-green-500 mt-3'>
        <span>FLAT10%OFF</span>
        <span>- {couponDiscountedAmount}</span>
     </div>
     <div className='flex justify-between ml-5 mr-3 mt-3'>
        <span className='text-gray-400'>GST and other Charges</span>
        <span>₹ {gstCharges}</span>
     </div>
      <hr className='ml-5 mr-3 bg-gray-400' />
      <div className='flex justify-between ml-5 mr-3 mt-3'>
        <span>Net Payable</span>
        <span>₹ {netPayable}</span>
     </div>
      </div>
  )
}

export default Summary;