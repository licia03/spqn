import React, { useCallback } from "react";
import { RomanChar, ValidArabicNumber } from "../../types";

import styles from './Key.module.css';

interface Props {
  value: RomanChar | ValidArabicNumber;
  onClick: (value: RomanChar | ValidArabicNumber) => void;
}

const Key: React.FC<Props> = ({ value, onClick }) => {
  const onClickHandler = useCallback(() => {
    onClick(value);
  }, [value, onClick]);

  return <button className={styles.button} onClick={onClickHandler}>{value}</button>;
};

export default Key;
