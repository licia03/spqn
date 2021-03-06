import React, { useState, useCallback, useEffect } from "react";
import cn from "classnames";
import NumberField from "./components/NumberField/NumberField";
import styles from "./App.module.css";
import KeyboardRoman from "./components/KeyboardRoman/KeyboardRoman";
import KeyboardArabic from "./components/KeyboardArabic/KeyboardArabic";
import Switch from "./components/Switch/Switch";
import Title from "./components/Title/Title";
import {
  getArabicByRomanNumber,
  getRomanByArabicNumber,
  MAX_ARABIC_NUMBER,
  MIN_ARABIC_NUMBER,
} from "./utility/converter";
import { RomanChar, NumeralSystem, ValidArabicNumber } from "./types";
import ResetCTA from "./components/ResetCTA/ResetCTA";
import paletteStyles from "./utility/palette.module.css";

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
    <div className={cn(styles.app, styles.circleAnimation, {
      [paletteStyles.backgroundArabic]: selectedNumeralSystem === "arabic",
      [paletteStyles.backgroundRoman]: selectedNumeralSystem === "roman",
    })}>
      <Title wave="umbers">SPQN</Title>
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
      <ResetCTA onReset={onClearHandler} />
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
