import React from 'react';

type Label = 'Roman' | 'Arabic';

interface Props {
    value: string;
    label: Label
}

const NumberField: React.FC<Props> = ({ value, label }) => (
    <div>
        <label>{label}</label>
        <input readOnly value={value} />
    </div>
);

export default NumberField;