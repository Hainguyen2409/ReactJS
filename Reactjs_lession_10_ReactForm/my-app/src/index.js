import React, { createElement } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Formik, Form, Field } from 'formik';
import Car from './Demo/Demo';
import FileUploadPage from './Demo/Input';
import BasicForm from './Demo/ValidationTest';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BasicForm />
);
