import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Index } from './Demo/DemoRouter';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
      <Index />
);

