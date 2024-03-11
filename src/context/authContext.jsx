import { createContext, useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    // const { user, signed, signIn, signOut, IsTokenValid } = useAuth();

    const { user, signed } = useAuth();

    return (
        <AuthContext.Provider value={{
            user,
            signed,
            // signIn,
            // signOut,
            // IsTokenValid
        }}>
            {children}
        </AuthContext.Provider>
    )
}