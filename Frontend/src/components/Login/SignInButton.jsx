import { React, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../config/authConfig";
import { useNavigate } from "react-router-dom";
import './LoginPage/LoginPage.modules.css';
import getExtUserFromEmail from "../../config/Functions/getExtUserData";
import getFacultyFromEmail from "../../config/Functions/getFacultyFromEmail";


/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export const SignInButton = (props) => {
    const navigate = useNavigate();
    const { instance } = useMsal();

    const handleLogin = async (loginType) => {
        try {
            if (loginType === "popup") {
                const loginResponse = await instance.loginPopup(loginRequest);
                handleTokenResponse(loginResponse);
                navigate('/home');
            } else if (loginType === "redirect") {
                const loginResponse = await instance.loginRedirect(loginRequest);
                handleTokenResponse(loginResponse);
                navigate('/home');
            }
        } catch (e) {
            console.log(e);
        }
    };

    const userAccountType = localStorage.getItem('accountType');

    // const handleTokenResponse = async (loginResponse) => {
    //     try {
    //         const response = await instance.acquireTokenSilent({
    //             ...loginRequest,
    //             account: loginResponse.account,
    //         });
    //         localStorage.setItem("user", JSON.stringify({
    //             userDetails: loginResponse.account
    //         }));
    //         if (userAccountType === 'External User') {
    //             getExtUserFromEmail(response.account.username);
    //         }
    //         else if (userAccountType === 'Faculty') {
    //             getFacultyFromEmail(response.account.username);
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    const handleTokenResponse = async (loginResponse) => {
        try {
            // Acquire access token
            const tokenResponse = await instance.acquireTokenSilent({
                ...loginRequest,
                account: loginResponse.account,
            });
    
            // Access token is available in the tokenResponse object
            const accessToken = tokenResponse.accessToken;
    
            // Store user details and access token in local storage
            localStorage.setItem("user", JSON.stringify({
                userDetails: loginResponse.account,
                accessToken: accessToken,
            }));
    
            // Use the access token as needed (e.g., make API requests)
            if (userAccountType === 'External User') {
                getExtUserFromEmail(loginResponse.account.username);
            } else if (userAccountType === 'Faculty') {
                getFacultyFromEmail(loginResponse.account.username);
            }
        } catch (e) {
            console.error('Error handling token response:', e);
        }
    };
    


    return (
        <>
            <button className="button loginButton" onClick={() => handleLogin("popup")}>Sign in</button>
            {/* <h1>Account Type : {props.userAccountType}</h1> */}
        </>
    )
}