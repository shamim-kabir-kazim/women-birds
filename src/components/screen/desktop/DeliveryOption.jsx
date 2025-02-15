import React from 'react';
import './DeliveryOption.css';

const DeliveryOption = () => {
  return (
    <div className="delivery-option">
      <h1 className="delivery-option__title">Delivery Option</h1>
      <p className="delivery-option__text">
        <span>At </span>
        <span className="delivery-option__brand">Women Birds</span>,
        <span>
          {' '}
          we’re dedicated to making your shopping experience as smooth and
          convenient as possible. Here’s everything you need to know about our
          delivery process:
        </span>
      </p>

      <h2 className="delivery-option__subtitle">Delivery Timeframe</h2>
      <p className="delivery-option__text">
        We ensure that your orders are delivered within 7 days of purchase, no
        matter where you are in Bangladesh.
      </p>

      <h2 className="delivery-option__subtitle">Delivery Areas</h2>
      <p className="delivery-option__text">
        We are proud to deliver to every location across Bangladesh. Whether
        you’re in a bustling city or a remote village, we’ll get your order to
        you.
      </p>

      <h2 className="delivery-option__subtitle">Payment Method</h2>
      <p className="delivery-option__text">
        We currently offer Cash on Delivery (COD) for all orders. Pay for your
        items when they arrive at your doorstep—no upfront payments required.
      </p>

      <h2 className="delivery-option__subtitle">Delivery Charges</h2>
      <p className="delivery-option__text">
        We strive to keep our delivery charges reasonable and transparent. Any
        applicable charges will be displayed clearly at checkout.
      </p>

      <h2 className="delivery-option__subtitle">Order Tracking</h2>
      <p className="delivery-option__text">
        Stay updated on your order’s progress! Once your package is on its way,
        we’ll share tracking details so you can monitor its journey.
      </p>

      <h2 className="delivery-option__subtitle">Need Assistance?</h2>
      <p className="delivery-option__text">
        If you have any questions or concerns about your delivery, feel free to
        contact our customer support team. We’re always here to help!
      </p>
      <p className="delivery-option__text">
        <span>Thank you for choosing </span>
        <span className="delivery-option__brand">Women Birds</span>.
        <span>
          {' '}
          We look forward to delivering style and comfort right to your door!
        </span>
      </p>
    </div>
  );
};

export default DeliveryOption;
