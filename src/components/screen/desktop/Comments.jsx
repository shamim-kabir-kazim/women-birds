import React from "react";
import "./Comments.css";
import Review from "./Review";
import { TbBackground } from "react-icons/tb";

const comments = [
  {
    id: 1,
    user: "shamim kabir kazim",
    text: "I Loved The Product. Recommend this website",
    rating: 5,
  },
  {
    id: 2,
    user: "User 2",
    text: "I Loved The Product. Recommend this website",
    rating: 5,
  },
  {
    id: 3,
    user: "User 3",
    text: "I Loved The Product. Recommend this website",
    rating: 4,
  },
  {
    id: 4,
    user: "User 3",
    text: "I Loved The Product. Recommend this website",
    rating: 3,
  },
  {
    id: 5,
    user: "User 3",
    text: "I Loved The Product. Recommend this website",
    rating: 4,
  },
  {
    id: 6,
    user: "User 3",
    text: "I Loved The Product. Recommend this website",
    rating: 4,
  },
  {
    id: 7,
    user: "User 3",
    text: "I Loved The Product. Recommend this website",
    rating: 5,
  },
  {
    id: 8,
    user: "User 3",
    text: "I Loved The Product. Recommend this website",
    rating: 4,
  },
  {
    id: 8,
    user: "User 3",
    text: "I Loved The Product. Recommend this website",
    rating: 4,
  },
  {
    id: 9,
    user: "User 10",
    text: "I Loved The Product. Recommend this website",
    rating: 4,
  },
  {
    id: 10,
    user: "User 10",
    text: "I Loved The Product. Recommend this website",
    rating: 4,
  },
  // Add more comments here as needed
];

const Comment = ({ id, user, text, rating }) => {
  return (
  
    <div className="R-comment">
    <div className="R-user-icon-container">
      <img
        className="R-user-icon-container"
        src="https://i.postimg.cc/NMgmfhgS/user-circle-svgrepo-com.png"
        alt="User Icon"
      />
    </div>
    <div className="R-comment-details">
      {/* Display the username */}
      <h6    className="R-comment-user">{user}   </h6>
      {/* Optionally display the ID */}
      <p className="R-comment-id">
      {text} </p>
      <div className="R-stars">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span key={i}>⭐</span>
          ))}
      </div>
    </div>
  </div>
  );
};

const CommentsList = () => {
  return (

      <div className="R-comment-main">
    <h1 className="R-comment-title">Survey & Feedback</h1>
     <div className="R-mainframe" >
    <div className="R-comments-list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          user={comment.user}
          text={comment.text}
          rating={comment.rating}
        />
        
      ))}
    </div>
    <Review/>
    </div>
    </div>

  );
};

export default CommentsList;