import React, { useMemo } from 'react';
import { MobileContainer } from '../components/MobileContainer';
import { CardBalance } from '../components/CardBalance';
import { NoPaymentDue } from '../components/NoPaymentDue';
import { DailyPoints } from '../components/DailyPoints';
import { TransactionListItem } from '../components/TransactionListItem';
import transactionsData from '../data/transactions.json';
import type { Transaction } from '../types';
import styles from './TransactionsList.module.css';

export const TransactionsList: React.FC = () => {
    // Sort transactions by date desc? Spec says "Display 10 transactions".
    // The JSON is already there. I'll just slice 10 if more, or just map.
    // Assuming JSON is source of truth.
    const transactions: Transaction[] = useMemo(() => {
        // Optional: Sort by date descending
        return (transactionsData as Transaction[]).sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        ).slice(0, 10);
    }, []);

    return (
        <MobileContainer>
            <div className={styles.padding}>
                <div className={styles.grid}>
                    <div className={styles.leftCol}>
                        <div className={styles.balanceWrapper}>
                            <CardBalance />
                        </div>
                        <DailyPoints />
                    </div>
                    <div className={styles.rightCol}>
                        <NoPaymentDue />
                    </div>
                </div>

                <h2 className={styles.sectionTitle}>Latest Transactions</h2>

                <div className={styles.list}>
                    {transactions.map(t => (
                        <TransactionListItem key={t.id} transaction={t} />
                    ))}
                </div>
            </div>
        </MobileContainer>
    );
};
