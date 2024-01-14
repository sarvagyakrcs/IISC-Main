import React from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";


export const SignOutButton = () => {
    const navigate = useNavigate();
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        instance.logoutPopup({
            postLogoutRedirectUri: "/",
            mainWindowRedirectUri: "/"
        });
        localStorage.removeItem("user");
        localStorage.removeItem("userDetails");
        localStorage.removeItem("accountType");
        navigate('/');
    }

    
    return (
            <button className='logoutButton button'  onClick={handleLogout}>Sign Out</button>
    )
}