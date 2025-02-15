import React, { useState } from "react";
import "./Review.css";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [opinion, setOpinion] = useState("");

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="review-system">
      <h2>Add your Opinion</h2>
      <textarea
        placeholder="Write your opinion here..."
        value={opinion}
        onChange={(e) => setOpinion(e.target.value)}
      ></textarea>
      <div className="star">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={index}
              className={starValue <= (hover || rating) ? "star filled" : "star"}
              onClick={() => handleRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <button className="add-button" >
        Add
      </button>
    </div>
  );
};

export default Review;