
import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const handleProceedToPayment = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert('Ordered successfully');
    window.location.href = '/order';
  };

  return (
    <form className='place-order' onSubmit={(e) => e.preventDefault()}>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>
        <input type='email' placeholder='Email address' />
        <input type='text' placeholder='Street' />

        <div className='multi-fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip code' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='Phone' />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 100}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 100}</b>
            </div>
          </div>
          <button type="button" onClick={handleProceedToPayment}>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

