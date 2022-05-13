import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminPage from "./pages/AdminPage";
import WalletPage from "./pages/WalletPage";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/wallet/:id" element={<WalletPage />}></Route>
        <Route path="/" element={<AdminPage />}></Route>
      </Routes>
    </Router>
  );
}
