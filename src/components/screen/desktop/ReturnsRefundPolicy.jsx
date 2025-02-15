import React from 'react';
import './ReturnsRefundPolicy.css';

const ReturnsRefundPolicy = () => {
  return (
    <div className="returns-policy-container">
      <h1 className="returns-policy-header">Returns & Refund Policy</h1>
      <p>
        <span>At </span>
        <span className="returns-policy-brand">Women Birds</span>,
        <span>
          {' '}
          we value your satisfaction and aim to provide a seamless shopping
          experience. If you’re not completely happy with your purchase, we’re
          here to help. Please review our returns and refund policy below:
        </span>
      </p>

      <h2 className="returns-policy-subheader">Returns</h2>
      <h3 className="returns-policy-subsubheader">Eligibility for Returns:</h3>
      <p>You can return a product if:</p>
      <ul className="returns-policy-list">
        <li>It is defective or damaged.</li>
        <li>The wrong item was delivered.</li>
        <li>
          The product does not match the description provided on our website.
        </li>
      </ul>

      <h3 className="returns-policy-subsubheader">Return Period:</h3>
      <p>Returns must be initiated within 7 days of receiving your order.</p>

      <h3 className="returns-policy-subsubheader">Return Conditions:</h3>
      <p>
        The item must be unused, unwashed, and in its original packaging with
        tags intact. Products that are worn, altered, or damaged by the customer
        will not be accepted.
      </p>

      <h3 className="returns-policy-subsubheader">How to Initiate a Return:</h3>
      <p>
        To start a return, contact our customer support team with your order
        details and the reason for the return. Our team will guide you through
        the process.
      </p>

      <h2 className="returns-policy-subheader">Refunds</h2>
      <h3 className="returns-policy-subsubheader">Eligibility for Refunds:</h3>
      <p>
        Refunds are processed once the returned product is received and
        inspected. If approved, the refund will be initiated.
      </p>

      <h3 className="returns-policy-subsubheader">Refund Method:</h3>
      <p>
        For Cash on Delivery (COD) orders, refunds will be processed via a bank
        transfer or mobile payment method of your choice. Refund processing may
        take 5-7 business days after approval.
      </p>

      <h3 className="returns-policy-subsubheader">Non-Refundable Items:</h3>
      <p>
        Certain items, such as undergarments or clearance sale items, are
        non-refundable unless they are defective or damaged.
      </p>

      <h2 className="returns-policy-subheader">Exchanges</h2>
      <p>
        We currently do not offer direct exchanges. If you wish to exchange a
        product, please return it for a refund and place a new order for the
        desired item.
      </p>

      <h2 className="returns-policy-subheader">Need Help?</h2>
      <p>
        If you have any questions or concerns regarding returns or refunds,
        don’t hesitate to reach out to our customer support team. We’re here to
        assist you!
      </p>

      <p>
        <span>Thank you for shopping with </span>
        <span className="returns-policy-brand">Women Birds</span>.
        <span> Your satisfaction is our priority!</span>
      </p>
    </div>
  );
};

export default ReturnsRefundPolicy;
