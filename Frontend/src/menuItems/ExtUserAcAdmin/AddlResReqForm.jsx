import React, { useState } from 'react';
import './AddlResReqForm.css'; 

const AddlResReqForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        empCode: '',
        dateOfJoining: '',
        periodOfDuration: '',
        phoneNumber: '',
        regNumber: '',
        emailId: '',
        empId: '',
    });

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <div>
            {/* <h1>Addl Res Req Form</h1> */}
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Emp Code:
                    <input
                        type="text"
                        value={formData.empCode}
                        onChange={(e) => handleChange('empCode', e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Date of Joining:
                    <input
                        type="date"
                        value={formData.dateOfJoining}
                        onChange={(e) => handleChange('dateOfJoining', e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Period of Duration:
                    <input
                        type="text"
                        value={formData.periodOfDuration}
                        onChange={(e) => handleChange('periodOfDuration', e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Registration Number:
                    <input
                        type="text"
                        value={formData.regNumber}
                        onChange={(e) => handleChange('regNumber', e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email ID:
                    <input
                        type="email"
                        value={formData.emailId}
                        onChange={(e) => handleChange('emailId', e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Emp ID:
                    <input
                        type="text"
                        value={formData.empId}
                        onChange={(e) => handleChange('empId', e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddlResReqForm;
