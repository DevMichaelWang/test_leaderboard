// import { useState } from 'react';

// interface ContextType {
//     username: string;
//     setUserName: (username: string) => void;
// }
  


// const UserState = () => {

//     const [username, setUser] = useState('');
//     const setUserName = (name: string) => {        
//         setUser(name);
//     };

//     return {
//         username,
//         setUserName,
//     };
// };

// export default UserState;

import { useState } from 'react';
import {User} from '../interfaces/User'

const UserState = (): User => {
  const [username, setUserName] = useState('');

  const setUsername = (name: string): void => {
    setUserName(name);
  };

  return {
    username,
    setUserName: setUsername,
  };
};

export default UserState;
