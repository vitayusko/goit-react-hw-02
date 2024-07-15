import "../index.css";
import Descriptions from "./Descriptions/Descriptions";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

const App = () => {
  return (
    <main>
      <Descriptions />
      <Options />
      <Feedback />
    </main>
  );
};

export default App;
