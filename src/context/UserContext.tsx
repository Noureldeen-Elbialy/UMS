import { jwtDecode } from "jwt-decode";
import {createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext(0);

function UserContextProvider(props) {
    const [updatedUserData, setUpdatedUserData] = useState();
    const [userData, setUserData] = useState();
    const saveUserData=() => {
        let encodedToken = localStorage.getItem('userToken');
        let decodedToken = jwtDecode(encodedToken)
        setUserData(decodedToken);
    }
    useEffect(() => {
        if (localStorage.getItem('userToken')) {
            saveUserData()
        }
    },[])
    return <UserContext.Provider value={{ updatedUserData, setUpdatedUserData, userData, saveUserData }}>
        {props?.children}
    </UserContext.Provider>
}

export {UserContextProvider, UserContext };