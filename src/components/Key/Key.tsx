import React, { useCallback } from "react";

export type RomanValue = "I" | "V" | "X" | "C" | "L" | "M";
export type ArabicValue =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

interface Props {
  value: RomanValue | ArabicValue;
  onClick: (value: RomanValue | ArabicValue) => void;
}

const Key: React.FC<Props> = ({ value, onClick }) => {
  const onClickHandler = useCallback(() => {
    onClick(value);
  }, [value, onClick]);

  return <button onClick={onClickHandler}>{value}</button>;
};

export default Key;
