import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";

const PrivateRoute =  ({ children }) => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (jwt){
            fetch(`/api/auth/validate?token=${jwt}`, {
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${jwt}`
                },
                method: "get"
            }).then(res => {
                if (res.status === 200) return res.json();
            }).then(valid => {
                setIsValid(valid);
                setIsLoading(false);
            })
        }
        else
        {
            setIsLoading(false);
        }
    });
    
    
    return isLoading ? <CircularProgress/> : isValid ? children : <Navigate to="/login"/>;
};

export default PrivateRoute;