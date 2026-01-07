import React from 'react';
import styles from './CardBalance.module.css';

export const CardBalance: React.FC = () => {
    return (
        <div className={styles.card}>
            <div className={styles.label}>Card Balance</div>
            <div className={styles.balance}>$17.30</div>
            <div className={styles.available}>$1,482.70 Available</div>
        </div>
    );
};
