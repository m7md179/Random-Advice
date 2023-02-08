import { useEffect, useState } from "react";
import "./App.css";
import Dice from "./icon-dice.svg";
import Divider from "./pattern-divider-desktop.svg";

function App() {
  const [click, setClick] = useState(0);
  const [advices, setAdvice] = useState({
    slip: {
      id: "",
      advice: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://api.adviceslip.com/advice");
      const jsonResult = await result.json();
      return jsonResult;
    };
    fetchData().then((jsonResult) => {
      setAdvice(jsonResult);
    });
  }, [click]);

  return (
    <div>
      <div className="card">
        <p className="advice-num">ADVICE #{advices.slip.id}</p>
        <p className="advice">{advices.slip.advice}</p>
        <img src={Divider} alt="divider" />
        <div className="dice">
          <img src={Dice} alt="dice" onClick={() => setClick(click + 1)} />
        </div>
      </div>
    </div>
  );
}

export default App;
