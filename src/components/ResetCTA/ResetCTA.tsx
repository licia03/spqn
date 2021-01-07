import React from 'react';
import cn from 'classnames';

import styles from './ResetCTA.module.css';
import brandStyles from '../../utility/palette.module.css';

interface ResetCTAProps {
    onReset: () => void
};

const ResetCTA: React.FC<ResetCTAProps> = ({ onReset }) => {
    return <button className={cn(styles.button, brandStyles.accentColor, brandStyles.textPrimaryColor)} onClick={onReset}>Reset</button>;
};

export default ResetCTA;