import { ArabicPolinomialDecomposition, ValidRomanNumber, RomanChar, ArabicValue, ValidArabicNumber } from "../types";

type ToRomanConverter = {
  [key in ArabicPolinomialDecomposition]: ValidRomanNumber;
};

export const toRomanConverter: ToRomanConverter = {
  "1000": "M",
  "2000": "MM",
  "3000": "MMM",
  "100": "C",
  "200": "CC",
  "300": "CCC",
  "400": "CD",
  "500": "D",
  "600": "DC",
  "700": "DCC",
  "800": "DCCC",
  "900": "CM",
  "10": "X",
  "20": "XX",
  "30": "XXX",
  "40": "XL",
  "50": "L",
  "60": "LX",
  "70": "LXX",
  "80": "LXXX",
  "90": "XC",
  "1": "I",
  "2": "II",
  "3": "III",
  "4": "IV",
  "5": "V",
  "6": "VI",
  "7": "VII",
  "8": "VIII",
  "9": "IX",
  "0": ""
};

type ToArabicConverter = {
  [key in RomanChar]: ArabicValue;
};

export const toArabicConverter: ToArabicConverter = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

export const getRomanByArabicNumber = (number: RomanChar | ValidArabicNumber | string) => {
  return Array.from(number).reduce((previous, current, index) => {
    const digit = (
      +current * Math.pow(10, number.length - index - 1)
    ).toString() as ArabicPolinomialDecomposition;
    return previous + toRomanConverter[digit];
  }, "");
};

export const getArabicByRomanNumber = (number: RomanChar | ValidArabicNumber | string) => {
  return Array.from(number).reduce((previous, current, index) => {
    const currentDigit = toArabicConverter[current as RomanChar];
    const nextDigit = index < number.length - 1 ? toArabicConverter[number[index + 1] as RomanChar] : -1;
    return previous + (currentDigit >= nextDigit ? currentDigit : -currentDigit);
  }, 0).toString();
};