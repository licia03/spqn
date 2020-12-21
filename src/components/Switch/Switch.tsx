import React, { useCallback } from "react";
import { NumeralSystem } from "../../types";

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
      value=""
    />
  );
};

export default Switch;
