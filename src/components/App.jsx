import React, { useState } from "react";
import "../index.css";
import Descriptions from "./Descriptions/Descriptions";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <main>
      <Descriptions />
      <Options updateFeedback={updateFeedback} />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </main>
  );
};

export default App;
