import React, { createContext, useReducer } from "react";
import { UserReducer, initialState } from '../reducers/UserReducer';

// This context object will hold the data that we wanna share across the application.
export const UserContext = createContext();

export default ({children}) => {

    const [state, dispatch] = useReducer(UserReducer, initialState);

    return(
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}