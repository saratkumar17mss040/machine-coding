import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
