import { useState } from 'react';

const DataState = () => {

    const [value, setValue] = useState(null);
    const setUserName = name => {
        setValue(name);
    };

    return {
        value,
        setUserName,
    };
};

export default DataState;
