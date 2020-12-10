import React, { useState, useCallback } from "react";

import NumberField from "./components/NumberField/NumberField";
import "./App.css";
import KeyboardRoman from "./components/KeyboardRoman/KeyboardRoman";
import KeyboardArabic from "./components/KeyboardArabic/KeyboardArabic";
import Switch from "./components/Switch/Switch";
import {
  toRomanConverter,
  toArabicConverter,
} from "./utility/converter";
import { RomanChar, NumeralSystem, ArabicPolinomialDecomposition, ValidArabicNumber } from "./types";

function App() {
  const [selectedNumeralSystem, setSelectedNumeralSystem] = useState<
    NumeralSystem
  >("roman");
  const [number, setNumber] = useState<RomanChar | ValidArabicNumber | string>("");

  const handleChangeNumeralSystem = useCallback(
    (numeralSystem: NumeralSystem) => {
      setNumber("");
      setSelectedNumeralSystem(numeralSystem);
    },
    []
  );

  const handleKeyPressed = useCallback((value: RomanChar | ValidArabicNumber) => {
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

  const getArabicByRomanNumber = useCallback(() => { // XIV
    return Array.from(number).reduce((previous, current, index) => {
      const currentDigit = toArabicConverter[current as RomanChar];
      const nextDigit = index < number.length - 1 ? toArabicConverter[number[index + 1] as RomanChar] : -1;
      return previous + (currentDigit >= nextDigit ? currentDigit : -currentDigit);
    }, 0).toString();
  }, [number]);

  const onClearHandler = useCallback(() => {
    setNumber("");
  }, []);

  return (
    <div className="App">
      <NumberField
        label="Arabic"
        value={selectedNumeralSystem === "arabic" ? number : getArabicByRomanNumber()}
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
