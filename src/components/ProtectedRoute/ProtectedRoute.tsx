import React, { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }: ReactNode) => {
    const navigate = useNavigate();
    const [auth,setAuth]=useState(false)
    useEffect(() => {
        if (localStorage.getItem('userToken') !== null) {
            setAuth(true)
        } else {
            setAuth(false)
            navigate('/')
        }
    }, []);

    if (auth===true) {
        return children
    }
}

export default ProtectedRoute
