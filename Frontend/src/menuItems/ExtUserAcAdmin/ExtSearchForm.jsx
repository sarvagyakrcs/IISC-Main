import React, { useState } from 'react';
import './ExtSearchForm.css'

const ExtSearchForm = () => {
    const [formData, setFormData] = useState({
        payrollNo: '',
        userID: '',
        name: '',
        status: '',
        instAdd: '',
        empDate: '',
        actDate: '',
        expDate: '',
        resources: '',
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
    };

    return (
        <form className="ext-search-form" onSubmit={handleSubmit}>
            <label>
                Payroll No:
                <input type="text" name="payrollNo" value={formData.payrollNo} onChange={handleChange} />
            </label>
            <label>
                UserID:
                <input type="text" name="userID" value={formData.userID} onChange={handleChange} />
            </label>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Status:
                <input type="text" name="status" value={formData.status} onChange={handleChange} />
            </label>
            <label>
                Inst Add:
                <input type="text" name="instAdd" value={formData.instAdd} onChange={handleChange} />
            </label>
            <label>
                Emp Date:
                <input type="text" name="empDate" value={formData.empDate} onChange={handleChange} />
            </label>
            <label>
                Act Date:
                <input type="text" name="actDate" value={formData.actDate} onChange={handleChange} />
            </label>
            <label>
                Exp Date:
                <input type="text" name="expDate" value={formData.expDate} onChange={handleChange} />
            </label>
            <label>
                Resources:
                <input type="text" name="resources" value={formData.resources} onChange={handleChange} />
            </label>
            <label>
                Email ID:
                <input type="text" name="emailID" value={formData.emailID} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ExtSearchForm;
