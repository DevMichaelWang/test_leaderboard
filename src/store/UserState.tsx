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
