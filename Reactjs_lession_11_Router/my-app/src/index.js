import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Index } from './Demo/DemoRouter';
import { DemoNavigate } from './Demo/DemoUseNavigate';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
      <DemoNavigate />
);

