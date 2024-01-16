import React, { useState } from 'react';
import './ResourcesPage.css';

const ResourcesPage = ({ registrationNumber }) => {
    const [facultyId, setFacultyId] = useState('');
    const [departmentName, setDepartmentName] = useState('');
    const [dateOfUpload, setDateOfUpload] = useState('');
    const [messageToSend, setMessageToSend] = useState('');
    // const [file, setFile] = useState('');

    const handleUploadFile = (event) => {
        // const selectedFile = event.target.files[0];
        // Handle file upload logic
    };

    const handleSendClick = () => {
        // Implement logic for sending details
        alert('Details sent successfully!');
    };

    return (
        <div className="resources-page">
            <div className="resources-form">
                <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                    <label>
                        Faculty ID:
                        <input
                            type="text"
                            value={facultyId}
                            onChange={(e) => setFacultyId(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Department Name:
                        <input
                            type="text"
                            value={departmentName}
                            onChange={(e) => setDepartmentName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Date of Upload:
                        <input
                            type="text"
                            value={dateOfUpload}
                            onChange={(e) => setDateOfUpload(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Message to send:
                        <textarea
                            value={messageToSend}
                            onChange={(e) => setMessageToSend(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Upload File:
                        <input
                            type="file"
                            onChange={handleUploadFile}
                        />
                    </label>
                </div>

                <button onClick={handleSendClick}>Send/Submit</button>
            </div>
        </div>
    );
};

export default ResourcesPage;
