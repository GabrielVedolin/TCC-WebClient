import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/auth';
import "../styles/stylesPageProf1.css";
import axios from "axios";
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
                    <div class="header__right">
                        <div class="headerOptionProf1">
                            <i class="material-icons headerOptionProf1__icon"> home </i>
                            <h3>Home</h3>
                        </div>
                        </div>
                        <div class="headerOptionProf1">
                            <i class="material-icons headerOptionProf1__icon"> supervisor_account </i>
                            <h3>Amigos</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <i class="material-icons headerOptionProf1__icon"> business_center </i>
                            <h3>Cursos</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <i class="material-icons headerOptionProf1__icon"> chat </i>
                            <h3>Mensagens</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <i class="material-icons headerOptionProf1__icon"> notifications </i>
                            <h3>Notificacoes</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <i class="material-icons headerOptionProf1__icon"> account_circle </i>
                            <h3>Meu perfil</h3>
                        </div>
                        <div class="headerOptionProf1">
                            <i class="material-icons headerOptionProf1__icon" onClick={handleLogout}> account_circle </i>
                            <h3>logout</h3>
                        </div>
                
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
                                <p className="questionario-form-titleProf1">TESTE Curso:</p>
                                <select className="questionario-form-titleProf1-select " id="selectProf1" onChange={(e) => {
                                    setSelect1(e.target.value)

                                }}>
                                    <option value={''}>{'Selecione uma opção'}</option>
                                    {respCursos?.map((item) => (
                                        <option value={item.id_curso}>{item.descricao}</option>
                                    ))}
                                </select>
                                {testeForm};


                                <label className="questionario-form-titleProf1">
                                    Nome do topico:


                                    <select className="questionario-form-titleProf1-select " id="selectProf1" onChange={(e) => {
                                        setSelect3(e.target.value)

                                    }}>
                                        <option value={''}>{'Selecione uma opção'}</option>
                                        {respTopicos?.map((item) => (
                                            <option value={item.id_topico}>{item.descricao}</option>
                                        ))}
                                    </select>
                                    {testeForm};
                                </label>


                                <label className="questionario-form-titleProf1">
                                    Nome do Conteudo:


                                    <select className="questionario-form-titleProf1-select" id="selectProf1" onChange={(e) => {

                                    }}>
                                        <option value={''}>{'Selecione uma opção'}</option>
                                        {respConteudo?.map((item) => (
                                            <option value={item.id_conteudo}>{item.descricao}</option>
                                        ))}
                                    </select>
                                    {testeForm};
                                </label>




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