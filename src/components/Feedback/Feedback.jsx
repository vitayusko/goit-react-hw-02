import s from "./Feedback.module.css";
// import { Options } from "../Options/Options";

const Feedback = ({ good, neutral, bad }) => {
  return (
    <div>
      <ul className={s.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </div>
  );
};

export default Feedback;
