import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Quest from "../views/questionario1";
import Login from "../views/login";
import AlteraSenha from "../views/alterarSenha";
import Feed from "../views/feed";
import PageProf1 from "../views/pageProfessor1";
import { AuthProvider, AuthContext } from "../contexts/auth";
import { Children } from 'react';



const AppRoutes = () => {
   
const Private = ({children}) =>{
    const { authenticated, loading} = useContext(AuthContext);

    if(loading)
    {
        return <div className="loading">Carregando...</div>
    }

    if(!authenticated)
    {
        return <Navigate to="/" />;
    }
    
        return children;
    
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/quest" element={<Private><Quest /></Private>} />
                    <Route exact path="/alterarSenha" element={<AlteraSenha />} />
                    <Route exact path="/feed" element={<Private><Feed /></Private>} />
                    <Route exact path="/pageProf1" element={<Private><PageProf1 /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>

    );
}

export default AppRoutes;