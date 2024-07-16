import React from "react";
import s from "./Feedback.module.css";
import Message from "../Message/Message";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  if (totalFeedback === 0) {
    return <Message message="No reviews yet." />;
  }

  return (
    <div>
      <ul className={s.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total Feedback: {totalFeedback}</li>
        <li>Positive Feedback: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
