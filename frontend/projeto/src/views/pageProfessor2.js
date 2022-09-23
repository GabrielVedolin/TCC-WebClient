import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/auth';
import "../styles/stylesPageProf1.css";
import axios from "axios";
import '../styles/teste.css';
import { ReactComponent as BellIcon } from '../assets/bell.svg';
import { ReactComponent as MessengerIcon } from '../assets/messenger.svg';
import { ReactComponent as CaretIcon } from '../assets/caret.svg';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';
import { ReactComponent as CogIcon } from '../assets/cog.svg';
import { ReactComponent as ChevronIcon } from '../assets/chevron.svg';
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg';
import { ReactComponent as BoltIcon } from '../assets/bolt.svg';


import { CSSTransition } from 'react-transition-group';
import endPoints, { api, createSession } from "../services/api's";

export default function App() {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
    };
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState("");
    const [show, setShow] = useState(false);
    const [showhide, setShowhide] = useState("");
    const [showhide2, setShowhide2] = useState("");
    const [showhide3, setShowhide3] = useState("");
    const [testeForm, setTesteform] = useState("");
    const [idDescricao, setIdDescricao] = useState([]);
    const [descricao, setDescricao] = useState([]);
    const [idTopico, setIdTopico] = useState([]);
    const [topico, setTopico] = useState([]);
    const [valorIdCurso, setValorIdCurso] = useState("");


    const [respCursos, setRespCursos] = useState([])
    const [respTopicos, setRespTopicos] = useState([])
    const [select1, setSelect1] = useState({})
    const [select2, setSelect2] = useState([])
    const [select3, setSelect3] = useState([])
    const [respConteudo, setRespConteudo] = useState([])


    async function getCursos() {
        const userData = localStorage.getItem('user');
        const jsonData = JSON.parse(userData);
        const testeX = jsonData[0].user_id;

        await axios.get(`${endPoints.buscarCursos}/${testeX}`)
            .then((response) => {
                const respostaTeste = response.data;


                setRespCursos(respostaTeste)




                var descricoes = respostaTeste.map(function (item, indice) { return item.descricao });
                var idDescricao = respostaTeste.map(function (item, indice) { return item.id_curso });
                setIdDescricao(idDescricao);
                setDescricao(descricoes);




            }).catch((erro) => {
                console.log('deu ruim', erro)
            })

    }



    const getTopicos = async (e) => {

        await axios.get(`${endPoints.buscarTopico}/${select1}`)
            .then((response) => {
                const respostaTeste = response.data;
                setSelect2(respostaTeste)
                setRespTopicos(respostaTeste)
                setRespConteudo([])

            }).catch((erro) => {

            })

    }

    const getconteudo = async (e) => {

        await axios.get(`${endPoints.buscarConteudo}/${select3}`)
            .then((response) => {
                const respostaTeste = response.data;

                console.log("GETcONTEUDO", respostaTeste)
                setRespConteudo(respostaTeste)


            }).catch((erro) => {
                console.log('deu ruim', erro)
            })

    }


    useEffect(() => {
        getCursos();

    }, []);

    useEffect(() => {
        if (select1) {
            getTopicos()
        }

    }, [select1]);

    useEffect(() => {
        if (select3) {
            getconteudo()
        }

    }, [select3]);



    const handleshowHide = (event) => {
        const getValue = event.target.value;
        console.log(getValue)
        setShowhide(getValue);
    }

    const handleshowHide2 = (event) => {
        const getValue = event.target.value;
        // console.log(getValue)
        setShowhide2(getValue);
    }

    const handleshowHide3 = (event) => {
        const getValue = event.target.value;
        // console.log(getValue)
        setShowhide3(getValue);
    }





    return (
        <div>
            <div className="containerProf1">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link rel="stylesheet" href="style.css" />
                    <title> Feed </title>
                </head>
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
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <div className="container-questionarioProf1">
                    <div className="sidebarProf1">
                        <div className="sidebar__topProf1">
                            <h4 className="questionario-form-titleProf1">Entrando como:</h4>
                            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg" alt="imagemCabeca" />
                            <br />
                            <h2 className="questionario-form-titleProf1">Professor Leminski</h2>
                            <h4 className="questionario-form-titleProf1"> Professor de</h4> <h4 className="sidebar__statNumber">Matematica </h4>
                        </div>
                    </div>

                    <div className="wrap-questionarioProf1">
                        <h1 className="questionario-tituloProf1">Cadastrar Novo Curso</h1>

                        <form >
                            <div>
                                <p className="questionario-form-titleProf1">Curso:</p>
                                <select className="questionario-form-titleProf1-select " id="selectProf1" onChange={(e) => {
                                    setSelect1(e.target.value)

                                }}>
                                    <option value={''}>{'Selecione uma opção'}</option>
                                    {respCursos?.map((item) => (
                                        <option value={item.id_curso}>{item.descricao}</option>
                                    ))}
                                </select>
                                {testeForm};


                                <p className="questionario-form-titleProf1">Nome do topico:</p>
                                   


                                    <select className="questionario-form-titleProf1-select " id="selectProf1" onChange={(e) => {
                                        setSelect3(e.target.value)

                                    }}>
                                        <option value={''}>{'Selecione uma opção'}</option>
                                        {respTopicos?.map((item) => (
                                            <option value={item.id_topico}>{item.descricao}</option>
                                        ))}
                                    </select>
                                    {testeForm};
                        


                                <p className="questionario-form-titleProf1">Nome do Conteudo:</p>
                                    


                                    <select className="questionario-form-titleProf1-select" id="selectProf1" onChange={(e) => {

                                    }}>
                                        <option value={''}>{'Selecione uma opção'}</option>
                                        {respConteudo?.map((item) => (
                                            <option value={item.id_conteudo}>{item.descricao}</option>
                                        ))}
                                    </select>
                                    {testeForm};
                         




                                {
                                    showhide3 != "" && (
                                        <div>
                                            <p className="questionario-form-titleProf1"> Qual o tipo de conteúdo?</p>
                                            <select className="questionario-form-titleProf1-select" id="selectProf1" onChange={(e) => (handleshowHide(e))}>
                                                <option selected value="0" > Selecione uma opção</option>
                                                <option value="1" >Questionario</option>
                                                <option value="2">Imagem</option>
                                                <option value="3" >Texto</option>
                                            </select>
                                        </div>
                                    )

                                }

                                {
                                    showhide === '1' && (
                                        <label>

                                            <button className="questionario-form-btnProf1" type="submit">
                                                Configurar questionario
                                            </button>
                                        </label>
                                    )
                                }
                                {
                                    showhide === '2' && (
                                        <label>

                                            <button className="questionario-form-btnProf1" type="submit">
                                                Carregar imagem
                                            </button>
                                        </label>
                                    )
                                }

                                {
                                    showhide === '3' && (

                                        <label className="questionario-form-titleProf1">
                                            Texto do conteúdo:
                                            <input type="text" className="textoConteudo" />
                                            <br />
                                        </label>
                                    )
                                }

                            </div>
                            <div className="container-questionario-form-btnProf1">
                                <button className="questionario-form-btnProf1" type="submit">
                                    Enviar
                                </button>
                            </div>
                            <div className="container-questionario-form-btnProf1">

                                <button className="questionario-form-btnProf1" type="submit">
                                    Voltar
                                </button>
                            </div>





                            {loading && <h1 className="loader" >Enviando...</h1>}



                        </form>


                    </div>

                </div>


            </div>

        </div>

    );
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