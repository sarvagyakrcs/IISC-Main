import React, { useState } from 'react';
import './FacultyForm.css';

const FacultyForm = () => {
    const [formData, setFormData] = useState({
        facultyID: '',
        gender: '',
        facultyName: '',
        department: '',
        designation: '',
        emailID: '',
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
            facultyID: '',
            gender: '',
            facultyName: '',
            department: '',
            designation: '',
            emailID: '',
        });
    };

    return (
        <div className="faculty-form-container">
            <form className="faculty-form" onSubmit={handleSubmit}>
                <label>
                    Faculty ID Number:
                    <input
                        type="text"
                        name="facultyID"
                        value={formData.facultyID}
                        onChange={handleChange}
                        pattern="\d+"
                        required
                    />
                </label>
                <label>
                    Faculty Gender:
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
                <label>
                    Faculty Name:
                    <input
                        type="text"
                        name="facultyName"
                        value={formData.facultyName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Faculty Department:
                    <select name="department" value={formData.department} onChange={handleChange} required>
                        <option value="" disabled>Select Department</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="AI">AI</option>
                        <option value="ML">ML</option>
                        <option value="Software Engineering">Software Engineering</option>
                    </select>
                </label>
                <label>
                    Faculty Designation:
                    <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Faculty Email ID:
                    <input
                        type="email"
                        name="emailID"
                        value={formData.emailID}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FacultyForm;
