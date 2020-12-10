import React, { useState, useCallback } from "react";
import NumberField from "./components/NumberField/NumberField";
import "./App.css";
import KeyboardRoman from "./components/KeyboardRoman/KeyboardRoman";
import KeyboardArabic from "./components/KeyboardArabic/KeyboardArabic";
import Switch from "./components/Switch/Switch";
import {
  getArabicByRomanNumber,
  getRomanByArabicNumber,
} from "./utility/converter";
import { RomanChar, NumeralSystem, ValidArabicNumber } from "./types";

function App() {
  const [selectedNumeralSystem, setSelectedNumeralSystem] = useState<
    NumeralSystem
  >("roman");
  const [number, setNumber] = useState<RomanChar | ValidArabicNumber | string>(
    ""
  );

  const handleChangeNumeralSystem = useCallback(
    (numeralSystem: NumeralSystem) => {
      setNumber("");
      setSelectedNumeralSystem(numeralSystem);
    },
    []
  );

  const handleKeyPressed = useCallback(
    (value: RomanChar | ValidArabicNumber) => {
      setNumber((prevState) => prevState.concat(value));
    },
    []
  );

  const onClearHandler = useCallback(() => {
    setNumber("");
  }, []);

  return (
    <div className="App">
      <NumberField
        label="Arabic"
        value={
          selectedNumeralSystem === "arabic"
            ? number
            : getArabicByRomanNumber(number)
        }
        
      />
      <NumberField
        label="Roman"
        value={
          selectedNumeralSystem === "roman"
            ? number
            : getRomanByArabicNumber(number)
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
