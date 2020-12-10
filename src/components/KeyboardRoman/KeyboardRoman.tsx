import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import Key  from "../Key/Key";
import { ValidArabicNumber, RomanChar } from "../../types";

interface Props {
    onKeyPressed: (value: RomanChar | ValidArabicNumber) => void;
}

const KeyboardRoman: React.FC<Props> = ({onKeyPressed}) => (
  <Keyboard>
    <Key value="I" onClick={onKeyPressed} />
    <Key value="V" onClick={onKeyPressed} />
    <Key value="X" onClick={onKeyPressed} />
    <Key value="L" onClick={onKeyPressed} />
    <Key value="C" onClick={onKeyPressed} />
    <Key value="D" onClick={onKeyPressed} />
    <Key value="M" onClick={onKeyPressed} />
  </Keyboard>
);

export default KeyboardRoman;
