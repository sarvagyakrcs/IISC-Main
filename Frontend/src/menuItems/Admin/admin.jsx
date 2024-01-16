import React, { useState } from 'react';
import FacultyForm from './FacultyForm';
import DepartmentForm from './AddDepartment';
import BarGraph from './BarGraph';
import SearchPage from './SearchPage';
import './ResetPassword.css'
import ResourcesPage from './ResourcesPage';

const AdminMenuPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showFacultyForm, setShowFacultyForm] = useState(false);
    const [showDepartmentForm, setShowDepartmentForm] = useState(false);
    const [registrationNumber, setRegistrationNumber] = useState('');

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setShowFacultyForm(item === 'Add Faculty');
        setShowDepartmentForm(item === 'Add Department');
    };

    const handleSearchClick = () => {
        // Implement the search logic here
        alert(`Searching for registration number: ${registrationNumber}`);
    };

    const handleClearClick = () => {
        setRegistrationNumber('');
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div className="sidebar">
                <hr />
                <div style={{ padding: '10px', fontWeight: 'bold' }}>
                    ADMIN:
                    {selectedItem === 'Admin' && (
                        <div style={{ marginLeft: '20px', marginTop: '10px' }}>
                        </div>
                    )}
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Activate' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Activate')}
                >
                    Activate
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Resources' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Resources')}
                >
                    Resources
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Reset Password' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Reset Password')}
                >
                    Reset Password
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Delete Account' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Delete Account')}
                >
                    Delete Account
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Search' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Search')}
                >
                    Search
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Statistics' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Statistics')}
                >
                    Statistics
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Edit' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Edit')}
                >
                    Edit
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Add Faculty' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Add Faculty')}
                >
                    Add Faculty
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Add Department' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Add Department')}
                >
                    Add Department
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Extend Account' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Extend Account')}
                >
                    Extend Account
                </div>

                <hr />
            </div>
            <div className="content">
                <h1>{selectedItem ? selectedItem.toUpperCase() : 'ADMIN PAGE'}</h1>
                <br />
                <br />
                {showFacultyForm && <FacultyForm />}
                {showDepartmentForm && <DepartmentForm />}
                {selectedItem === 'Extend Account' && (
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                        <label>
                            Registration Number :
                            <input
                                type="text"
                                value={registrationNumber}
                                onChange={(e) => setRegistrationNumber(e.target.value)}
                            />
                        </label>
                        <br />
                        <button onClick={handleSearchClick}>Search</button>
                        <button onClick={handleClearClick}>Clear</button>
                    </div>
                )}
                {selectedItem === 'Edit' && (
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                        <label>
                            Registration Number :
                            <input
                                type="text"
                                value={registrationNumber}
                                onChange={(e) => setRegistrationNumber(e.target.value)}
                            />
                        </label>
                        <br />
                        <button onClick={handleSearchClick}>Search</button>
                        <button onClick={handleClearClick}>Clear</button>
                    </div>
                )}

                {/* Quadrant 1 */}
                {selectedItem === 'Statistics' && (
                    <div className="quadrant">
                        <h2 style={{ marginBottom: '10px' }}>JpGraph Error: 15009</h2>
                        <div className="error-box">
                            <p>Illegal pie plot. Sum of all data is zero for Pie Plot</p>
                            {/* Add error symbol here */}
                        </div>
                    </div>
                )}

                {/* Quadrant 2 */}
                {selectedItem === 'Statistics' && (
                    <div className="quadrant">
                        <h2>Account Creation - Nov 2023</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Applied</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Validated Activated</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Non-Validated</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Pending</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Deleted</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Quadrant 3 */}
                {selectedItem === 'Statistics' && (
                    <div className="quadrant" style={{ position: 'relative' }}>
                        <h2 style={{ marginBottom: '10px' }}>Bar Graph</h2>
                        <BarGraph />
                    </div>
                )}

                {/* Quadrant 4 */}
                {selectedItem === 'Statistics' && (
                    <div className="quadrant">
                        <h2>Total no. of existing accounts per Cluster</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Cluster</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>RNC Cluster</td>
                                    <td>250</td>
                                </tr>
                                <tr>
                                    <td>Delta</td>
                                    <td>850</td>
                                </tr>
                                <tr>
                                    <td>Testla</td>
                                    <td>625</td>
                                </tr>
                                <tr>
                                    <td>Cray XC40</td>
                                    <td>699</td>
                                </tr>
                                <tr>
                                    <td>Dell</td>
                                    <td>742</td>
                                </tr>
                                <tr>
                                    <td>Fermi</td>
                                    <td>608</td>
                                </tr>
                                <tr>
                                    <td>Tyrone</td>
                                    <td>918</td>
                                </tr>
                                <tr>
                                    <td>Param-Pravega</td>
                                    <td>550</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="view-netgroup-users">
                            View Netgroup Users:
                        </div>
                    </div>
                )}
                {selectedItem === 'Search' && (
                    <SearchPage registrationNumber={registrationNumber} />
                )}

                {selectedItem === 'Delete Account' && (
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                        <label>
                            Registration Number :
                            <input
                                type="text"
                                value={registrationNumber}
                                onChange={(e) => setRegistrationNumber(e.target.value)}
                            />
                        </label>
                        <br />
                        <button onClick={handleSearchClick}>Search</button>
                        <button onClick={handleClearClick}>Clear</button>
                    </div>
                )}

                {selectedItem === 'Reset Password' && (
                    <div className="reset-password-container">
                        <div className="reset-password-form">
                            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                                <label>
                                    Registration Number:
                                    <input
                                        type="text"
                                        value={registrationNumber}
                                        onChange={(e) => setRegistrationNumber(e.target.value)}
                                    />
                                </label>
                                <br />
                                <label>
                                    Name:
                                    <input type="text" readOnly />
                                </label>
                                <br />
                                <label>
                                    Joining Date:
                                    <input type="text" readOnly />
                                </label>
                                <br />
                                <label>
                                    Exp Date:
                                    <input type="text" readOnly />
                                </label>
                                <br />
                                <label>
                                    Phone no:
                                    <input type="text" readOnly />
                                </label>
                                <br />
                                <label>
                                    Email ID:
                                    <input type="text" readOnly />
                                </label>
                                <br />
                                <label>
                                    Status:
                                    <select style={{ color: 'green' }}>
                                        <option value="active">Active</option>
                                        <option value="notActive">Not Active</option>
                                    </select>
                                </label>
                                <br />
                                <label>
                                    New Password:
                                    <input type="password" />
                                </label>
                                <br />
                                <button onClick={handleSearchClick}>Search</button>
                                <button onClick={handleClearClick}>Clear</button>
                            </div>
                        </div>
                    </div>
                )}

                {selectedItem === 'Resources' && (
                    <ResourcesPage registrationNumber={registrationNumber} />
                )}

                {selectedItem === 'Activate' && (
                    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                        <label>
                            Registration Number :
                            <input
                                type="text"
                                value={registrationNumber}
                                onChange={(e) => setRegistrationNumber(e.target.value)}
                            />
                        </label>
                        <br />
                        <button onClick={handleSearchClick}>Search</button>
                        <button onClick={handleClearClick}>Clear</button>
                    </div>
                )}

            </div>
        </div>

    );
};

export default AdminMenuPage;