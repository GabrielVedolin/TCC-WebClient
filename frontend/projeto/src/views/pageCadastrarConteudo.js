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
import endPoints, { api, createSession } from "../services/api's";
import axios from "axios";




function Feed() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [username, setUserName] = useState('')
    const [urlImg, setUrlImg] = useState('')
    const [loading, setLoading] = useState(false);
    const [idDescricao, setIdDescricao] = useState([]);
    const [descricao, setDescricao] = useState([]);
    const [select1, setSelect1] = useState({})
    const [select2, setSelect2] = useState([])
    const [select3, setSelect3] = useState([])
    const [respCursos, setRespCursos] = useState([])
    const [respTopicos, setRespTopicos] = useState([])
    const [respConteudo, setRespConteudo] = useState('')
    const [urlAudio, setRespUrlAudio] = useState('')
    const [urlVideo, setRespUrlVideo] = useState('')
    const [pergunta1, setResPergunta1] = useState('')
    const [pergunta2, setResPergunta2] = useState('')
    const [pergunta3, setResPergunta3] = useState('')
    const [pergunta4, setResPergunta4] = useState('')
    const [questinariolabel, setQuestionarioLabel] = useState('')
   

    const [divtipoTexto, setdivtipoTexto] = useState(false)
    const [divtipoVideo, setdivtipoVideo] = useState(false)
    const [divtipoAudio, setdivtipoAudio] = useState(false)
    const [divtipoQuestionario, setdivtipoQuestionario] = useState(false)
    const [divtipoImagem, setdivdivtipoImagem] = useState(false)


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
        var divTipoQuestionario = document.getElementById("divTipoQuestionario");
        var divtipoImagem = document.getElementById("divtipoImagem");
        var questao1Reposta = questao1.value;



        console.log(questao1Reposta);


        if (questao1Reposta == 'nada') {
            setdivtipoTexto(false);
            setdivtipoAudio(false);
            setdivtipoVideo(false);
            setdivtipoQuestionario(false);
            setdivdivtipoImagem(false);
        }
        if (questao1Reposta == 'Texto') {
            setdivtipoTexto(true);
            setdivtipoAudio(false);
            setdivtipoVideo(false);
            setdivtipoQuestionario(false);
            setdivdivtipoImagem(false);
        }
        if (questao1Reposta == 'Video') {
            setdivtipoTexto(false);
            setdivtipoAudio(false);
            setdivtipoVideo(true);
            setdivtipoQuestionario(false);
            setdivdivtipoImagem(false);
        }
        if (questao1Reposta == 'Audio') {
            setdivtipoTexto(false);
            setdivtipoAudio(true);
            setdivtipoVideo(false);
            setdivtipoQuestionario(false);
        }
        if (questao1Reposta == 'Questionario') {
            setdivtipoTexto(false);
            setdivtipoAudio(false);
            setdivtipoVideo(false);
            setdivtipoQuestionario(true);
            setdivdivtipoImagem(false);
        }
        if (questao1Reposta == 'Imagem') {
            setdivtipoTexto(false);
            setdivtipoAudio(false);
            setdivtipoVideo(false);
            setdivtipoQuestionario(false);
            setdivdivtipoImagem(true);
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

    useEffect(() => {
        getCursos();

    }, []);


    useEffect(() => {
        if (select1) {
            getTopicos()
        }

    }, [select1]);



    const handleCadastraConteudo = async(e) => {
        e.preventDefault();
        var questao1 = document.getElementById("questao1");
        var questao1Reposta = questao1.value;
       
        if (questao1Reposta == 'Texto') {
            var textareaTexto = document.getElementById("textareaTexto");
            var textareaTextoResposta = textareaTexto.value;
            const body ={
                "descricao":respConteudo,
                "tipo":"texto",
                "id_topico":select3,
                "descricao_texto":textareaTextoResposta
              }

              await axios.post(`${endPoints.criarConteudo}`, body)
              .then((response) => {
               console.log("response aqui",response)
               alert("Conteúdo do tipo Texto Cadastrado Com Sucesso!")
               navigate("/pageProf2")
               
              }).catch((erro) => {
                console.log('deu ruim', erro)
                let p = document.getElementById('mensagemerro');
                p.style.display = 'block';
              })
        

        }
        if (questao1Reposta == 'Video') {
            const body ={
                "descricao":respConteudo,
                "tipo":"video",
                "id_topico":select3,
                "url_video_imagem":urlVideo
              }

              await axios.post(`${endPoints.criarConteudo}`, body)
              .then((response) => {
               console.log("response aqui",response)
               alert("Conteúdo do tipo Vídeo Cadastrado Com Sucesso!")
               navigate("/pageProf2")
               
              }).catch((erro) => {
                console.log('deu ruim', erro)
                let p = document.getElementById('mensagemerro');
                p.style.display = 'block';
              })
        
        }
        if (questao1Reposta == 'Audio') {
            const body ={
                "descricao":"TESTE TESTE",
                "tipo":"audio",
                "id_topico":7,
                "descricao_texto":"URL",
                "url_video_imagem":""
              }
        }
        if (questao1Reposta == 'Questionario') {
            const body ={
                "descricao":"TESTE TESTE",
                "tipo":"questionario",
                "id_topico":7,
                "descricao_texto":"URL",
                "url_video_imagem":""
              }
        }

        

    
      }
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
                            <div>
                                <div className="wrap-input-input1">
                                    <select className="questionario-form-titleProf1-select " id="selectProf1" onChange={(e) => {
                                        setSelect1(e.target.value)
                                    }}>
                                        <option value={''}>{'Selecione um Curso'}</option>
                                        {respCursos?.map((item) => (
                                            <option value={item.id_curso}>{item.descricao}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="wrap-input-input1">
                                <select className="questionario-form-titleProf1-select " id="selectProf1" onChange={(e) => {
                                        setSelect3(e.target.value)

                                    }}>
                                        <option value={''}>{'Selecione um Tópico'}</option>
                                        {respTopicos?.map((item) => (
                                            <option value={item.id_topico}>{item.descricao}</option>
                                        ))}
                                    </select>
                                 
                                </div>
                            </div>
                            <div>
                                <div className="wrap-input-input1">
                                    <input
                                        className={respConteudo !== "" ? "has-val input" : "input"}
                                        type="text"
                                        id="conteudo"
                                        name="conteudo"
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
                                    <option value={'Imagem'}>Imagem</option>
                                </select>
                            </div>

                            {divtipoTexto ? <div id="divTipoTexto" className="wrap-input-textarea">
                                <p className="questionario-form-title"> Digite o texto:</p>
                                <textarea id="textareaTexto" cols="60" rows="10"></textarea>
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
                                {divtipoImagem ? <div id="divtipoImagem">
                                <div className="wrap-input-input1">
                                    <input
                                        className={urlAudio !== "" ? "has-val input" : "input"}
                                        type="text"
                                        id="imagem"
                                        name="imagem"
                                        value={urlAudio}
                                        onChange={(e) => setRespUrlAudio(e.target.value)}
                                    />
                                    <span className="focus-input" data-placeholder="URL da Imagem"></span>
                                </div>
                            </div>
                                : null}

                            {divtipoQuestionario ?
                                <div id="divtipoQuestionario">
                                    <div className="wrap-input-input1">
                                        <input
                                            className={questinariolabel !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="questinariolabel"
                                            name="questinariolabel"
                                            value={questinariolabel}
                                            onChange={(e) => setQuestionarioLabel(e.target.value)}
                                        />
                                        <span className="focus-input" data-placeholder="Pergunta do Questionário"></span>
                                    </div>

                                    <div className="wrap-input-input1">
                                        <input
                                            className={pergunta1 !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="alternativa1"
                                            name="alternativa1"
                                            value={pergunta1}
                                            onChange={(e) => setResPergunta1(e.target.value)}
                                        />
                                        <span className="focus-input" data-placeholder="Alternativa 1"></span>
                                    </div>

                                    <div className="wrap-input-input1">
                                        <input
                                            className={pergunta2 !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="alternativa2"
                                            name="alternativa2"
                                            value={pergunta2}
                                            onChange={(e) => setResPergunta2(e.target.value)}
                                        />
                                        <span className="focus-input" data-placeholder="Alternativa 2"></span>
                                    </div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={pergunta3 !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="alternativa3"
                                            name="alternativa3"
                                            value={pergunta3}
                                            onChange={(e) => setResPergunta3(e.target.value)}
                                        />
                                        <span className="focus-input" data-placeholder="Alternativa 3"></span>
                                    </div>
                                    <div className="wrap-input-input1">
                                        <input
                                            className={pergunta4 !== "" ? "has-val input" : "input"}
                                            type="text"
                                            id="alternativa4"
                                            name="alternativa4"
                                            value={pergunta4}
                                            onChange={(e) => setResPergunta4(e.target.value)}
                                        />
                                        <span className="focus-input" data-placeholder="Alternativa 4"></span>
                                    </div>
                                    <div className="check-form">

                                        <fieldset>
                                            <legend className="Questionario-label"> Qual das alternativas está é a verdadeira? </ legend>
                                            <div>
                                                <p className="Questionario-label">Pergunta1</p>
                                                <input

                                                    type="radio"
                                                    id="opcao1"
                                                    name="OPCAO"

                                                />

                                            </div>
                                            <div>
                                                <p className="Questionario-label">Pergunta2</p>
                                                <input
                                                    type="radio"
                                                    id="opcao2"
                                                    name="OPCAO"
                                                />
                                            </div>
                                            <div>
                                                <p className="Questionario-label">Pergunta3</p>
                                                <input
                                                    type="radio"
                                                    id="opcao3"
                                                    name="OPCAO"
                                                />
                                            </div>
                                            <div>
                                                <p className="Questionario-label">Pergunta4</p>
                                                <input
                                                    type="radio"
                                                    id="opcao4"
                                                    name="OPCAO"
                                                />
                                            </div>
                                        </fieldset>
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
                                <button className="questionario-form-btnProf1" onClick={handleCadastraConteudo}>

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