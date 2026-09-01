import React from "react";
import "./index.css";
import "lenis/dist/lenis.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import usePrefersReducedMotion from "./hooks/usePrefersReducedMotion";

const App = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        // buttery wheel smoothing; disabled entirely for reduced-motion users
        smoothWheel: !prefersReducedMotion,
        duration: 1.1,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        // let Lenis smooth-scroll the in-page nav anchors (#about, #work, …)
        anchors: true,
      }}
    >
      <div className="bg-night text-white overflow-x-clip">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
