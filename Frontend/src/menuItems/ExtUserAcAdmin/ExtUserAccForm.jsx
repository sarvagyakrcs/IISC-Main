import React, { useState } from 'react';
import './ExtUserAccForm.css';

const ExtUserAccForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        dateOfJoining: '',
        phoneNumber: '',
        empCode: '',
        regNumber: '',
        address: '',
    });

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <div>
            {/* <h1>Ext User Acc Form</h1> */}
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
                    Date of Birth:
                    <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleChange('dateOfBirth', e.target.value)}
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
                    Phone Number:
                    <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Employee Code:
                    <input
                        type="text"
                        value={formData.empCode}
                        onChange={(e) => handleChange('empCode', e.target.value)}
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
                    Address:
                    <textarea
                        value={formData.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                    />
                </label>
                <br />
                {/* Add more form fields as needed */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ExtUserAccForm;
