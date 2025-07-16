"use client";
import { useState, useEffect, createContext } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/apis/firebase";

const auth = getAuth(app);
export const AuthContext = createContext({} as any);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
