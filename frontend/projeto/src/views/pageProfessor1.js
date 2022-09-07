import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/stylesPageProf1.css";

export default function App() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState("");
    const [show, setShow] = useState(false);
    const [showhide, setShowhide] = useState('');
    const [showhide2, setShowhide2] = useState('');
    const [showhide3, setShowhide3] = useState('');

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
                                        Nome do curso:
                                        <input type="text" className="inputsForm" onChange={(e) => (handleshowHide(e))} />
                                        <br />
                                    </label>
                                    {
                                        showhide != "" && (
                                            <label className="questionario-form-titleProf1" onChange={(e) => (handleshowHide2(e))}>
                                                Nome do topico:
                                                <input type="text" className="inputsForm" />
                                                <br />
                                            </label>
                                        )

                                    }


                                    {
                                        showhide2 != "" && (
                                            <label className="questionario-form-titleProf1" onChange={(e) => (handleshowHide3(e))}>
                                                Nome do conteúdo:
                                                <input type="text" className="inputsForm" />
                                                <br />
                                            </label>
                                        )
                                    }



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