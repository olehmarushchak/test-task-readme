import React from 'react';
import styles from './MobileContainer.module.css';

interface Props {
    children: React.ReactNode;
}

export const MobileContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
};
