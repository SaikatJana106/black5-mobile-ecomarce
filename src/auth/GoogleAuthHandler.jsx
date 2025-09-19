import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleAuthHandler = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const token = query.get("token");
        if (token) {
            // Save the token
            localStorage.setItem("black5authtoken", token);
           window.location.replace("/");

        }
        else {
            navigate("/login")
        }
    }, [location, navigate]);

    return <p>Signing you in...</p>;
};

export default GoogleAuthHandler;
