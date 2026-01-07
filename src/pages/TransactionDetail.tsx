import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MobileContainer } from '../components/MobileContainer';
import transactionsData from '../data/transactions.json';
import type { Transaction } from '../types';
import { formatCurrency } from '../utils/currencyFormatter';
import { formatDetailDate } from '../utils/dateFormatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './TransactionDetail.module.css';

export const TransactionDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const transaction = useMemo(() => {
        return (transactionsData as Transaction[]).find(t => t.id === id);
    }, [id]);

    if (!transaction) {
        return (
            <MobileContainer>
                <div className={styles.padding}>
                    <button onClick={() => navigate(-1)} className={styles.backButton}>
                        <FontAwesomeIcon icon={faChevronLeft} /> Back
                    </button>
                    <div className={styles.notFound}>Transaction not found</div>
                </div>
            </MobileContainer>
        );
    }

    const isPayment = transaction.type === 'payment';
    const amountStr = `${isPayment ? '+' : ''}${formatCurrency(transaction.amount)}`;
    const statusText = transaction.pending ? 'Pending' : 'Approved';
    const dateStr = formatDetailDate(transaction.date);

    return (
        <MobileContainer>
            <div className={styles.header}>
                <button onClick={() => navigate(-1)} className={styles.backButton}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>

            <div className={styles.content}>
                <div className={styles.amountLarge}>{amountStr}</div>
                <div className={styles.name}>{transaction.name}</div>
                <div className={styles.date}>{dateStr}</div>

                <div className={styles.cardBlock}>
                    <div className={styles.statusRow}>
                        <div className={styles.statusLabel}>Status: {statusText}</div>
                        <div className={styles.cardInfo}>RBC Bank Debit Card</div>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.totalRow}>
                        <div className={styles.totalLabel}>Total</div>
                        <div className={styles.totalValue}>{amountStr}</div>
                    </div>
                </div>
            </div>
        </MobileContainer>
    );
};
