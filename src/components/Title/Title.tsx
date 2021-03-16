import React from "react";

import styles from "./Title.module.css";

interface TitleProps {
  wave?: string;
}

const Title: React.FC<TitleProps> = ({ children, wave = "" }) => (
  <h1 className={styles.Title}>
    {children}
    {wave && (
      <sub>
        {Array.from(wave).map((letter, index) =>
          index % 2 === 0 ? <sub key={`${letter}_${index}`}>{letter}</sub> : <sup key={`${letter}_${index}`}>{letter}</sup>
        )}
      </sub>
    )}
  </h1>
);

export default Title;
