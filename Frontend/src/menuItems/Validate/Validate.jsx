import React, { useState } from 'react';
import './validate.css';

const ValidateForm = ({ registrationNumber }) => {
    const [newPassword, setNewPassword] = useState('');
    const [editableRegistrationNumber, setEditableRegistrationNumber] = useState(registrationNumber);
    const [accountStatus, setAccountStatus] = useState('active');

    const handleSearchClick = () => {
        // Implement search logic here
        alert(`Searching for registration number: ${editableRegistrationNumber}`);
    };

    const handleClearClick = () => {
        setNewPassword('');
        setEditableRegistrationNumber(registrationNumber);
        setAccountStatus('active');
    };

    return (
        <div className="faculty-form-container">
            <h1>VALIDATIONS PAGE</h1>
            <br />
            <br />
            <div className="faculty-form">
                <h2>Validation Of Computational Account/ HPC Request</h2>
                <br />
                <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                    <label>
                        Registration Number:
                        <input
                            type="text"
                            value={editableRegistrationNumber}
                            onChange={(e) => setEditableRegistrationNumber(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        New Password:
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </label>
                </div>

                <button onClick={handleSearchClick}>Search</button>
                <button onClick={handleClearClick}>Clear</button>
            </div>

            <div className="table-container">
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="2">Please Verify Account Details</th>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" readOnly /></td>
                        </tr>
                        <tr>
                            <td>SR/ID No:</td>
                            <td><input type="text" readOnly /></td>
                        </tr>
                        <tr>
                            <td>Contact No:</td>
                            <td><input type="text" readOnly /></td>
                        </tr>
                        <tr>
                            <td>Granted:</td>
                            <td><input type="text" readOnly /></td>
                        </tr>
                        <tr>
                            <td>Cds:</td>
                            <td><input type="text" readOnly /></td>
                        </tr>
                        <tr>
                            <td>Branch:</td>
                            <td><input type="text" readOnly /></td>
                        </tr>
                        <tr>
                            <td>DATE OF JOINING:</td>
                            <td><input type="text" readOnly /></td>
                        </tr>
                        <tr>
                            <td>UID:</td>
                            <td><input type="text" readOnly /></td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td>
                                <select
                                    value={accountStatus}
                                    onChange={(e) => setAccountStatus(e.target.value)}
                                    className={accountStatus === 'active' ? 'active-option' : 'not-active-option'}
                                >
                                    <option value="active">Active</option>
                                    <option value="notActive">Not Active</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ValidateForm;
