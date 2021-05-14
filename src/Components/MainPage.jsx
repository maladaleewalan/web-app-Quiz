import React, { useState } from "react";
import "./../App.css";

function MainPage() {
  const [number, setNumber] = useState("");
  const [calculation, setCalculation] = useState("Prime");
  const [result, setResult] = useState("");

  function validate(value) {
    if (value < 1) {
      setNumber(1);
      calculate(1, calculation);
    } else if (value % 1 !== 0) {
      setNumber(Math.round(value));
      calculate(Math.round(value), calculation);
    } else {
      calculate(number, calculation);
    }
  }

  function isPrimeNumber(numberValue) {
    setResult("");
    if (numberValue >= 2) {
      if (numberValue === 2) {
        setResult(true);
      } else {
        for (var i = 2; i < numberValue; i++) {
          if (numberValue % i === 0) {
            setResult(false);
            return;
          }
        }
        setResult(true);
      }
    } else {
      setResult(false);
    }
  }

  function isFibonacci(numberValue) {
    setResult("");
    var fib = [0, 1];
    var total = 1;
    let i = 2;
    while (total <= numberValue) {
      total = fib[i - 1] + fib[i - 2];
      fib[i] = total;
      if (total === numberValue) {
        setResult(true);
        return;
      }
      i++;
    }
    setResult(false);
  }

  function calculate(numberValue, calValue) {
    if (numberValue !== "") {
      if (calculation === "Prime") {
        isPrimeNumber(Number(numberValue));
      } else {
        isFibonacci(Number(numberValue));
      }
    } else {
      setResult("");
    }
  }

  return (
    <div className="container">
      <div className="col-1">
        <form>
          <input
            type="text"
            id="number"
            name="number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            onBlur={(e) => {
              validate(e.target.value);
            }}
          />
        </form>
      </div>

      <div className="col-2">
        <select
          value={calculation}
          onChange={(e) => {
            setCalculation(e.target.value);
          }}
          onBlur={(e) => {
            calculate(number, calculation);
          }}
        >
          <option value="Prime">isPrime</option>
          <option value="Fibonacci">isFibonacci</option>
        </select>
      </div>
      <div className="col-3">{String(result)}</div>
    </div>
  );
}

export default MainPage;
