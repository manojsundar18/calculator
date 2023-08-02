import React, { useState } from "react";
import "./App.css";
const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const handleInput = (input) => {
    setExpression(expression + input);
  };
  const clearInput = () => {
    setExpression("");
    setResult("");
  };
  const calculateResult = () => {
    let currentinput = expression;
    let tempvalue = "";
    let currentoperator = "";
    let total = 0;
    for (let i = 0; i < currentinput.length; i++) {
      const char = currentinput[i];
      if (char === '+' || char === '-' || char === "*" || char === "/" || char === "%") {
        if (currentoperator === "") {
          currentoperator = char;
          total = parseFloat(tempvalue);
          tempvalue = "";
        } else {
          if (currentoperator === "+") {
            total += parseFloat(tempvalue)
          } else if (currentoperator === "-") {
            total -= parseFloat(tempvalue)
          } else if (currentoperator === "*") {
            total *= parseFloat(tempvalue)
          } else if (currentinput = "/") {
            total /= parseFloat(tempvalue)
          } else if (currentinput = "%") {
            total %= parseFloat(tempvalue)
          }
          tempvalue = "";
          currentoperator = char;
        }
      } else {
        tempvalue += char;
      }
    }
    if (tempvalue !== "") {
      if (currentoperator === "+") {
        total += parseFloat(tempvalue)
      } else if (currentoperator === "-") {
        total -= parseFloat(tempvalue)
      } else if (currentoperator === "*") {
        total *= parseFloat(tempvalue)
      } else if (currentoperator === "/") {
        total /= parseFloat(tempvalue)
      } else if (currentoperator === "%") {
        total %= parseFloat(tempvalue)
      }
    }
    setResult(total.toString());
  };
  return (
    < div className="calculator">
      <div className="display">
        <div className="expression"><input type="text" value={expression} readOnly /></div>
        <div className="result"><input type="text" value={result} readOnly /></div>
      </div>
      <div className="buttons">
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('*')}>/</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={() => handleInput('%')}>%</button>
        <button className="clear" onClick={clearInput}>C</button>
        <button className="equals" onClick={calculateResult}>=</button>
      </div>
    </div >
  );
};
export default Calculator;