import React, { useState, useCallback } from "react";

import NumberField from "./components/NumberField/NumberField";
import "./App.css";
import KeyboardRoman from "./components/KeyboardRoman/KeyboardRoman";
import KeyboardArabic from "./components/KeyboardArabic/KeyboardArabic";
import Switch from "./components/Switch/Switch";
import { RomanValue, ArabicValue } from "./components/Key/Key";

export type NumeralSystem = "arabic" | "roman";

function App() {
  const [selectedNumeralSystem, setSelectedNumeralSystem] = useState<
    NumeralSystem
  >("roman");
  const [number, setNumber] = useState<RomanValue | ArabicValue | string>("");

  const handleChangeNumeralSystem = useCallback((numeralSystem: NumeralSystem) => {
    setNumber('');
    setSelectedNumeralSystem(numeralSystem);
  }, []);

  const handleKeyPressed = useCallback((value: RomanValue | ArabicValue) => {
    setNumber((prevState) => prevState.concat(value));
  }, []);

  return (
    <div className="App">
      <NumberField
        label="Arabic"
        value={selectedNumeralSystem === "arabic" ? number : "11"}
      />
      <NumberField
        label="Roman"
        value={selectedNumeralSystem === "roman" ? number : "II"}
      />
      <Switch
        numeralSystem={selectedNumeralSystem}
        onChange={handleChangeNumeralSystem}
      />
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
