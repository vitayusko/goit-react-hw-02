import s from "./Feedback.module.css";

const Feedback = () => {
  return (
    <div>
          <ul className={ s.list}>
        <li>Good:</li>
        <li>Neutral:</li>
        <li>Bad:</li>
      </ul>
    </div>
  );
};

export default Feedback;
