import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Quest from "../views/questionario1";
import Login from "../views/login";
import AlteraSenha from "../views/alteraSenha";
import Feed from "../views/feed";
import PageProf1 from "../views/pageProfessor1";
import PageProf2 from "../views/pageProfessor2";
import CadastrarTopico from "../views/pageCadastrarTopico";
import CadastrarConteudo from "../views/pageCadastrarConteudo";
import PageMeuPerfil from "../views/pageMeuPefil";
import PageMeuPerfilProfessor from "../views/pageMeuPerfilProfessor";


import { AuthProvider, AuthContext } from "../contexts/auth";
import { Children } from 'react';



const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate to="/" />;
        }

        return children;

    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/quest" element={<Quest />} />
                    <Route exact path="/alterarSenha" element={<AlteraSenha />} />
                    <Route exact path="/feed" element={<Feed />} />
                    <Route exact path="/pageProf1" element={<PageProf1 />} />
                    <Route exact path="/pageProf2" element={<PageProf2 />} />
                    <Route exact path="/cadastrartopico" element={<CadastrarTopico />} />
                    <Route exact path="/cadastrarconteudo" element={<CadastrarConteudo />} />
                    <Route exact path="/meuperfil" element={<PageMeuPerfil />} />
                    <Route exact path="/meuperfilprofessor" element={<PageMeuPerfilProfessor />} />
                </Routes>
            </AuthProvider>
        </Router>

    );
}

export default AppRoutes;