import React, { createContext, useContext, useState } from "react";


const UserContext = createContext();


export function UserProvider({ children }) {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    };


    const contextValue = {
        users,
        addUser,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
