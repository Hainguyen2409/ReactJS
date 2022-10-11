import React, { createElement } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { ValidateFormik } from './Demo/ValidateForm';
import { BookApp } from './Homework/Library';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BookApp />
);
