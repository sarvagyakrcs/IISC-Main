import MainApp from "./mainApp"
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './config/authConfig';

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
const msalInstance = new PublicClientApplication(msalConfig);
// testing
function App() {

    return (
        <>
            <MsalProvider instance={msalInstance}>
                <MainApp />
            </MsalProvider>
        </>
    )
}

export default App
