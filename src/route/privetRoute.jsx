import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <h1 className='text-center font-semibold'>loading</h1>
    }

    if (user) {
        return children
    }

    return <Navigate state={{from:location}} to='/login'></Navigate>
};

export default PrivetRoute;