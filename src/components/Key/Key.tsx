import React, { useCallback } from "react";
import { RomanChar, ValidArabicNumber } from "../../types";

interface Props {
  value: RomanChar | ValidArabicNumber;
  onClick: (value: RomanChar | ValidArabicNumber) => void;
}

const Key: React.FC<Props> = ({ value, onClick }) => {
  const onClickHandler = useCallback(() => {
    onClick(value);
  }, [value, onClick]);

  return <button onClick={onClickHandler}>{value}</button>;
};

export default Key;
