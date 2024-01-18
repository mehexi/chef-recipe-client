import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

const PrivetRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Oval/>
    }

    if (user) {
        return children
    }

    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivetRoute;