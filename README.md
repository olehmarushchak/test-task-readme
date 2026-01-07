# Wallet App

A mobile-only Wallet App built with React + TypeScript + Vite.

## Features
- **Transactions List**: View latest transactions with daily points and card balance.
- **Transaction Detail**: View details of a specific transaction.
- **Daily Points**: Calculated iteratively based on the season day.
- **Responsive Design**: Mobile-first layout (max-width 480px).

## Setup & Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open the browser (usually at `http://localhost:5173`).

## Build

To build for production:
```bash
npm run build
```

## Project Structure
- `src/components`: UI components (CardBalance, DailyPoints, TransactionListItem, etc.)
- `src/pages`: Page components (TransactionsList, TransactionDetail)
- `src/utils`: Helper functions (Points calculator, Date formatter, Currency formatter)
- `src/data`: Mock data (transactions.json)
