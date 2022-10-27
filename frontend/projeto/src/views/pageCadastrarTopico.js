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
    const [username, setUserName] = useState('')
    const [urlImg, setUrlImg] = useState('')
    const [loading, setLoading] = useState(false);


    const [respCursos, setRespCursos] = useState('')
    const [respTopico, setRespTopico] = useState('')


    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
    };

    function getUserLocalStorage() {
        const userData = localStorage.getItem('user');
        const jsonData = JSON.parse(userData);
        const testeX = jsonData[0].user_name;
        const img = jsonData[0].img_perfil

        setUserName(testeX)
        setUrlImg(img)
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
                            <NavItem1 icon={<PlusIcon />} />
                            <h3>Meu Perfil</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <NavItem2 icon={<MessengerIcon />} />
                            <h3>Consultar Meus Cursos</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <NavItem3 icon={<ArrowIcon />} />
                            <h3>Cadastrar Curso</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <NavItem4 icon={<CogIcon />} />
                            <h3>Cadastrar Tópico</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <NavItem5 icon={<PlusIcon />} />
                            <h3>Cadastrar Conteúdo</h3>
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
                                <p>Nome do Professor: {username}</p>

                            </div>

                        </div>



                    </div>

                    <div class="feed">
                        <div class="feedinputContainer">
                            <div class="feedinputContainer__top">
                                <div class="feed__inputOptions">
                                    <div class="inputOption">
                                        <i style={{ color: '#7fc15e' }} class="material-icons" > school </i>
                                        <h4 onClick={() => { navigate("/pageProf2") }}>Cadastrar Tópico</h4>

                                    </div>
                                    <div class="inputOption">
                                        <i style={{ color: '#c0cbcd' }} class="material-icons"> event_note </i>
                                        <h4 onClick={() => { navigate("/pageProf2") }}>Voltar para visualizar Cursos</h4>
                                    </div>

                                </div>



                            </div>

                        </div>


                        <div className="currentFeed"></div>

                        <div className="wrap-questionarioProf1">
                            <h1 className="questionario-tituloProf1">Cadastrar Novo Tópico</h1>

                            <form >
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={respCursos !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="curso"
                                            name="curso"
                                            value={respCursos}
                                            onChange={(e) => setRespCursos(e.target.value)}
                                        />
                                        <span className="focus-input" data-placeholder="Nome do Curso"></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={respTopico !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="curso"
                                            name="curso"
                                            value={respTopico}
                                            onChange={(e) => setRespTopico(e.target.value)}
                                        />
                                        <span className="focus-input" data-placeholder="Nome do Tópico"></span>
                                    </div>
                                </div>





                                {loading && <h1 className="loader" >Enviando...</h1>}



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
            <a href="/meuperfilprofessor" className="icon-button" onClick={() => setOpen(!open)}>
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
            <a href="/pageProf2" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}



function NavItem3(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="/pageProf1" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}



function NavItem4(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="/cadastrartopico" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

function NavItem5(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="/cadastrarconteudo" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}




export default Feed;