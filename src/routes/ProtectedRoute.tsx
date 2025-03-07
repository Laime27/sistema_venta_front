import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    function getCookieValue(name: string) {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const [cookieName, cookieValue] = cookies[i].split("=");
            if (cookieName === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null;
    }

    const isAuthenticated = getCookieValue("token") !== null;

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
