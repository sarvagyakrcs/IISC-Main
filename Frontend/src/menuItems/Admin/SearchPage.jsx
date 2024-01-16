import React from 'react';
import './SearchPage.css';

const SearchPage = ({ registrationNumber }) => {
    return (
        <div className="search-page">
            <form className="search-form">
                <label>
                    Registration Number:
                    <input type="text" value={registrationNumber} />
                </label>
                <label>
                    Name:
                    <input type="text" defaultValue="John Doe" />
                </label>
                <label>
                    Department:
                    <input type="text" defaultValue="Computer Science" />
                </label>
                <label>
                    Email ID:
                    <input type="text" defaultValue="john.doe@example.com" />
                </label>
                <label>
                    User ID:
                    <input type="text" defaultValue="johndoe123" />
                </label>
                <label>
                    Status:
                    <input type="text" defaultValue="Active" />
                </label>
                <label>
                    Degree:
                    <input type="text" defaultValue="Ph.D." />
                </label>
                <label>
                    Email Groups:
                    <input type="text" defaultValue="Group1, Group2" />
                </label>

                <h2 style={{ color: 'purple' }}>List of Users Under a Supervisor</h2>
                <label>
                    Faculty Department:
                    <input type="text" defaultValue="Computer Science" />
                </label>

                <h2 style={{ color: 'purple' }}>Details of Active A/C with HPC Access</h2>
                <label>
                    HPC:
                    <input type="text" defaultValue="Cluster1" />
                </label>

                <button style={{ backgroundColor: 'green', color: '#fff' }}>Search</button>
            </form>
        </div>
    );
};

export default SearchPage;
