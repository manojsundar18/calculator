import React, { useState } from "react";


const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (value) => {
    
    if (value === "C") {
      
      setDisplayValue("0");
    } else if (value === "=") {
      
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        
        setDisplayValue("Error");
      }
    } else {
      
      setDisplayValue((prevValue) =>
        prevValue === "0" ? value : prevValue + value
      );
    }
  };


  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C",
  ];

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {buttons.map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
