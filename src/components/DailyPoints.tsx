import React from 'react';
import styles from './DailyPoints.module.css';

export const DailyPoints: React.FC = () => {
    return (
        <div className={styles.card}>
            <div className={styles.label}>Daily Points</div>
            <div className={styles.points}>456K</div>
        </div>
    );
};
