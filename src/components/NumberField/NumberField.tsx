import React from 'react';

import styles from './NumberField.module.css';

type Label = 'Roman' | 'Arabic';

interface Props {
    value: string;
    label: Label;
}

const NumberField: React.FC<Props> = ({ value, label}) => (
    <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <input readOnly value={value} className={styles.input} />
    </div>
);

export default NumberField;