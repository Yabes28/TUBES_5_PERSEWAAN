// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/Index';  // Import the route configuration
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />  {/* Render AppRoutes for routing */}
  </React.StrictMode>
);
