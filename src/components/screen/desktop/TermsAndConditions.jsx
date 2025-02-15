import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-heading">Terms & Conditions</h1>
      <p className="terms-intro">
        Welcome to <span className="highlight">Women Birds</span>! By using our
        website and services, you agree to the following terms and conditions.
        Please read them carefully before making any purchase or using our
        platform.
      </p>

      <h2 className="terms-subheading">1. General Terms</h2>
      <ul className="terms-list">
        <li>
          By accessing or using our website, you agree to comply with these
          terms.
        </li>
        <li>
          We reserve the right to update or modify these terms at any time
          without prior notice.
        </li>
        <li>
          It is your responsibility to review the terms periodically for any
          changes.
        </li>
      </ul>

      <h2 className="terms-subheading">2. Product Information</h2>
      <p className="terms-paragraph">
        We strive to provide accurate descriptions and images of our products.
        However, slight variations in color, size, or design may occur due to
        photography or display settings.
        <br />
        All prices listed on our website are in Bangladeshi Taka (BDT) and are
        subject to change without prior notice.
      </p>

      <h2 className="terms-subheading">3. Order and Payment</h2>
      <p className="terms-paragraph">
        Orders can only be placed by individuals who are 18 years or older.
        <br />
        We offer Cash on Delivery (COD) as the only payment method. Payment is
        required in full upon delivery.
      </p>

      <h2 className="terms-subheading">4. Delivery Policy</h2>
      <p className="terms-paragraph">
        We deliver to all locations in Bangladesh within 7 days of order
        confirmation.
        <br />
        Customers are responsible for providing accurate delivery information.
        We are not liable for delays or failed deliveries caused by incorrect
        details.
      </p>

      <h2 className="terms-subheading">5. Returns and Refunds</h2>
      <p className="terms-paragraph">
        Returns are accepted within 7 days of delivery if the product is
        defective, damaged, or incorrect.
        <br />
        Refunds will be processed after the returned item is inspected and
        approved. For more details, please refer to our Returns and Refund
        Policy.
      </p>

      <h2 className="terms-subheading">6. Intellectual Property</h2>
      <p className="terms-paragraph">
        All content on the Women Birds website, including text, images, logos,
        and designs, is the property of Women Birds and is protected by
        copyright laws.
        <br />
        You may not use, reproduce, or distribute any content without our prior
        written consent.
      </p>

      <h2 className="terms-subheading">7. Privacy Policy</h2>
      <p className="terms-paragraph">
        We respect your privacy and are committed to protecting your personal
        information. Please refer to our Privacy Policy for details on how we
        collect, use, and store your data.
      </p>

      <h2 className="terms-subheading">8. Limitation of Liability</h2>
      <p className="terms-paragraph">
        Women Birds is not responsible for any direct, indirect, or
        consequential damages arising from the use of our website or products.
        <br />
        Our liability is limited to the amount paid for the product in question.
      </p>

      <h2 className="terms-subheading">9. Governing Law</h2>
      <p className="terms-paragraph">
        These terms and conditions are governed by the laws of Bangladesh. Any
        disputes will be subject to the exclusive jurisdiction of the courts in
        Bangladesh.
      </p>

      <h2 className="terms-subheading">10. Contact Us</h2>
      <p className="terms-paragraph">
        If you have any questions about these terms, please contact us:
        <br />
        <strong>Phone:</strong> +880-123-4567890
        <br />
        <strong>Email:</strong> support@womenbirds.com
      </p>

      <p className="terms-closing">
        Thank you for choosing <span className="highlight">Women Birds</span>.
        We look forward to serving you!
      </p>
    </div>
  );
};

export default TermsAndConditions;
