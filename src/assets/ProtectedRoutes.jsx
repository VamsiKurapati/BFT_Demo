import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, allowedRoles }) => {
    const {loginDetails} = JSON.parse(localStorage.getItem("loginDetails")) || {};

    console.log("ProtectedRoutes: ", loginDetails);
    
    // Check if loginDetails exists and if the user has the allowed role
    if (!loginDetails) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoutes;