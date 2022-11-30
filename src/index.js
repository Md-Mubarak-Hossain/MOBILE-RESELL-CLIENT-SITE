import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Context from './ContextApi/Context';
import SellerContext from './ContextApi/SellerContext';
import UserContext from './ContextApi/UserContext';
import AdminContext from './ContextApi/AdminContext';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AdminContext>
        <UserContext>
          <SellerContext>
            <Context>
              <App />
            </Context>
          </SellerContext>
        </UserContext>
      </AdminContext>
    </QueryClientProvider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
