import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Arlert from './Component/Arlert';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Arlert text = "Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();