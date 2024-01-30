import React, { useState } from 'react';
import Students from '../../menuItems/Students/Students';
import Staff from '../../menuItems/Staff/Staff';

const SignUpPageMain = () => {
    const [accountType, setAccountType] = useState(localStorage.getItem('accountType') || '');
    let mainComponent = (<></>);

    if (accountType === 'Student') {
        mainComponent = <Students />;
    }
    else if (accountType === 'Faculty') {
        mainComponent = <Staff/>;
    }

    return accountType ? mainComponent : <div>Account type not selected</div>;
};

export default SignUpPageMain;
