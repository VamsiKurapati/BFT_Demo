import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, allowedRoles }) => {
    const {loginDetails} = JSON.parse(localStorage.getItem("loginDetails")) || {};

    if (!loginDetails) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoutes;