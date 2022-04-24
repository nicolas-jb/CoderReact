import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDejc7TeVZnjznRGuDz-COA2vIyucsc4Uo",
  authDomain: "bernastore-b013d.firebaseapp.com",
  projectId: "bernastore-b013d",
  storageBucket: "bernastore-b013d.appspot.com",
  messagingSenderId: "287802736183",
  appId: "1:287802736183:web:ae750e1f7c9061743ec9b2",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
