import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from '../contexts/auth';
import "../styles/feed.css"
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as BellIcon } from '../assets/bell.svg';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';
import { ReactComponent as MessengerIcon } from '../assets/messenger.svg';
import { ReactComponent as BoltIcon } from '../assets/bolt.svg';

import endPoints from "../services/api's";
import axios from "axios";

function Feed() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [username,setUserName] = useState('')
    const [urlImg,setUrlImg] = useState('')
    const [userId,setUserId] = useState('')
    const [userTipo,setUserTipo] = useState('')
    const [conteudoFeed,setConteudoFeed] = useState([]);
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
    };
 

    function getUserLocalStorage(){
        const userData = localStorage.getItem('user');
        const jsonData = JSON.parse(userData);
        const testeX = jsonData[0].user_name;
        const img = jsonData[0].img_perfil;
        const userID = jsonData[0].user_id;
        const userTpo = jsonData[0].user_tipo;
        setUserId(userID)
        setUserTipo(userTpo)
        setUserName(testeX)
        setUrlImg(img)
      }

    async function getFeed(scroolFeed) {
        if(scroolFeed == 1){
            await axios.get(`${endPoints.buscarFeed}/${userId}/${userTipo}`).then((response) => {
                const resFeed = response.data
                setConteudoFeed(resFeed)
                console.log(resFeed);
            })
        }else if (scroolFeed == 2){
            await axios.get(`${endPoints.buscarSegundoFeed}/${userId}/${userTipo}`).then((response) => {
                const resFeed = response.data
                setConteudoFeed(resFeed)
                console.log(resFeed);
            })
        }
        else if (scroolFeed > 2){
            await axios.get(`${endPoints.buscarFeedAdaptativo}/${userId}/${userTipo}`).then((response) => {
                const resFeed = response.data
                setConteudoFeed(resFeed)
                console.log(resFeed);
            })
        }

    } 

   async function Gostar(user_id,id_conteudo,id_feed){
        console.log("usuario : " + user_id  + "\n" + "id_conteudo : " + id_conteudo + "\n" + "id_Feed : " + id_feed);
        const res = await axios.put(`${endPoints.favoritarConteudo}`,{id_conteudo:id_conteudo, id_aprendiz:userId})
        console.log(res);
    }

    useEffect(() =>{
        getUserLocalStorage();
        getFeed(currentPage);
    }, [currentPage]);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
           console.log(entries);
            if (entries.some((entry) => entry.isIntersecting)) {
                console.log('Sentinela apareceu!', currentPage)
                setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
            }
        })
        intersectionObserver.observe(document.querySelector('#sentinela'));
        return () => intersectionObserver.disconnect();
    }, []);

 function getConteudoInformacao(res){

    if (res.tipo == "texto") {
       return <p>{res.descricao_texto}</p>    
    } 
    else if (res.tipo == "video"){
        //console.log(res.url);
        return <iframe class='formatImgVideo' title="YouTube video player" src={res.url} >
        </iframe>
    }
    else if (res.tipo == "imagem"){
        return <img class='formatImgVideo'src={res.url}></img>
    } 
    else if (res.tipo == "audio"){  

        var url = res.url;
        var id = "";

        function getIdFrom(url) {
            var parts = url.split(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);
            if (url.indexOf('?id=') >= 0){
               id = (parts[6].split("=")[1]).replace("&usp","");
               return id;
             } else {
             id = parts[5].split("/");
             var sortArr = id.sort(function(a,b){return b.length - a.length});
             id = sortArr[0];
             return id;
             }
           }

        var idDrive = getIdFrom(url);
        console.log("pathID: ", idDrive);

        var source = "https://docs.google.com/uc?export=download&id=" + idDrive;
        
        return <audio controls>
            <source src={source} type="audio/mp3"></source>
        </audio>

    }else if(res.tipo == "questionario"){
        let resQuerionario = null
        return Questionario(resQuerionario);
    }
    
    else {
        
    }

 }
 
 function Questionario(resQuerionario){
    return <div>
                <h2>Dado as informaçoes acima responda:</h2>
                <br/>
                <div>
                    <div>
                    <input type="radio" id="huey" name="drone" value="huey"
                            checked/>
                    <label for="huey">Huey</label>
                    </div>

                    <div>
                    <input type="radio" id="dewey" name="drone" value="dewey"/>
                    <label for="dewey">Dewey</label>
                    </div>

                    <div>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label for="louie">Louie</label>
                    </div>

                </div>
            </div>

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
            <body class="bodyFeed">
                <div class="headerfeed">
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
            

                <div class="body__main">
                    <div class="sidebar">
                        <div class="sidebar__top">
                            <img src={urlImg} alt="imagemCabeca" />
                            
                            
                            <h4> Aluno</h4> <h4>{username} </h4>
                        </div>
                    </div>
                    <div class="feed">

                     
                        <div className="currentFeed"></div>

                        <ul>
                            {conteudoFeed.map(res => (
                                <li key={res.idConteudo}>
                                    <div class="post">
                                        {/* informaçoes do professor */}
                                        <div class="post__header">
                                            <i class="material-icons sidebar__topAvatar"> account_circle </i>
                                            <div class="post__info">
                                                <h2>{res.nome_especialista} </h2>
                                                <p>Professor</p>
                                                <p>tipo conteudo :{res.tipo}</p>
                                            </div>
                                        </div>
                                        
                                        {/* descricao conteudo */}
                                        <div class="post__body">
                                            <h1> {res.descricao} </h1>
                                            {getConteudoInformacao(res)}
                                        </div>
                                        
                                        {/* botoes do conteudo */}
                                        <div class="feed__inputOptions">
                                            <div class="inputOption" onClick={() => Gostar(userId,res.idConteudo,res.id_feed)}>
                                                <i style={{ color: 'gray' }} class="material-icons"> thumb_up </i>
                                                <h4>Gostei</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

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