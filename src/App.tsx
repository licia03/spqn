import React, { useState, useCallback } from "react";

import NumberField from "./components/NumberField/NumberField";
import "./App.css";
import KeyboardRoman from "./components/KeyboardRoman/KeyboardRoman";
import KeyboardArabic from "./components/KeyboardArabic/KeyboardArabic";
import Switch from "./components/Switch/Switch";
import { RomanValue, ArabicValue } from "./components/Key/Key";
import {
  toRomanConverter,
  ArabicPolinomialDecomposition,
} from "./utility/converter";

export type NumeralSystem = "arabic" | "roman";

function App() {
  const [selectedNumeralSystem, setSelectedNumeralSystem] = useState<
    NumeralSystem
  >("roman");
  const [number, setNumber] = useState<RomanValue | ArabicValue | string>("");

  const handleChangeNumeralSystem = useCallback(
    (numeralSystem: NumeralSystem) => {
      setNumber("");
      setSelectedNumeralSystem(numeralSystem);
    },
    []
  );

  const handleKeyPressed = useCallback((value: RomanValue | ArabicValue) => {
    setNumber((prevState) => prevState.concat(value));
  }, []);

  const getRomanByArabicNumber = useCallback(() => {
    return Array.from(number).reduce((previous, current, index) => {
      const digit = (
        +current * Math.pow(10, number.length - index - 1)
      ).toString() as ArabicPolinomialDecomposition;
      return previous + toRomanConverter[digit];
    }, "");
  }, [number]);

  const onClearHandler = useCallback(() => {
    setNumber("");
  }, []);

  return (
    <div className="App">
      <NumberField
        label="Arabic"
        value={selectedNumeralSystem === "arabic" ? number : "11"}
      />
      <NumberField
        label="Roman"
        value={
          selectedNumeralSystem === "roman" ? number : getRomanByArabicNumber()
        }
      />
      <Switch
        numeralSystem={selectedNumeralSystem}
        onChange={handleChangeNumeralSystem}
      />
      <button onClick={onClearHandler}>CLEAR</button>
      {selectedNumeralSystem === "roman" && (
        <KeyboardRoman onKeyPressed={handleKeyPressed} />
      )}
      {selectedNumeralSystem === "arabic" && (
        <KeyboardArabic onKeyPressed={handleKeyPressed} />
      )}
    </div>
  );
}

export default App;
