import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from '../contexts/auth';
import "../styles/feed.css"
import "../styles/stylesCadastrarConteudo.css"
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
    const [respConteudo, setRespConteudo] = useState('')
    const [urlAudio, setRespUrlAudio] = useState('')
    const [urlVideo, setRespUrlVideo] = useState('')

    const [divtipoTexto, setdivtipoTexto] = useState(false)
    const [divtipoVideo, setdivtipoVideo] = useState(false)
    const [divtipoAudio, setdivtipoAudio] = useState(false)


    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
    };


    function readValues() {

        //Repostas das questoes
        var questao1 = document.getElementById("questao1");
        var divTipoTexto = document.getElementById("divTipoTexto");
        var divTipoAudio = document.getElementById("divTipoAudio");
        var divTipoVideo = document.getElementById("divTipoVideo");
        var questao1Reposta = questao1.value;



        console.log(questao1Reposta);


        if (questao1Reposta == 'nada') {
            setdivtipoTexto(false);
            setdivtipoAudio(false);
            setdivtipoVideo(false);
        }
        if (questao1Reposta == 'Texto') {
            setdivtipoTexto(true);
            setdivtipoAudio(false);
            setdivtipoVideo(false);
        }
        if (questao1Reposta == 'Video') {
            setdivtipoTexto(false);
            setdivtipoAudio(false);
            setdivtipoVideo(true);
        }
        if (questao1Reposta == 'Audio') {
            setdivtipoTexto(false);
            setdivtipoAudio(true);
            setdivtipoVideo(false);
        }

    }


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
            <body class="bodyCadastrarConteudo">
                <div class="headerProf1">
                    <Navbar>
                        <div class="headerOptionProf1">
                            <NavItem icon={<PlusIcon />} />
                            <h3>Home</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <NavItem icon={<CaretIcon />}>
                                <DropdownMenu></DropdownMenu>
                            </NavItem>
                            <i class="material-icons sidebar__topAvatar"></i>
                            <h3>Cursos</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <NavItem icon={<MessengerIcon />} />
                            <h3>Cursos</h3>
                        </div>
                        <div class="headerOptionProf1" onClick={handleLogout} >
                            <NavItem icon={<BellIcon />} />

                            <h3>Logout</h3>
                        </div>
                    </Navbar>
                </div>


                <div class="body__mainCadastrarConteudo">
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
                        <div className="currentFeed"></div>

                        <div className="wrap-questionarioProf1">
                            <h1 className="questionario-tituloProf1">Formulário para Novo Contéudo</h1>

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
                                <div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={respConteudo !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="curso"
                                            name="curso"
                                            value={respConteudo}
                                            onChange={(e) => setRespConteudo(e.target.value)}
                                        />
                                        <span className="focus-input" data-placeholder="Nome do Contéudo"></span>
                                    </div>
                                </div>
                                <div>
                                    <p className="questionario-form-title"> Tipo do Contéudo</p>
                                    <select id="questao1" className="questionario-form-select" onChange={readValues}>
                                        <option selected value={'nada'}>Selecione uma opção</option>
                                        <option value={'Texto'}>Texto</option>
                                        <option value={'Video'}>Video</option>
                                        <option value={'Audio'}>Audio</option>
                                        <option value={'Questionario'}>Questionario</option>
                                    </select>
                                </div>

                                {divtipoTexto ? <div id="divTipoTexto" className="wrap-input-textarea">
                                    <p className="questionario-form-title"> Digite o texto:</p>
                                    <textarea cols="60" rows="10"></textarea>
                                </div>
                                    : null}

                                {divtipoAudio ? <div id="divTipoAudio">
                                    <div className="wrap-input-input1">
                                        <input
                                            className={urlAudio !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="audio"
                                            name="audio"
                                            value={urlAudio}
                                            onChange={(e) => setRespUrlAudio(e.target.value)}
                                        />
                                        <span className="focus-input" data-placeholder="URL Aúdio"></span>
                                    </div>
                                </div>
                                    : null}

                                {divtipoVideo ?
                                    <div id="divTipoVideo">
                                        <div className="wrap-input-input1">
                                            <input
                                                className={urlVideo !== "" ? "has-val input" : "input"}
                                                type="text"
                                                id="video"
                                                name="video"
                                                value={urlVideo}
                                                onChange={(e) => setRespUrlVideo(e.target.value)}
                                            />
                                            <span className="focus-input" data-placeholder="URL Vídeo"></span>
                                        </div>
                                    </div>
                                    : null}


                                <div className="container-questionario-form-btnProf1">
                                    <button className="questionario-form-btnProf1" type="submit">

                                        <i style={{ color: '#7fc15e' }} class="material-icons" > school </i>

                                        Cadastrar Contéudo
                                    </button>
                                </div>
                                <div className="container-questionario-form-btnProf1">

                                    <button className="questionario-form-btnProf1" onClick={() => { navigate("/pageProf2") }}>
                                        <i style={{ color: '#c0cbcd' }} class="material-icons"> event_note </i>
                                        Voltar para visualizar Cursos
                                    </button>
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

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals">
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Feed;