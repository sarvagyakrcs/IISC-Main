import React, { useEffect, useRef } from 'react';
import iiscLogo from '../../assets/iiscLogo.png';

const JumbotronAdmin = () => {
    const user = JSON.parse(localStorage.getItem('userDetails') || '{}');

    const refs = {
        Employee_Id: useRef(user.empid),
        Department: useRef(user.facdept),  // Assuming facdept is the correct property
        facdesg: useRef(user.facdesg),
        Email_Id: useRef(user.facemailid),
        Gender: useRef(user.facgender),
        Name: useRef(user.facname),
    };

    const JumbotronContent = (
        <div className="jumbotron">
            <div className="jumbotron-title">
                <h1>Admin's  Dashboard</h1>
            </div>
            <div className="user-details">
                {Object.keys(refs).map((key) => (
                    <p key={key}>
                        <b>{key}</b>: {refs[key].current}
                    </p>
                ))}
            </div>
            <div className="user-details">
                <button>Open Menu</button>
            </div>
        </div>
    );

    return JumbotronContent;
}

export default JumbotronAdmin;
