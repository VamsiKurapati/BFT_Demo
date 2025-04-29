import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const AdventureSteps = lazy(() => import("./assets/Home"));

const App = () => {
    return (
      <Suspense fallback={<></>}>
          <Routes>
                <Route path="/" element={<AdventureSteps />} />
          </Routes>
      </Suspense>
    );
};

export default App;
