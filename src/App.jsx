import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("./assets/Home"));
const Contact = lazy(() => import("./assets/Contact"));
const WhyUs = lazy(() => import("./assets/Why_Us"));
const HowItWorks = lazy(() => import("./assets/How_It_Works"));
const Login = lazy(() => import("./assets/Login"));
const SignUp = lazy(() => import("./assets/SignUp"));

import ProtectedRoutes from "./assets/ProtectedRoutes";

const MyTrips = lazy(() => import("./assets/MyTrips"));
const Questionnaire = lazy(() => import("./assets/Questionnaire"));
const StayTuned = lazy(() => import("./assets/Stay_Tuned"));

const App = () => {
    return (
      <Suspense fallback={<></>}>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/why_us" element={<WhyUs />} />
                <Route path="/how_it_works" element={<HowItWorks />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                {/* Other route redirect to home and change the path to your home page */}
                <Route path="/questionnaire" element={<ProtectedRoutes allowedRoles={"User, Admin"}><Questionnaire /></ProtectedRoutes>}/>
                <Route path="/my-trips" element={<ProtectedRoutes allowedRoles={"User, Admin"}><MyTrips /></ProtectedRoutes>} />
                <Route path="/stay-tuned" element={<ProtectedRoutes allowedRoles={"User, Admin"}><StayTuned /></ProtectedRoutes>} />
                <Route path="/create-trip" element={<ProtectedRoutes allowedRoles={"Admin"}><Questionnaire /></ProtectedRoutes>} />

                {/* Redirect all other paths to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </Suspense>
    );
};

export default App;
