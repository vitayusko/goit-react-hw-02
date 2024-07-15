import s from "./Descriptions.module.css";

const Descriptions = () => {
  return (
    <div>
      <h1 className={s.mainName}>Sip Happens Café</h1>
      <p className={s.paragraph}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Descriptions;
