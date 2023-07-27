import { useState } from "react";
import "./App.css";

function App() {
  const [digit, setDigit] = useState(0);
  const [prevDigit, setPreviousDigit] = useState("");
  const [operator, setOperator] = useState("");

  const insert = (event) => {
    if (
      digit === 0 ||
      digit === "/" ||
      digit === "+" ||
      digit === "*" ||
      digit === "-"
    ) {
      setDigit(event.target.value);
    } else {
      setDigit((prevDigit) => prevDigit + event.target.value);
    }
  };

  const divide = () => {
    setPreviousDigit(digit);
    setDigit("/");
    setOperator("/");
  };

  const multiply = () => {
    if (operator !== "") setPreviousDigit(digit);
    setDigit("*");
    setOperator("*");
  };

  const add = () => {
    setPreviousDigit(digit);
    setDigit("+");
    setOperator("+");
  };

  const subtract = () => {
    setPreviousDigit(digit);
    setDigit("-");
    setOperator("-");
  };

  const equal = () => {
    const prevNumber = Number(prevDigit);
    const nextNumber = Number(digit);
    if (operator === "/") {
      const res = prevNumber / nextNumber;
      setDigit(res);
    }
    if (operator === "+") {
      const res = prevNumber + nextNumber;
      setDigit(res);
    }
    if (operator === "-") {
      const res = prevNumber - nextNumber;
      setDigit(res);
    }
    if (operator === "*") {
      const res = prevNumber * nextNumber;
      setDigit(res);
    }
    setOperator("");
  };

  const ac = () => {
    setDigit(0);
    setPreviousDigit("");
    setOperator("");
  };

  return (
    <div className="App">
      <div className="display">
        <div className="formula">
          <b>{digit}</b>
        </div>
      </div>
      <div className="digits">
        <div className="first-row">
          <button onClick={ac} id="ac">
            <b>AC</b>
          </button>
          <button onClick={divide} value="/" className="operation" id="divide">
            <b>/</b>
          </button>
          <button
            onClick={multiply}
            value="*"
            className="operation"
            id="multiply"
          >
            <b>x</b>
          </button>
        </div>
        <div className="second-row">
          <button value={9} onClick={insert} className="numbers" id="nine">
            9
          </button>
          <button onClick={insert} value={8} className="numbers" id="eight">
            8
          </button>
          <button onClick={insert} value={7} className="numbers" id="seven">
            7
          </button>
          <button onClick={subtract} value="-" className="operation" id="minus">
            -
          </button>
        </div>
        <div className="second-row">
          <button onClick={insert} value={6} className="numbers" id="six">
            6
          </button>
          <button onClick={insert} value={5} className="numbers" id="five">
            5
          </button>
          <button onClick={insert} value={4} className="numbers" id="four">
            4
          </button>
          <button onClick={add} value="+" className="operation" id="plus">
            +
          </button>
        </div>
        <div className="fourth-row">
          <button onClick={insert} value={3} className="numbers" id="three">
            3
          </button>
          <button onClick={insert} value={2} className="numbers" id="two">
            2
          </button>
          <button onClick={insert} value={1} className="numbers" id="one">
            1
          </button>
          <button onClick={equal} value="+" className="operation" id="equal">
            =
          </button>
        </div>
        <div className="fifth-row">
          <button onClick={insert} value={0} className="numbers" id="zero">
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
