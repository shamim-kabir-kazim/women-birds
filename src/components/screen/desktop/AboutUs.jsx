import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-intro">
        <span>Welcome to </span>
        <span className="highlight">Women Birds</span>
        ,
        <span> your ultimate destination for stylish and affordable fashion!</span>
      </p>
      <p className="about-us-description">
        <span>
          At Women Birds, we believe that everyone deserves to express themselves through fashion without breaking the bank.
        </span>
        <span>
          That’s why we’re dedicated to offering a curated collection of trendy, high-quality clothing and accessories for every occasion.
        </span>
      </p>
      <h2 className="about-us-subtitle">What Makes Us Different?</h2>
      <ul className="about-us-list">
        <li className="about-us-list-item">
          <span>
            <strong>Style for Everyone:</strong> Our collection caters to all tastes, from classic to contemporary, ensuring there’s something for everyone.
          </span>
        </li>
        <li className="about-us-list-item">
          <span>
            <strong>Quality You Can Trust:</strong> We source only the finest materials to ensure every piece you buy is comfortable, durable, and chic.
          </span>
        </li>
        <li className="about-us-list-item">
          <span>
            <strong>Affordable Prices:</strong> Great style shouldn’t cost a fortune. We’re here to make fashion accessible to everyone.
          </span>
        </li>
      </ul>
      <h2 className="about-us-subtitle">Our Mission</h2>
      <p className="about-us-mission">
        <span>
          We’re more than just a clothing store—we’re a community that celebrates individuality and creativity.
        </span>
        <span>
          Our mission is to inspire confidence and help you embrace your unique style with pieces that make you look and feel amazing.
        </span>
      </p>
      <h2 className="about-us-subtitle">Shop With Confidence</h2>
      <p className="about-us-confidence">
        <span>Your satisfaction is our priority. </span>
        <span>
          With easy returns, secure payment options, and exceptional customer support, shopping with us is always a breeze.
        </span>
      </p>
      <p className="about-us-closing">
        <span>Join the </span>
        <span className="highlight">Women Birds</span>
        <span> family today and redefine your wardrobe with outfits you’ll love.</span>
      </p>
    </div>
  );
};

export default AboutUs;
