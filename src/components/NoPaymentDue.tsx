import React from 'react';
import styles from './NoPaymentDue.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const NoPaymentDue: React.FC = () => {
    return (
        <div className={styles.card}>
            <div className={styles.label}>No Payment Due</div>
            <div className={styles.description}>You’ve paid your<br />September balance.</div>
            <div className={styles.checkmarkContainer}>
                <div className={styles.checkmarkCircle}>
                    <FontAwesomeIcon icon={faCheck} className={styles.icon} />
                </div>
            </div>
        </div>
    );
};
