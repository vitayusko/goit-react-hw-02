import s from "./Feedback.module.css";
// import { Options } from "../Options/Options";

const Feedback = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const handleReset = () => {
    setTotalFeedback(0);
  };

  if (totalFeedback === 0) {
    return <Notification message="No reviews yet." />;
  }

  return (
    <div>
      <ul className={s.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <button onClick={handleReset} className={s.button}>
        Reset
      </button>
    </div>
  );
};

export default Feedback;
