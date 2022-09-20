import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import LoginSuccess from './demo/LoginSuccess';
import Counter from './demo/Counter';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Counter />
);
