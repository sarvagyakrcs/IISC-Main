import React, { useState } from 'react';
import Students from '../../menuItems/Students/Students';

const SignUpPageMain = () => {
    const [accountType, setAccountType] = useState(localStorage.getItem('accountType') || '');
    let mainComponent = (<></>);

    if (accountType === 'Student') {
        mainComponent = <Students />;
    }

    return accountType ? mainComponent : <div>Account type not selected</div>;
};

export default SignUpPageMain;
