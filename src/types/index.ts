export interface Transaction {
    id: string;
    type: 'payment' | 'credit';
    amount: number;
    name: string;
    description: string;
    date: string;
    pending: boolean;
    authorizedUser?: string;
    percentage?: string; // e.g. "3%", "2%"
    iconType?: 'apple' | 'payment-gradient' | 'ikea' | 'target' | 'generic';
}
