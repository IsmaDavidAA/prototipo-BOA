import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalProvider";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
