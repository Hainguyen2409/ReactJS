import React, { createElement } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './Demo/Demo';
import FileUploadPage from './Demo/Input';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <FileUploadPage />
);
