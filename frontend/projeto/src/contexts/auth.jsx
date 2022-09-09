import React, { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {api, createSession} from "../services/apiLogin";

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
       
    //  API para consultar tem que ser aqui
      //  const response = await createSession(email,password);
      
       // console.log("response", response.data);
     //   const loggedUserRetornoAPI = response.data.user;

        // teste usuario sem pegar pela api setado na mao
         const loggedUserRetornoAPI = {
             id: '123',
             email,
            usuario_questionario: 1
        
         };

        localStorage.setItem("user", JSON.stringify(loggedUserRetornoAPI));

        if (password === "teste" && loggedUserRetornoAPI.usuario_questionario === 0) {
            setUser(loggedUserRetornoAPI);
            navigate("/quest");
        }
        if ((password === "teste" && loggedUserRetornoAPI.usuario_questionario === 1)) {
            setUser(loggedUserRetornoAPI);
            navigate("/feed");
        }
        if ((password != "teste" )) {
            
            let p = document.getElementById('mensagemerro');
            p.style.display = 'block';
            alert('usuario invalido');
        }

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