import { useState } from 'react';

const UserState = () => {

    const [username, setUser] = useState('');
    const setUserName = name => {        
        setUser(name);
    };

    return {
        username,
        setUserName,
    };
};

export default UserState;
