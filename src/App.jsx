import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./assets/Home"));
const Contact = lazy(() => import("./assets/Contact"));
const WhyUs = lazy(() => import("./assets/Why_Us"));
const HowItWorks = lazy(() => import("./assets/How_It_Works"));

const App = () => {
    return (
      <Suspense fallback={<></>}>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/why_us" element={<WhyUs />} />
                <Route path="/how_it_works" element={<HowItWorks />} />
                <Route path="*" element={<Home />} />
          </Routes>
      </Suspense>
    );
};

export default App;
