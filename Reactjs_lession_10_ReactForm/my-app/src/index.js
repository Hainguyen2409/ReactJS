import React, { createElement } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ValidateFormik } from './Demo/ValidateForm';
import { InfoApp } from './Homework/InfoForm';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <InfoApp />
);
