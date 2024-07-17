import React from "react";
import s from "./Feedback.module.css";
import Message from "../Notification/Notification";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
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
