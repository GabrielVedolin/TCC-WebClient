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

    const [showhide, setShowhide] = useState("");
    const [showhide2, setShowhide2] = useState("");
    const [showhide3, setShowhide3] = useState("");
    const [testeForm, setTesteform] = useState("");
    const [idDescricao, setIdDescricao] = useState([]);
    const [descricao, setDescricao] = useState([]);
    const [username,setUserName] = useState('');
    const [urlImg,setUrlImg] = useState('');
    const [respCursos, setRespCursos] = useState([])
    const [respTopicos, setRespTopicos] = useState([])
    const [select1, setSelect1] = useState({})
    const [select2, setSelect2] = useState([])
    const [select3, setSelect3] = useState([])
    const [respConteudo, setRespConteudo] = useState([])


    function getUserLocalStorage(){
        const userData = localStorage.getItem('user');
        const jsonData = JSON.parse(userData);
        const testeX = jsonData[0].user_name;
        const img = jsonData[0].img_perfil;
        setUserName(testeX)
        setUrlImg(img)
      }

      useEffect(() =>{
        getUserLocalStorage();
       
    });

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
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <div className="container-questionarioProf1">
                    <div class="sidebar">
                        <div class="sidebar__top">
                          
                            <img src={urlImg} alt="imagemCabeca" />
                            
                            <h4> Aluno</h4> <h4>{username} </h4>
                        </div>
                    </div>
                    <div className="wrap-questionarioProf1">
                        <h1 className="questionario-tituloProf1">Consultar Cursos</h1>

                        <form >
                            <div>
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
                                </div>


                                <div>
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
                                </div>

                                <div>
                                <p className="questionario-form-titleProf1">Nome do Conteudo:</p>
                                    


                                    <select className="questionario-form-titleProf1-select" id="selectProf1" onChange={(e) => {

                                    }}>
                                        <option value={''}>{'Selecione uma opção'}</option>
                                        {respConteudo?.map((item) => (
                                            <option value={item.id_conteudo}>{item.descricao}</option>
                                        ))}
                                    </select>
                                    {testeForm};
                                </div>

                            </div>
                           




                         



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