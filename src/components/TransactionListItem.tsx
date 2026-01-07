import React from 'react';
import styles from './TransactionListItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import type { Transaction } from '../types';
import { formatCurrency } from '../utils/currencyFormatter';
import { formatTransactionListDate } from '../utils/dateFormatter';
import { useNavigate } from 'react-router-dom';

interface Props {
    transaction: Transaction;
}

const getIconContent = (type: string | undefined) => {
    switch (type) {
        case 'apple': return <FontAwesomeIcon icon={faApple} className={styles.icon} />;
        case 'target': return <FontAwesomeIcon icon={faBullseye} className={styles.icon} />;
        case 'ikea': return <span className={styles.ikeaText}>IKEA</span>;
        case 'payment-gradient':
            return <FontAwesomeIcon icon={faApple} className={styles.icon} />;
        default: return <span />;
    }
};

const getBackgroundStyle = (type: string | undefined): React.CSSProperties => {
    if (type === 'payment-gradient') return { background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' };
    // Wait, the screenshot "Payment" is Orange/Yellow/Pink.
    if (type === 'payment-gradient') return { background: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)' };
    // Let's try a closer match to the "Apple Card" gradient.
    if (type === 'payment-gradient') return { background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #f6d365 100%)' };

    if (type === 'ikea') return { backgroundColor: '#0058a3' };
    if (type === 'target') return { backgroundColor: '#cc0000' };

    // Default Dark Gray
    return { backgroundColor: '#2c2c2e' };
};

export const TransactionListItem: React.FC<Props> = ({ transaction }) => {
    const navigate = useNavigate();
    const iconContent = getIconContent(transaction.iconType);
    const bgStyle = getBackgroundStyle(transaction.iconType);

    const isPayment = transaction.type === 'payment';
    const amountStr = `${isPayment ? '+' : ''}${formatCurrency(transaction.amount)}`;
    const dateStr = formatTransactionListDate(transaction.date);

    return (
        <div className={styles.item} onClick={() => navigate(`/transaction/${transaction.id}`)}>
            <div className={styles.iconWrapper} style={bgStyle}>
                {iconContent}
            </div>

            <div className={styles.content}>
                {/* Row 1: Name and Amount */}
                <div className={styles.rowTop}>
                    <div className={styles.name}>{transaction.name}</div>
                    <div className={styles.amount}>{amountStr}</div>
                </div>

                {/* Row 2: Description/User and Percentage */}
                <div className={styles.rowBottom}>
                    <div className={styles.detailsColumn}>
                        <div className={styles.description}>
                            {transaction.pending && <span className={styles.pendingText}>Pending - </span>}
                            {transaction.description}
                        </div>
                        <div className={styles.footer}>
                            {transaction.authorizedUser ? `${transaction.authorizedUser} – ${dateStr}` : dateStr}
                        </div>
                    </div>

                    {transaction.percentage && (
                        <div className={styles.percentageBadge}>{transaction.percentage}</div>
                    )}
                </div>
            </div>

            <div className={styles.chevronWrapper}>
                <FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
            </div>
        </div>
    );
};
