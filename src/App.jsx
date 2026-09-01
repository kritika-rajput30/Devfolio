import React from "react";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-night text-white overflow-x-hidden">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
