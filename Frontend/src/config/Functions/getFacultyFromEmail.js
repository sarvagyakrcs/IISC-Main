import { baseURL } from "../../data";

const getFacultyFromEmail = async (email) => {
    const baseURI = baseURL;
    try {
        const response = await fetch(`${baseURI}faculty-search-by-email/?email=${email}`, {
            method: 'GET',
        });

        if (response.ok) {
            const data = await response.json();
            console.log({ "data": data });

            console.log('User profile retrieved successfully.');
            console.log({ "saving": data });

            // Convert the object to a JSON string before storing in localStorage
            const userDetailsJSON = JSON.stringify(data);
            localStorage.setItem('userDetails', userDetailsJSON);
            return data[0]; // Assuming the response is an array and you want the first user object
        } else {
            console.error('Unexpected response from server:', response);
            return null;
        }
    } catch (error) {
        console.error('Error retrieving user profile:', error);
        return null;
    }
};

export default getFacultyFromEmail;