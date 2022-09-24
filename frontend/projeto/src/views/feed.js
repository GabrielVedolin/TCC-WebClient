import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from '../contexts/auth';
import "../styles/feed.css"
import { useNavigate } from "react-router-dom";
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
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
    };

    useEffect(() => {
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
            <body class="bodyFeed">
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
            

                <div class="body__main">
                    <div class="sidebar">
                        <div class="sidebar__top">
                            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg" alt="imagemCabeca" />
                            <i class="material-icons sidebar__topAvatar"> account_circle </i>
                            <h2>Professor Leminski</h2>
                            <h4> Professor de</h4> <h4 class="sidebar__statNumber">Matematica </h4>
                        </div>

                        <div class="sidebar__stats">
                            <div class="sidebar__stat">
                                <p>Cursos em andamento</p>
                                <p class="sidebar__statNumber">2,453</p>
                            </div>
                            <div class="sidebar__stat">
                                <p>Nivel de zika do baile: </p>
                                <p class="sidebar__statNumber">2,650</p>
                            </div>
                        </div>

                        <div class="sidebar__bottom">
                            <p>Recentes</p>
                            <div class="sidebar__recentItem">
                                <span class="sidebar__hash">#</span>
                                <p>Bolsonaro2022</p>
                            </div>
                            <div class="sidebar__recentItem">
                                <span class="sidebar__hash">#</span>
                                <p>Blaze</p>
                            </div>
                            <div class="sidebar__recentItem">
                                <span class="sidebar__hash">#</span>
                                <p>UNIP</p>
                            </div>
                            <div class="sidebar__recentItem">
                                <span class="sidebar__hash">#</span>
                                <p>AloEliane</p>
                            </div>
                            <div class="sidebar__recentItem">
                                <span class="sidebar__hash">#</span>
                                <p>AAAAAA</p>
                            </div>
                        </div>
                    </div>

                    <div class="feed">
                        <div class="feedinputContainer">
                            <div class="feedinputContainer__top">
                                <div class="feed__inputOptions">
                                    <div class="inputOption">
                                        <i style={{ color: '#7fc15e' }} class="material-icons" > school </i>
                                        <h4 onClick={() => { navigate("/pageProf1") }}>Area de conteúdo</h4>

                                    </div>
                                    <div class="inputOption">
                                        <i style={{ color: '#c0cbcd' }} class="material-icons"> event_note </i>
                                        <h4>Algum botao futuro talvez</h4>
                                    </div>

                                </div>



                            </div>
                            <div class="inputborder">

                            </div>
                        </div>


                        <div className="currentFeed"></div>



                        <ul>
                            {posts.map(post => (
                                <li key={post.login}>
                                    <div class="post">
                                        <div class="post__header">
                                            <i class="material-icons sidebar__topAvatar"> account_circle </i>
                                            <div class="post__info">
                                                <h2>Zika_Do_Helip4 BOT </h2>
                                                <p>Aluno</p>
                                            </div>
                                        </div>

                                        <div class="post__body">
                                            <p> User que veio da API: <strong>{post.login}</strong></p>
                                        </div>

                                        <div class="feed__inputOptions">
                                            <div class="inputOption">
                                                <i style={{ color: 'gray' }} class="material-icons"> thumb_up </i>
                                                <h4>Curtir</h4>
                                            </div>
                                            <div class="inputOption">
                                                <i style={{ color: 'gray' }} class="material-icons"> comment </i>
                                                <h4>Comentar</h4>
                                            </div>
                                            <div class="inputOption">
                                                <i style={{ color: 'gray' }} class="material-icons"> share </i>
                                                <h4>Compartilhar</h4>
                                            </div>
                                            <div class="inputOption">
                                                <i style={{ color: 'gray' }} class="material-icons"> send </i>
                                                <h4>Enviar</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div id="sentinela" style={{ color: 'red' }}></div>






                    </div>
                    <div class="widgets">
                        <div class="widgets__top">
                            <div class="widgets__header">
                                <h2>Artigos</h2>
                                <i class="material-icons"> info </i>
                            </div>
                            <div class="widgets__article">
                                <div class="widgets__articleLeft">
                                    <i class="material-icons"> fiber_manual_record </i>
                                </div>
                                <div class="widgets__articleRight">
                                    <h4>Curso de fisica</h4>
                                    <p>200 alunos estão inscritos.</p>
                                </div>
                            </div>

                            <div class="widgets__article">
                                <div class="widgets__articleLeft">
                                    <i class="material-icons"> fiber_manual_record </i>
                                </div>
                                <div class="widgets__articleRight">
                                    <h4>Curso de lol</h4>
                                    <p>23824343 alunos estão inscritos.</p>
                                </div>
                            </div>

                            <div class="widgets__article">
                                <div class="widgets__articleLeft">
                                    <i class="material-icons"> fiber_manual_record </i>
                                </div>
                                <div class="widgets__articleRight">
                                    <h4>Curso de trade 2022 - DINHEIRO FACIL</h4>
                                    <p>999999 alunos inscritos.</p>
                                </div>
                            </div>

                            <div class="widgets__article">
                                <div class="widgets__articleLeft">
                                    <i class="material-icons"> fiber_manual_record </i>
                                </div>
                                <div class="widgets__articleRight">
                                    <h4 style={{color: 'red'}}>PAGINA ATUAL DO FEED: {currentPage} </h4>
                                    
                                </div>
                            </div>
                        </div>
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