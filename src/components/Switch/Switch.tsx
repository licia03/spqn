import React, { useCallback } from "react";
import { NumeralSystem } from "../../types";

import styles from "./Switch.module.css";

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
    <div className={styles.mid}>
      <label className={styles.rocker}>
        <input
          type="checkbox"
          checked={numeralSystem === defaultNumeralSystem}
          onChange={onChangeHandler}
          value=""
        />
        <span className={styles.switchLeft}>Arabic</span>
        <span className={styles.switchRight}>Roman</span>
      </label>
    </div>
  );
};

export default Switch;
