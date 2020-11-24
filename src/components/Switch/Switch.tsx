import React, { useCallback } from "react";

import { NumeralSystem } from "../../App";

interface SwitchProps {
  numeralSystem: NumeralSystem;
  onChange: (value: NumeralSystem) => void;
}

const defaultNumeralSystem: NumeralSystem = "arabic";

const Switch: React.FC<SwitchProps> = ({ numeralSystem, onChange }) => {
  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const numeralSystem: NumeralSystem = event.target.checked
        ? defaultNumeralSystem
        : "roman";
      onChange(numeralSystem);
    },
    [onChange]
  );

  return (
    <input
      type="checkbox"
      checked={numeralSystem === defaultNumeralSystem}
      onChange={onChangeHandler}
      value="ciao love"
    />
  );
};

export default Switch;
