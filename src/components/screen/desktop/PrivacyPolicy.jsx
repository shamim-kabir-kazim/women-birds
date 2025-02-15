import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-heading">Privacy Policy</h1>
      <p className="privacy-paragraph">
        <span>At </span>
        <span className="privacy-highlight">Women Birds</span>,
        <span>
          {' '}
          your privacy is our priority. This Privacy Policy outlines how we
          collect, use, and protect your personal information when you use our
          website and services. By accessing our platform, you agree to the
          practices described below.
        </span>
      </p>

      <h2 className="privacy-subheading">1. Information We Collect</h2>
      <p className="privacy-paragraph">
        We collect personal information to provide you with a seamless shopping
        experience. This includes:
      </p>
      <ul className="privacy-list">
        <li className="privacy-list-item">
          <strong>Personal Details:</strong> Name, address, phone number, and
          email address when you place an order or contact us.
        </li>
        <li className="privacy-list-item">
          <strong>Order Details:</strong> Information about the products you
          purchase.
        </li>
        <li className="privacy-list-item">
          <strong>Usage Data:</strong> Your browsing activity on our website,
          including pages viewed and time spent.
        </li>
      </ul>

      <h2 className="privacy-subheading">2. How We Use Your Information</h2>
      <p className="privacy-paragraph">
        We use the information collected for the following purposes:
      </p>
      <ul className="privacy-list">
        <li className="privacy-list-item">
          To process and deliver your orders.
        </li>
        <li className="privacy-list-item">
          To communicate with you regarding your orders, inquiries, or updates.
        </li>
        <li className="privacy-list-item">
          To improve our website, services, and customer experience.
        </li>
        <li className="privacy-list-item">
          To send promotional offers, discounts, or newsletters (only if you’ve
          opted in).
        </li>
      </ul>

      <h2 className="privacy-subheading">3. Sharing Your Information</h2>
      <p className="privacy-paragraph">
        We value your trust and ensure that your personal information is kept
        secure. We do not sell or share your data with third parties, except in
        the following cases:
      </p>
      <ul className="privacy-list">
        <li className="privacy-list-item">
          To trusted service providers who assist in processing payments,
          deliveries, or technical support.
        </li>
        <li className="privacy-list-item">
          If required by law or government authorities.
        </li>
      </ul>

      <h2 className="privacy-subheading">4. Cookies</h2>
      <p className="privacy-paragraph">
        Our website uses cookies to enhance your browsing experience. Cookies
        are small files stored on your device that help us:
      </p>
      <ul className="privacy-list">
        <li className="privacy-list-item">
          Recognize you when you visit our site.
        </li>
        <li className="privacy-list-item">
          Save your preferences for future visits.
        </li>
        <li className="privacy-list-item">
          Analyze website traffic to improve functionality.
        </li>
      </ul>
      <p className="privacy-paragraph">
        You can disable cookies in your browser settings, but this may affect
        your experience on our site.
      </p>

      <h2 className="privacy-subheading">5. Data Security</h2>
      <p className="privacy-paragraph">
        We take reasonable precautions to protect your personal information from
        unauthorized access, alteration, or misuse. However, no online platform
        is entirely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="privacy-subheading">6. Your Rights</h2>
      <p className="privacy-paragraph">As a customer, you have the right to:</p>
      <ul className="privacy-list">
        <li className="privacy-list-item">
          Access the personal data we hold about you.
        </li>
        <li className="privacy-list-item">
          Request corrections or updates to your information.
        </li>
        <li className="privacy-list-item">
          Opt-out of receiving promotional communications at any time.
        </li>
      </ul>
      <p className="privacy-paragraph">
        To exercise these rights, please contact us at{' '}
        <span className="privacy-highlight">support@womenbirds.com</span>.
      </p>

      <h2 className="privacy-subheading">7. Third-Party Links</h2>
      <p className="privacy-paragraph">
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices of these external sites and
        recommend reviewing their privacy policies before sharing any
        information.
      </p>

      <h2 className="privacy-subheading">8. Updates to This Policy</h2>
      <p className="privacy-paragraph">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, and the updated policy will be effective
        immediately.
      </p>

      <h2 className="privacy-subheading">9. Contact Us</h2>
      <p className="privacy-paragraph">
        If you have any questions or concerns about this Privacy Policy, please
        reach out to us:
        <br />
        <strong>Phone:</strong> +880-123-4567890
        <br />
        <strong>Email:</strong> support@womenbirds.com
      </p>

      <p className="privacy-paragraph">
        Thank you for trusting{' '}
        <span className="privacy-highlight">Women Birds</span>. We are committed
        to safeguarding your privacy while providing you with the best shopping
        experience!
      </p>
    </div>
  );
};

export default PrivacyPolicy;
