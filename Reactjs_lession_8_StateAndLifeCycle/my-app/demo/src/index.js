import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateInfo from './Demo/StateInfo';
import Car from './Demo/SetState';
import Count from './Demo/Count';
import LifeCycleDemo from './Demo/LifeCycleDemo';
import ConditionalRenderingDemo from './Demo/ConditionalRenderingDemo';
import Color from './Demo/Color';
import Delete from './Demo/Delete';
import Login from './Demo/Login';
import ExpandApp from './Homework/ExpandApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ExpandApp/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
