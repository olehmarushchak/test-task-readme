import { Routes, Route, Navigate } from 'react-router-dom';
import { TransactionsList } from './pages/TransactionsList';
import { TransactionDetail } from './pages/TransactionDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TransactionsList />} />
      <Route path="/transaction/:id" element={<TransactionDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
