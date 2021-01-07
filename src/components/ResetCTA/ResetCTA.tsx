import React from 'react';

import styles from './ResetCTA.module.css';
import brandStyles from '../../utility/palette.module.css';

interface ResetCTAProps {
    onReset: () => void
};

const ResetCTA: React.FC<ResetCTAProps> = ({ onReset }) => {
    return <button className={styles.button} onClick={onReset}>Reset</button>;
};

export default ResetCTA;