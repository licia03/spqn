import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import Key from "../Key/Key";
import { RomanChar, ValidArabicNumber } from "../../types";

interface Props {
  onKeyPressed: (value: RomanChar | ValidArabicNumber) => void;
}

const KeyboardArabic: React.FC<Props> = ({ onKeyPressed }) => (
  <Keyboard>
    <Key value="0" onClick={onKeyPressed} />
    <Key value="1" onClick={onKeyPressed} />
    <Key value="2" onClick={onKeyPressed} />
    <Key value="3" onClick={onKeyPressed} />
    <Key value="4" onClick={onKeyPressed} />
    <Key value="5" onClick={onKeyPressed} />
    <Key value="6" onClick={onKeyPressed} />
    <Key value="7" onClick={onKeyPressed} />
    <Key value="8" onClick={onKeyPressed} />
    <Key value="9" onClick={onKeyPressed} />
  </Keyboard>
);

export default KeyboardArabic;
