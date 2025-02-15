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
  
    <div className="comment">
    <div className="user-icon-container">
      <img
        className="user-icon"
        src="https://i.postimg.cc/NMgmfhgS/user-circle-svgrepo-com.png"
        alt="User Icon"
      />
    </div>
    <div className="comment-details">
      {/* Display the username */}
      <h6    className="comment-user">{user}   </h6>
      {/* Optionally display the ID */}
      <p className="comment-id">
      {text} </p>
      <div className="stars">
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
    <div className="midll">
    <div 
    style={{
      alignSelf: 'stretch',
      textAlign: 'center',
      color: '#431934',
      fontSize: '5vw', // Adjust font size based on viewport width
      fontFamily: 'Marcellus SC',
      fontWeight: '400',
      wordWrap: 'break-word',
    }}
  >
    Survey & Feedback
  </div>
     <div className="mainframe" >
    <div className="comments-list">
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