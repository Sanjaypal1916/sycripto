import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TransactionProvider } from './contexts/transactionContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <TransactionProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </TransactionProvider>,
)
