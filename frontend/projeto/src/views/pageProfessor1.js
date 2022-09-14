import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/stylesPageProf1.css";
import axios from "axios";
import endPoints, { api, createSession } from "../services/api's";

export default function App() {
    const navigate = useNavigate();
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
    const [valorIdCurso, setValorIdCurso] = useState ("");

    async function getCursos() {
        const userData = localStorage.getItem('user');
        const jsonData = JSON.parse(userData);
        const testeX = jsonData[0].user_id;
        console.log("testeX:", testeX);
        await axios.get(`${endPoints.buscarConteudo}/${testeX}`)
            .then((response) => {
                const respostaTeste = response.data;
                console.log("response aqui AFEOPFKOPAEFOPEAK", respostaTeste)

                var descricoes = respostaTeste.map(function (item, indice) { return item.descricao });
                var idDescricao = respostaTeste.map(function (item, indice) { return item.id_curso });
                setIdDescricao(idDescricao);
                setDescricao(descricoes);

                console.log("descricao: ", descricoes);
                console.log("id_curso: ", idDescricao);


            }).catch((erro) => {
                console.log('deu ruim', erro)
            })

    }


    const getTopicos = async(e) => {
        
        console.log("Testeform: ", valorIdCurso);
        const idCurso = valorIdCurso;
        await axios.get(`${endPoints.buscarTopico}/${idCurso}`)
            .then((response) => {
                const respostaTeste = response.data;
                console.log("response topicos: ", respostaTeste)

                var descricao = respostaTeste.map(function (item, indice) { return item.descricao });
                var idTopico = respostaTeste.map(function (item, indice) { return item.idTopico });

                setIdTopico(idTopico);
                setTopico(descricao);

                console.log("ID TOPICO:" , idTopico);
                console.log("TOPICO: ", descricao);

            }).catch((erro) => {
                console.log('deu ruim', erro)
            })

    }

    useEffect(() => {
        // const userData = localStorage.getItem('user');

        getCursos();
        //  if(userData){
        //      setUser(JSON.parse(userData));

        //  }
        //setLoading(false);
    }, []);

    //const teste1 = userData;

    //console.log("AAAAAAAAA", teste1);

    const handleshowHide = (event) => {
        const getValue = event.target.value;
        console.log(getValue)
        setShowhide(getValue);
    }

    const handleshowHide2 = (event) => {
        const getValue = event.target.value;
        console.log(getValue)
        setShowhide2(getValue);
    }

    const handleshowHide3 = (event) => {
        const getValue = event.target.value;
        console.log(getValue)
        setShowhide3(getValue);
    }


    // pode estourar o array TA CHUMBADO
    const options = [
        {
            label: descricao[0],
            value: idDescricao[0],
        },
        {
            label: descricao[1],
            value: idDescricao[1],
        },
        {
            label: descricao[2],
            value: idDescricao[2],
        },

    ];


    const options2 = [
        {
            label: descricao[0],
            value: idTopico[0],
        },
        {
            label: descricao[1],
            value:  idTopico[1],
        },
        {
            label: descricao[2],
            value:  idTopico[2],
        },

    ];

    console.log("ID DESCRICAO ARRAY: ", idDescricao);
    return (
        <div>


            <div className="containerProf1">

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

                        <form className="formProf1">
                            <div className="fields-containerProf1">
                                <p className="questionario-form-titleProf1"></p>
                                <div>

                                    <label className="questionario-form-titleProf1">
                                        Nome do Curso:

                                        <select className="dropdownProf1" id="selectProf1" onChange={(e) => {
                                            setValorIdCurso(e.target.value);
                                            console.log("Teste valor xxxxx:", valorIdCurso);
                                            setTesteform(valorIdCurso);
                                            getTopicos(testeForm);

                                        }}>
                                            {options.map((option) => (
                                                <option value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                        {testeForm};
                                    </label>

                                    
                                            <label className="questionario-form-titleProf1" onChange={(e) => (handleshowHide2(e))}>
                                                Nome do Topico:

                                                <select className="dropdownProf1" id="selectProf1" onChange={(e) => {
                                                    const testeValor = e.target.value;
                                                    setTesteform(testeValor);
                                                  

                                                }}>
                                                    {options2.map((option) => (
                                                        <option value={option.value}>{option.label}</option>
                                                    ))}
                                                </select>
                                                {testeForm};
                                            </label>
                                        

                                    



                                    {
                                        showhide3 != "" && (
                                            <div>
                                                <p className="questionario-form-titleProf1"> Qual o tipo de conteúdo?</p>
                                                <select className="dropdownProf1" id="selectProf1" onChange={(e) => (handleshowHide(e))}>
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
                                        Voltar
                                    </button>
                                    <button className="questionario-form-btnProf1" type="submit">
                                        Enviar
                                    </button>


                                </div>


                                {loading && <h1 className="loader" >Enviando...</h1>}


                            </div>
                        </form>


                    </div>


                </div>

            </div>

        </div>

    );
}