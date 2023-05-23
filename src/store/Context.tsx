import { createContext, Context } from 'react';
import {User, SearchUser} from '../interfaces/user'

const UserContext: Context<User> = createContext<User>({
  username: '',
  setUserName: (username: string):void => {}
});

const SearchContext: Context<SearchUser> = createContext<SearchUser>({
    data: null,
    searchUser: (username: string): void => {}
});

export { UserContext, SearchContext };