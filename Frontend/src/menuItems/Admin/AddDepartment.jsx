import React, { useState } from 'react';
import './FacultyForm.css';

const FacultyForm = () => {
    const [formData, setFormData] = useState({
        departmentID: '',
        dateadded: '',
        departmentName: '',
        schoolofdepartment: '',
        departmenthod: '',
        hodemailID: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your form submission logic here
        console.log('Form submitted:', formData);
        setFormData({
            departmentID: '',
            dateadded: '',
            departmentName: '',
            schoolofdepartment: '',
            departmenthod: '',
            hodemailID: '',
        });
    };

    return (
        <div className="faculty-form-container">
            <form className="faculty-form" onSubmit={handleSubmit}>
                <label>
                    Department ID Number:
                    <input
                        type="text"
                        name="departmentID"
                        value={formData.departmentID}
                        onChange={handleChange}
                        pattern="\d+"
                        required
                    />
                </label>
                <label>
                    Date Added:
                    <input
                        type="date"
                        name="dateadded"
                        value={formData.dateadded}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Department Name:
                    <input
                        type="text"
                        name="departmentName"
                        value={formData.departmentName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    School Of Department:
                    <input
                        type="text"
                        name="schoolofdepartment"
                        value={formData.schoolofdepartment}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Department HOD:
                    <input
                        type="text"
                        name="departmenthod"
                        value={formData.departmenthod}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Department HOD Email ID:
                    <input
                        type="email"
                        name="hodemailID"
                        value={formData.emailID}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FacultyForm;
