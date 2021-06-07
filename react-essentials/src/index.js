import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// render allows you to inject elements into the DOM,
ReactDOM.render(
  // Its first argument is what you want to create 
  React.createElement("h1", {style: {color: "blue"}}, "Heyyyy Everyone"),
  // Second is the container it is to be placed in
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
