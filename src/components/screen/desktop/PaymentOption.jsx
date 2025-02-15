import React from 'react';
import './PaymentOption.css';

const PaymentOption = () => {
  return (
    <div className="payment-option-container">
      <h1 className="payment-option-header">Payment Option</h1>
      <p>
        <span>At </span>
        <span className="payment-option-brand">Women Birds</span>,
        <span>
          {' '}
          we believe in keeping things simple and secure for our customers. To
          ensure a hassle-free shopping experience, we currently offer the
          following payment method:
        </span>
      </p>

      <h2 className="payment-option-subheader">Cash on Delivery (COD)</h2>
      <p>
        We understand the importance of trust and convenience, which is why we
        provide Cash on Delivery (COD) as our sole payment method. Here’s how it
        works:
      </p>
      <ul className="payment-option-list">
        <li>Pay for your order when it is delivered to your doorstep.</li>
        <li>
          No need to worry about online payments or card details—simply inspect
          your order and make the payment in cash.
        </li>
      </ul>

      <h3 className="payment-option-subsubheader">
        Why Choose Cash on Delivery?
      </h3>
      <ul className="payment-option-list">
        <li>
          <strong>Secure and Reliable:</strong> No upfront payment means you
          only pay when you receive your product.
        </li>
        <li>
          <strong>Convenient:</strong> No need for credit cards, bank transfers,
          or online wallets.
        </li>
        <li>
          <strong>Peace of Mind:</strong> Shop confidently knowing you’ll pay
          only after receiving your order.
        </li>
      </ul>

      <h2 className="payment-option-subheader">Important Notes</h2>
      <p>
        Please ensure that you have the exact amount ready at the time of
        delivery, as our delivery personnel may not always carry change.
      </p>
      <p>COD is available for all orders across Bangladesh.</p>

      <h2 className="payment-option-subheader">Need Help?</h2>
      <p>
        If you have any questions or concerns about the payment process, feel
        free to contact our customer support team:
      </p>
      <p>Phone: +880-123-4567890</p>
      <p>Email: support@womenbirds.com</p>

      <p>
        <span>Thank you for choosing </span>
        <span className="payment-option-brand">Women Birds</span>.
        <span> Happy shopping!</span>
      </p>
    </div>
  );
};

export default PaymentOption;
