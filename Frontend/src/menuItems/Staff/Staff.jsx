import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './staff.css';
import getFacId from '../../config/Functions/getData/getfacid';
import empidAlreadyExists from '../../config/Functions/getData/checkIfEmpAlreadyExists';
import { baseURL } from '../../data';

const Staff = () => {
    const navigate = useNavigate();

    const [empid, setEmpid] = useState('');
    const [facname, setFacname] = useState('');
    const [facFirstName, setFacFirstName] = useState('');
    const [facLastName, setFacLastName] = useState('');
    const [facdept, setFacdept] = useState('');
    const [facdesg, setFacdesg] = useState('');
    const [facgender, setFacgender] = useState('');
    const [facemail, setFacemail] = useState('');

    const handleFacFirstNameChange = (event) => {
        setFacFirstName(event.target.value);
    }

    const handleFacLastNameChange = (event) => {
        setFacLastName(event.target.value);
    }

    const handleFacdeptChange = (event) => {
        setFacdept(event.target.value);
    }

    const empidChange = (event) => {
        setEmpid(event.target.value);
    }

    const handleFullNameChange = useEffect(() => {
        setFacname(facFirstName + " " + facLastName);
    }, [facFirstName, facLastName]);

    const handlefacdesgChange = (event) => {
        setFacdesg(event.target.value);
    }

    const handlefacgenderChange = (event) => {
        setFacgender(event.target.value);
    }

    const handlefacemailChange = (event) => {
        setFacemail(event.target.value);
    }

    const checkUserAlreadyExists = async (email) => {
        const facid = await getFacId(email);
        console.log(facid);
        if (facid) {
            alert("User already exists");
            setFacemail('');
            setEmpid('');
            return;
        }
    }

    const checkEmpidAlreadyExists = async (empid) => {
        const empId = await empidAlreadyExists(empid);
        console.log(empid);
        if (empId) {
            alert("Employee already exists");
            setEmpid('');
            setFacemail('');
            return;
        }
    }

    const checkEmptyFields = () => {
        if (facFirstName === '' || facLastName === '' || facdept === '' || facdesg === '' || facgender === '' || facemail === '' || empid === '') {
            alert("Please fill all the fields");
            setEmpid('');
            setFacFirstName('');
            setFacLastName('');
            setFacdept('');
            setFacdesg('');
            setFacgender('');
            setFacemail('');
            return true;
        }
        else {
            return false;
        }
    }

    const handleSignUp = async (payload) => {
        try {
            const baseURI = baseURL;
            const uri = baseURI + '/faculty/';
            const response = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
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
        }

        catch (error) {
            console.error('Error during fetch operation:', error);
            errorDecoder(error);
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (checkEmptyFields()) {
            return;
        }
        checkUserAlreadyExists(facemail);
        checkEmpidAlreadyExists(empid);

        //signUpLogic
        const payload = {
            "empid": empid,
            "facname": facname,
            "facdept": facdept,
            "facdesg": facdesg,
            "facgender": facgender,
            "facemailid": facemail
        }

        const response = await handleSignUp(payload);
        setEmpid('');
        setFacFirstName('');
        setFacLastName('');
        setFacdept('');
        setFacdesg('');
        setFacgender('');
        setFacemail('');
        if (response) {
            alert('User profile created successfully.');
            navigate('/');
        }
    };

    return (
        <div className="staff-form-container">
            <h1>STAFF PAGE</h1>
            <br />
            <h2>APPLICATION FOR NEW ACCOUNT</h2>
            <hr />
            <p className="note">For use by IISc Staff only.</p>
            <p className="note">(Temporary staff also.)</p>
            <p className="note">
                Please do not fill this form if you already have a computational account.
                If you need access to the basic HPC systems, such as Delta, kindly click
                on RESOURCES and proceed.
            </p>
            <hr />
            <form className="staff-form" onSubmit={handleFormSubmit}>
                <label>
                    NAME:
                    <div className="name-inputs">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={facFirstName}
                            onChange={handleFacFirstNameChange}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={facLastName}
                            onChange={handleFacLastNameChange}
                        />
                    </div>
                </label>

                <label>
                    EMP Code:
                    <input type="text" value={empid} onChange={empidChange} />
                </label>

                <label>
                    Designation:
                    <select value={facdesg} onChange={handlefacdesgChange}>
                        <option value="">Select Designation</option>
                        <option value="Scientist">Scientist</option>
                        <option value="Professor">Professor</option>
                        <option value="Research Fellow">Research Fellow</option>
                        {/* Add other options */}
                    </select>
                </label>

                <label>
                    Gender:
                    <select value={facgender} onChange={handlefacgenderChange}>
                        <option value="Select Gender">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                        {/* Add other options */}
                    </select>
                </label>

                <label>
                    Department:
                    <select value={facdept} onChange={handleFacdeptChange}>
                        <option value="Select Department">Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="AIML">AIML</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        {/* Add other options */}
                    </select>
                </label>

                <label>
                    Email ID:
                    <input type="email" value={facemail} onChange={handlefacemailChange} />
                </label>

                <button type="submit" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Staff;
