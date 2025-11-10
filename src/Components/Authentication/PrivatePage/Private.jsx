import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Navigate, useLocation } from 'react-router';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <p>Loading ........</p>
    }
if (!user) {
    return <Navigate to="/Signup" state={{from:location}} replace></Navigate>
}
    return children
};

export default Private;