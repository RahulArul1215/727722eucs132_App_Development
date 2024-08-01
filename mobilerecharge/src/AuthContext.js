import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(Cookies.get('isAuthenticated') === 'true');

    const login = () => {
        setIsAuthenticated(true);
        Cookies.set('isAuthenticated', 'true', { expires: 1 }); // Expires in 1 day
    };

    const logout = () => {
        setIsAuthenticated(false);
        Cookies.remove('isAuthenticated');
    };

    useEffect(() => {
        setIsAuthenticated(Cookies.get('isAuthenticated') === 'true');
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
