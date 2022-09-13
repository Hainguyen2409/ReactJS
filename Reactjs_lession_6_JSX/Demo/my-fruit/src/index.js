import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const fruit = [
  "apple",
  "orange",
  "Banana",
  "apricot",
  "Blackberry",
  "Cranberry"
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>List of fruit</h1>
    <ul>
      {fruit.map((item) => 
      (<li>
        {item}
      </li>))}
    </ul>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
