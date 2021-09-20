import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
import store from "./store";

const firebaseConfig = {
  apiKey: "AIzaSyCUpCXqhVwRUzbQGBBNXQFIcEXVmHgZtmQ",
  authDomain: "inforce-afab2.firebaseapp.com",
  databaseURL: "https://inforce-afab2-default-rtdb.firebaseio.com",
  projectId: "inforce-afab2",
  storageBucket: "inforce-afab2.appspot.com",
  messagingSenderId: "785092004432",
  appId: "1:785092004432:web:05facfbb66f0d4df605f55",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
