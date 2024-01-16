import React, { useState } from 'react';

const Resources = ({ registrationNumber }) => {
    const [newPassword, setNewPassword] = useState('');
    const [editableRegistrationNumber, setEditableRegistrationNumber] = useState(registrationNumber);

    const handleSearchClick = () => {
        // Implement search logic here
        alert(`Searching for registration number: ${editableRegistrationNumber}`);
    };

    const handleClearClick = () => {
        setNewPassword('');
        setEditableRegistrationNumber(registrationNumber);
    };

    return (
        <div className="staff-form-container">
            <h1>RESOURCES PAGE</h1>
            <br />
            <br />
            <div className="staff-form">
                <h2>Application for HPC Resources.</h2>
                <br />
                <h3>FOR USE BY IISc COMPUTATIONAL ACCOUNT HOLDERS ONLY</h3>
                <br />
                <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                    <label>
                        Registration Number/ Employee ID Number:
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
            <div className="staff-form">
                <h3>Please select the HPC System</h3>
                <hr />
                <p>Anjali P</p>
                <hr />
                <p>
                    <span className="note">You Have Resources :</span> Delta, Param-Pravega
                </p>
                <hr />
                <p>
                    <span className="note">Basic HPC Systems</span>
                    <input type="checkbox" /> Delta Cluster
                    <br />
                    Please click this 
                    <a href="https://iisc.ac.in/" style={{ color: '#800080' }}>
                        link
                    </a>
                    to get more information about these clusters.
                </p>
                <hr />
                <p>
                    <input type="checkbox" /> Param-Pravega
                </p>
                <p className="note">
                    Access to the HPC system needs further processing:  {' '}
                    <a href="https://iisc.ac.in/" style={{ color: '#800080' }}>
                        Download Form
                    </a>{' '}
                    (mandatory). Please submit a duly filled HPC
                    Validation form to SERC Room No. 103.
                </p>
                <hr />
                <p>
                    <input type="checkbox" /> Roddam Narasimha Cluster
                </p>
                <p className="note">
                    Access to the HPC system needs further processing:  {' '}
                    <a href="https://iisc.ac.in/" style={{ color: '#800080' }}>
                        Download Form
                    </a>{' '}
                    (mandatory). Please submit a duly filled HPC
                    Validation form to SERC Room No. 103.
                </p>
                <hr />
                <p>
                    <input type="checkbox" /> NVIDIA DGX
                </p>
                <p className="note">
                    Access to the HPC system needs further processing:  {' '}
                    <a href="https://iisc.ac.in/" style={{ color: '#800080' }}>
                        Download Form
                    </a>{' '}
                    (mandatory). Please submit a duly filled HPC
                    Validation form to SERC Room No. 103.
                </p>
                <hr />
                <p className="note">
                    <span className="note">Additional Information</span>
                    <br />
                    Broad topic of Research.
                </p>
                <textarea rows="4" />
                <p>No. of CPUs required min</p>
                <input type="text" />
                <p className="note">Note: Min CPU Core for Param-Pravega is 240</p>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default Resources;
