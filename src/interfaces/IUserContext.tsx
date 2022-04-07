import React from 'react';

interface IUserContext{
    user: any;
    setUser: any;
}

export const UserContext = React.createContext<IUserContext>({} as IUserContext);