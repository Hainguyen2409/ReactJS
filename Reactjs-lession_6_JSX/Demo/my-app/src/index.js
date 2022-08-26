import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const items = ["C++", "Java", "JS"];
const programming = React.createElement("section", {id: "coding"}, 
  React.createElement("h1", null, "Programming languages"),
  React.createElement("ul", {className: "coding" },
  items.map((coding, i) =>
  React.createElement("li", {key: i}, coding),
)
)
);

const myName = React.createElement("div", {className: "name", id: "name"}, 
React.createElement("h1", {className: "name", id: "name"}, "Nguyễn Tuấn Hải"),
React.createElement("h2", {className: "gender"}, "Male"),
React.createElement("ul", {className: "coding"}, "Language",
React.createElement("li", {className: "Language"}, "PHP"),
React.createElement("li", {className: "Language"}, "C++"),
React.createElement("li", {className: "Language"}, "Javascript"))
);

const myNameJSX = (
  <div className="name" id="name"> 
    <h1>Hải giò</h1>
    <p>Hello world</p> 
  </div>
)

const name = React.createElement("h1", {style: {textAlign: "center"}}, "Hải Giò");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  name
);

//<React.StrictMode>
  //   <App />
  // </React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
