import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import endPoints, {api, createSession} from "../services/api's";

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoverdUser = localStorage.getItem('user');

        if(recoverdUser){
            setUser(JSON.parse(recoverdUser));
        }
        setLoading(false);
    }, []);

    const login = async(email, password) => {
        const body = {
            "user_email":email,
            "user_senha":password
        }

        await axios.post(`${endPoints.GoLogin}`,body)
        .then((resp)=>{
            console.log(resp.data)
            const userCredentials = resp.data
            console.log("tipo",userCredentials[0].user_tipo)
            console.log("toaqui",userCredentials[0].user_flag_questionario)

            
            if(userCredentials[0].user_tipo == 2 && userCredentials[0].user_flag_questionario == 1){
                localStorage.setItem("user", JSON.stringify(userCredentials));
                navigate("/feed"); 
            }
            if(userCredentials[0].user_tipo == 2 && userCredentials[0].user_flag_questionario == 0){
                localStorage.setItem("user", JSON.stringify(userCredentials));
                navigate("/quest"); 
            }
            if(userCredentials[0].user_tipo === 1){
                localStorage.setItem("user", JSON.stringify(userCredentials));
                navigate("/pageProf1"); 
            }
            

        }).catch((error)=>{
            let p = document.getElementById('mensagemerro');
            p.style.display = 'block';
        })

    };
    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };
    return (
        <AuthContext.Provider value={{
            authenticated:
                Boolean(user), user, login, logout, loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}