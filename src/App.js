import "./App.css";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import logo from "./images/freecodecamp-logo.png";
import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);

  const event = () => {
    setClicks(clicks + 1);
  };

  const reset = () => {
    setClicks(0);
  };

  return (
    <div className="App">
      <div className="logocontainer">
        <img className="logo" src={logo} alt="Logo de FreeCodeCamp" />
      </div>
      <div className="container">
        <Counter click={clicks} />
        <Button text="Increase" type={true} event={event} />
        <Button text="Reset" type={false} event={reset} />
      </div>
    </div>
  );
}

export default App;
