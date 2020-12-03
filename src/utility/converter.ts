export type ArabicPolinomialDecomposition =
  | "1000"
  | "2000"
  | "3000"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "10"
  | "20"
  | "30"
  | "40"
  | "50"
  | "60"
  | "70"
  | "80"
  | "90"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "0";

export type ValidRomanNumber =
  | "M"
  | "MM"
  | "MMM"
  | "C"
  | "CC"
  | "CCC"
  | "CD"
  | "D"
  | "DC"
  | "DCC"
  | "DCCC"
  | "CM"
  | "X"
  | "XX"
  | "XXX"
  | "XL"
  | "L"
  | "LX"
  | "LXX"
  | "LXXX"
  | "XC"
  | "I"
  | "II"
  | "III"
  | "IV"
  | "V"
  | "VI"
  | "VII"
  | "VIII"
  | "IX"
  | "";

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
