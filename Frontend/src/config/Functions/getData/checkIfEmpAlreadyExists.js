import { baseURL } from "../../../data";

const empidAlreadyExists = async (empID) => {
    const baseURI = baseURL;
    try {
        const response = await fetch(`${baseURI}faculty-search-by-empid/?empid=${empID}`, {
            method: 'GET',
        });

        if (response.ok) {
            const data = await response.json();
            console.log({ "data": data });
            console.log('User profile retrieved successfully.');

            // Check if the 'data' property exists in the response
            if (data) {
                // Assuming 'data' is an object and you want to extract 'empid' from it
                const { empid } = data;
                const { facdept } = data;
                return {"empid" : empid, "facdept" : facdept};
            } else {
                console.error('Unexpected response format from server:', data);
                return 0;
            }
        } else {
            console.error('Unexpected response from server:', response);
            return 0;
        }
    } catch (error) {
        console.error('Error retrieving user profile:', error);
        return {'error': 'Error retrieving user profile'};
    }
}

export default empidAlreadyExists;