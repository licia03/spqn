import React from 'react';

import styles from './Keyboard.module.css';

const Keyboard: React.FC = ({children}) => (<div className={styles.container}>{children}</div>);

export default Keyboard;