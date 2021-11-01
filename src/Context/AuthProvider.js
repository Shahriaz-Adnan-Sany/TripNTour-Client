import React, { createContext } from 'react';
import useFirebase from '../Components/Hooks/FirebaseHook';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;