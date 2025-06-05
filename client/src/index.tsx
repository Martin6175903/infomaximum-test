import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/main.scss';

const rootNodeId = 'root';

const container = document.getElementById(rootNodeId);

if (!container) {
  throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
