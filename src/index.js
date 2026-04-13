import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <form name="stormContact" netlify data-netlify="true" hidden>
      <input type="text" name="name" />
      <input type="text" name="phone" />
      <input type="text" name="address" />
      <input type="text" name="service" />
      <input type="email" name="email" />
      <input type="email" name="message" />
      <textarea name="message"></textarea>
    </form>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
