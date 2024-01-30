import { toBeDecided } from "../../../data";
import getFacId from "../getData/getfacid";
import { baseURL } from "../../../data";
import errorDecoder from "../errorDecoder";

const studentSignUp = async (data) => {
    const baseURI = baseURL; // Assuming baseURL is defined somewhere in your code
    const facidObj = await getFacId(data.FacultyEmail);

    if(facidObj === 0 || facidObj === undefined || facidObj === null){
        alert("Faculty Email is not registered");
        return 0;
    }

    console.log(facidObj);
    const facid = facidObj.empid;
    const facdept = facidObj.facdept;

    function formatDateWithRandomNumber() {
        let now = new Date();
    
        // Format each part of the date/time
        let year = now.getFullYear();
        let month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        let day = String(now.getDate()).padStart(2, '0');
        let second = String(now.getSeconds()).padStart(2, '0');
    
        // Concatenate the date and time parts
        let formattedDateTime = `${year}${month}${day}${second}`;
    
        // Generate a 2-digit random number and pad if necessary
        let randomNumber = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    
        // Append the random number
        let formattedString = formattedDateTime + randomNumber;
    
        // Convert to integer
        return parseInt(formattedString, 10);
    }
    
    let fidVariable = formatDateWithRandomNumber();

    const postData = {
        "status": "W",
        "uid": toBeDecided,
        "hd": toBeDecided,
        "gname": facdept,
        "dept": data.department,
        "degree": data.degree,
        "noreg": "12345",
        "rdate": data.enrollmentDate,
        "regno": data.srNo,
        "name": data.firstName + " " + data.lastName,
        "facid": facid,
        "facname": data.facultyGuideName,
        "phno": data.mobileNo,
        "email": data.emailId,
        "email2": data.FacultyEmail,
        "role": toBeDecided,
        "ext_lck_date": toBeDecided,
        "remarks": toBeDecided,
        "fid": fidVariable,
    };

    try {
        const response = await fetch(`${baseURI}student/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        const responseData = await response.json();
        if (response.ok) {
            console.log({ "data": responseData });
            console.log('User profile retrieved successfully.');
            // Check if the 'data' property exists in the response
            if (responseData) {
                // Assuming 'empid' and 'facdept' are properties in the response data
                const { empid, facdept } = responseData;
                return { "empid": empid, "facdept": facdept };
            } else {
                console.error('Unexpected response format from server:', responseData);
                errorDecoder(responseData);
            }
        } else {
            console.log('Unexpected response from server:', responseData);
            errorDecoder(responseData);
        }
    } catch (error) {
        console.error('Error during fetch operation:', error);
        errorDecoder(error);
    }
};
export default studentSignUp;
