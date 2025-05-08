import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./assets/Home"));
const Contact = lazy(() => import("./assets/Contact"));

const App = () => {
    return (
      <Suspense fallback={<></>}>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
          </Routes>
      </Suspense>
    );
};

export default App;
