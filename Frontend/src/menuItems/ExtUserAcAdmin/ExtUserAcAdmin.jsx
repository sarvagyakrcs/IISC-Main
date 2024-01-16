import React, { useState } from 'react';
import UserAccForm from './ExtUserAccForm';
import AddlResReqForm from './AddlResReqForm';
import './ExtUserAcAdmin.css';
import ExtSearchForm from './ExtSearchForm';
import BarGraph from './BarGraph';


const ExtUserAcAdmin = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [registrationNumber, setRegistrationNumber] = useState('');

    const handleItemClick = (item) => {
        setSelectedItem(item);
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
                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'ext Act Validate' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('ext Act Validate')}
                >
                    EXT ACT VALIDATE
                </div>
                <hr />
                <div style={{ padding: '10px', fontWeight: 'bold' }}>
                    EXT ACC ADMIN:
                    {selectedItem === 'extAccAdmin' && (
                        <div style={{ marginLeft: '20px', marginTop: '10px' }}>
                        </div>
                    )}
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Activate Ext Acc' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Activate Ext Acc')}
                >
                    I. Activate Ext Acc
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Ext Acc Res Activate' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Ext Acc Res Activate')}
                >
                    II. Ext Acc Res Activate
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Reset Password' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Reset Password')}
                >
                    III. Reset Password
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Ext Acc Delete' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Ext Acc Delete')}
                >
                    IV. Ext Acc Delete
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Ext Search' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Ext Search')}
                >
                    V. Ext Search
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Ext Acc Stats' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Ext Acc Stats')}
                >
                    VI. Ext Acc Stats
                </div>


                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'Extend/ Lock Ext Acc' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('Extend/ Lock Ext Acc')}
                >
                    VII. Extend/ Lock Ext Acc
                </div>


                <hr />
                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'ext User Acc Form' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('ext User Acc Form')}
                >
                    1. Ext User Acc Form
                </div>

                <div
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedItem === 'addl Res Req Form' ? 'lightgreen' : '',
                    }}
                    onClick={() => handleItemClick('addl Res Req Form')}
                >
                    2. Addl Res Req Form
                </div>
                <hr />
            </div>

            <div className="content">
                <h1>{selectedItem ? selectedItem.toUpperCase() : 'EXT USER A/C ADMIN PAGE'}</h1>
                <br />
                <br />


                {/* Quadrant 1 */}
                {selectedItem === 'Ext Acc Stats' && (
                    <div className="quadrant">
                        <h2 style={{ marginBottom: '10px' }}>JpGraph Error: 15009</h2>
                        <div className="error-box">
                            <p>Illegal pie plot. Sum of all data is zero for Pie Plot</p>
                            {/* Add error symbol here */}
                        </div>
                    </div>
                )}

                {/* Quadrant 2 */}
                {selectedItem === 'Ext Acc Stats' && (
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
                {selectedItem === 'Ext Acc Stats' && (
                    <div className="quadrant" style={{ position: 'relative' }}>
                        <h2 style={{ marginBottom: '10px' }}>Bar Graph</h2>
                        <BarGraph />
                    </div>
                )}

                {/* Quadrant 4 */}
                {selectedItem === 'Ext Acc Stats' && (
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

                {selectedItem === 'ext Act Validate' && (
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

                {selectedItem === 'Ext Acc Res Activate' && (
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
                )}

                {selectedItem === 'Extend/ Lock Ext Acc' && (
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

                {selectedItem === 'Ext Acc Delete' && (
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

                {selectedItem === 'Ext Search' && <ExtSearchForm />}

                {selectedItem === 'ext User Acc Form' && <UserAccForm />}
                {selectedItem === 'addl Res Req Form' && <AddlResReqForm />}

                {selectedItem === 'Activate Ext Acc' && (
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

export default ExtUserAcAdmin;
