import s from "./Options.module.css";

const Options = ({ updateFeedback }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={() => updateFeedback("good")} className={s.button}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className={s.button}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={s.button}>
        Bad
      </button>
    </div>
  );
};

export default Options;
