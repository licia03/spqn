import React, { useState, useCallback, useEffect } from "react";
import NumberField from "./components/NumberField/NumberField";
import "./App.css";
import KeyboardRoman from "./components/KeyboardRoman/KeyboardRoman";
import KeyboardArabic from "./components/KeyboardArabic/KeyboardArabic";
import Switch from "./components/Switch/Switch";
import {
  getArabicByRomanNumber,
  getRomanByArabicNumber,
  MAX_ARABIC_NUMBER,
  MIN_ARABIC_NUMBER,
} from "./utility/converter";
import { RomanChar, NumeralSystem, ValidArabicNumber } from "./types";

const App = () => {
  const [selectedNumeralSystem, setSelectedNumeralSystem] = useState<
    NumeralSystem
  >("roman");
  const [number, setNumber] = useState<RomanChar | ValidArabicNumber | string>(
    ""
  );
  const [errorNumber, setErrorNumber] = useState<
    ValidArabicNumber | RomanChar | string
  >();

  useEffect(() => {
    setErrorNumber("");
  }, [number, selectedNumeralSystem]);

  const handleChangeNumeralSystem = useCallback(
    (numeralSystem: NumeralSystem) => {
      setNumber("");
      setSelectedNumeralSystem(numeralSystem);
    },
    []
  );

  const handleKeyPressedArabic = useCallback(
    (value: ValidArabicNumber | string) => {
      if (
        +number.concat(value) > +MAX_ARABIC_NUMBER ||
        +number.concat(value) < +MIN_ARABIC_NUMBER
      ) {
        setErrorNumber(number.concat(value));
      } else {
        setNumber((prevState) => prevState.concat(value));
      }
    },
    [number]
  );

  const handleKeyPressedRoman = useCallback(
    (value: RomanChar | string) => {
      const romanValidation = /^(?=[MDCLXVI])M{0,3}(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/g;
      if (!romanValidation.test(number.concat(value))) {
        setErrorNumber(number.concat(value));
      } else {
        setNumber((prevState) => prevState.concat(value));
      }
    },
    [number]
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
      {errorNumber && <div>The number {errorNumber} is not valid</div>}
      <Switch
        numeralSystem={selectedNumeralSystem}
        onChange={handleChangeNumeralSystem}
      />
      <button onClick={onClearHandler}>CLEAR</button>
      {selectedNumeralSystem === "roman" && (
        <KeyboardRoman onKeyPressed={handleKeyPressedRoman} />
      )}
      {selectedNumeralSystem === "arabic" && (
        <KeyboardArabic onKeyPressed={handleKeyPressedArabic} />
      )}
    </div>
  );
};

export default App;
