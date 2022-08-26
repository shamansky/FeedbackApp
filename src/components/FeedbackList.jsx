import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types'
import React, { Component }  from 'react';


function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf()
}

export default FeedbackList;
