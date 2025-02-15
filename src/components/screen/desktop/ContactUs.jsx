import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-intro">
        <span>At </span>
        <span className="highlight">Women Birds</span>
        ,
        <span>
          we’re always here to assist you with your questions, concerns, or feedback.
        </span>
      </p>
      <p className="contact-us-description">
        <span>Feel free to reach out to us through any of the following channels:</span>
      </p>

      <h2 className="contact-us-subtitle">Customer Support</h2>
      <p className="contact-us-support">
        <span>
          Our friendly customer support team is available to help you with any inquiries regarding orders, delivery, returns, or anything else you need.
        </span>
      </p>
      <p className="contact-us-details">
        <span>
          <strong>Phone:</strong> +880-123-4567890
        </span>
        <br />
        <span>
          <strong>WhatsApp:</strong> +880-987-6543210
        </span>
        <br />
        <span>
          <strong>Email:</strong> support@womenbirds.com
        </span>
      </p>

      <h2 className="contact-us-subtitle">Operating Hours</h2>
      <p className="contact-us-hours">
        <span>
          <strong>Sunday to Thursday:</strong> 9:00 AM – 8:00 PM
        </span>
        <br />
        <span>
          <strong>Friday:</strong> Closed
        </span>
      </p>

      <h2 className="contact-us-subtitle">Mailing Address</h2>
      <p className="contact-us-address">
        <span>If you need to send us documents or returns, you can mail them to:</span>
        <br />
        <span className="bold">Women Birds Customer Care</span>
        <br />
        <span>House #123, Road #45, Dhanmondi, Dhaka, Bangladesh</span>
      </p>

      <h2 className="contact-us-subtitle">Follow Us on Social Media</h2>
      <p className="contact-us-social">
        <span>
          Stay updated with the latest trends, offers, and updates by following us:
        </span>
        <br />
        <span>
          <strong>Facebook:</strong>{' '}
          <a
            href="https://facebook.com/womenbirds"
            className="social-link"
          >
            facebook.com/womenbirds
          </a>
        </span>
        <br />
        <span>
          <strong>Instagram:</strong>{' '}
          <a
            href="https://instagram.com/womenbirds"
            className="social-link"
          >
            instagram.com/womenbirds
          </a>
        </span>
      </p>

      <p className="contact-us-closing">
        <span>We’d love to hear from you! Thank you for choosing </span>
        <span className="highlight">Women Birds</span>
        <span> for your fashion needs.</span>
      </p>
    </div>
  );
};

export default ContactUs;
