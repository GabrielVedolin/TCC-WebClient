import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from '../contexts/auth';
import "../styles/feed.css"
import { useNavigate } from "react-router-dom";
import jpIMG from "../img/aluno.jpg";
import { ReactComponent as BellIcon } from '../assets/bell.svg';
import { ReactComponent as MessengerIcon } from '../assets/messenger.svg';
import { ReactComponent as CaretIcon } from '../assets/caret.svg';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';
import { ReactComponent as CogIcon } from '../assets/cog.svg';
import { ReactComponent as ChevronIcon } from '../assets/chevron.svg';
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg';
import { ReactComponent as BoltIcon } from '../assets/bolt.svg';
import { CSSTransition } from 'react-transition-group';




function Feed() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [username, setUserName] = useState('');
    const [urlImg, setUrlImg] = useState('');
    const [login, setLogin] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, Setemail] = useState('');
    const [estado, Setestado] = useState('');
    const [municipio, Setmunicipio] = useState('');
    const [logradouro, Setlogradouro] = useState('');
    const [cep, Setcep] = useState('');
    const [loading, setLoading] = useState(false);


    const [respCursos, setRespCursos] = useState([])


    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
    };

    function getUserLocalStorage() {
        const userData = localStorage.getItem('user');
        const jsonData = JSON.parse(userData);
        const testeX = jsonData[0].user_name;
        const img = jsonData[0].img_perfil;
        const login = jsonData[0].user_login;
        const cpf = jsonData[0].user_cpf;
        const telefone = jsonData[0].user_telefone;
        const email = jsonData[0].user_email;
        const estado = jsonData[0].user_estado;
        const municipio = jsonData[0].user_municipio;
        const logradouro = jsonData[0].user_logradouro;
        const cep = jsonData[0].user_cep;
        setUserName(testeX)
        setUrlImg(img)
        setLogin(login)
        setCpf(cpf)
        setTelefone(telefone)
        Setemail(email)
        Setestado(estado)
        Setmunicipio(municipio)
        Setlogradouro(logradouro)
        Setcep(cep)
        
    }


    useEffect(() => {
        getUserLocalStorage()
        const perPage = 3;
        const ENDPOINT = 'https://api.github.com/users/omariosouto/followers';
        const URL = `${ENDPOINT}?per_page=${perPage}&page=${currentPage}&order=DESC`;
        fetch(URL)
            .then((response) => response.json())
            .then((newPosts) => setPosts((prevPosts) => [...prevPosts, ...newPosts]))
    }, [currentPage]);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log('Sentinela apareceu!', currentPage + 1)
                setCurrentPage((currentValue) => currentValue + 1);
            }
        })
        intersectionObserver.observe(document.querySelector('#sentinela'));
        return () => intersectionObserver.disconnect();
    }, []);



    return (


        <div className='conteudo'>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="stylesheet" href="style.css" />
                <title> Feed </title>
            </head>
            <body class="bodyProf1">
                <div class="headerProf1">
                    <Navbar>
                        <div class="headerOptionProf1">
                            <NavItem1 icon={<MessengerIcon />} />
                            <h3>Meu Perfil</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <NavItem2 icon={<PlusIcon />} />
                            <h3>Feed</h3>
                        </div>
                       


                        <div class="headerOptionProf1" onClick={handleLogout} >
                            <NavItem icon={<BoltIcon />} />

                            <h3>Logout</h3>
                        </div>
                    </Navbar>
                </div>


                <div class="body__mainProf1">
                    <div class="sidebarProf1">
                        <div class="sidebar__top">
                            <img src={urlImg} alt="imagemCabeca" />



                        </div>

                        <div class="sidebar__stats">
                            <div class="sidebar__stat">
                                <p>Nome do Aluno: {username}</p>

                            </div>

                        </div>



                    </div>

                    <div class="feed">
                       


                        <div className="currentFeed"></div>

                        <div className="wrap-questionarioProf1">
                            <h1 className="questionario-tituloProf1">Meu Perfil</h1>

                            <form >
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={username !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="username"
                                            name="username"
                                            value={username}
                                            disabled="true"
                                        />
                                        <span className="focus-input" data-placeholder="Nome"></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={login !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="login"
                                            name="login"
                                            value={login}
                                            disabled="true"
                                        />
                                        <span className="focus-input" data-placeholder="Login"></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={cpf !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="cpf"
                                            name="cpf"
                                            value={cpf}
                                            disabled="true"
                                        />
                                        <span className="focus-input" data-placeholder="CPF"></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={telefone !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="telefone"
                                            name="telefone"
                                            value={telefone}
                                            disabled="true"
                                        />
                                        <span className="focus-input" data-placeholder="Telefone"></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={email !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="email"
                                            name="email"
                                            value={email}
                                            disabled="true"
                                        />
                                        <span className="focus-input" data-placeholder="E-mail"></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={estado !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="estado"
                                            name="estado"
                                            value={estado}
                                            disabled="true"
                                        />
                                        <span className="focus-input" data-placeholder="Estado"></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={municipio !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="municipio"
                                            name="municipio"
                                            value={municipio}
                                            disabled="true"
                                        />
                                        <span className="focus-input" data-placeholder="Municipio"></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={logradouro !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="logradouro"
                                            name="logradouro"
                                            value={logradouro}
                                            disabled="true"
                                        />
                                        <span className="focus-input" data-placeholder="Logradouro"></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={cep !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="cep"
                                            name="cep"
                                            value={cep}
                                            disabled="true"
                                        />
                                        <span className="focus-input" data-placeholder="Cep"></span>
                                    </div>
                                </div>





                              
                              


                            </form>


                        </div>



                        <div id="sentinela" style={{ color: 'red' }}></div>






                    </div>

                </div>
            </body>
        </div>


    )


}

// Configuracao do Navbar
function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}


function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

function NavItem1(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="/meuperfil" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}


function NavItem2(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="/feed" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}







export default Feed;