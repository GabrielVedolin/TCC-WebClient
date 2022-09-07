import React from 'react';
import "../styles/feed.css"

function Feed() {
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
                <div class="header">
                    <div class="header__left">
                        <img src="https://www.tccrocks.com/wp-content/uploads/2020/07/TCC_logo.png" alt="" />
                        <div class="header__search">
                            <i class="material-icons"> search </i>
                            <input type="text" />
                        </div>
                    </div>

                    <div class="header__right">
                        <div class="headerOption">
                            <i class="material-icons headerOption__icon"> home </i>
                            <h3>Home</h3>
                        </div>
                        <div class="headerOption">
                            <i class="material-icons headerOption__icon"> supervisor_account </i>
                            <h3>Amigos</h3>
                        </div>
                        <div class="headerOption">
                            <i class="material-icons headerOption__icon"> business_center </i>
                            <h3>Cursos</h3>
                        </div>
                        <div class="headerOption">
                            <i class="material-icons headerOption__icon"> chat </i>
                            <h3>Mensagens</h3>
                        </div>
                        <div class="headerOption">
                            <i class="material-icons headerOption__icon"> notifications </i>
                            <h3>Notificacoes</h3>
                        </div>
                        <div class="headerOption">
                            <i class="material-icons headerOption__icon"> account_circle </i>
                            <h3>Meu perfil</h3>
                        </div>
                    </div>
                </div>


                <div class="body__main">
                    <div class="sidebar">
                        <div class="sidebar__top">
                            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg" alt="imagemCabeca" />
                            <i class="material-icons sidebar__topAvatar"> account_circle </i>
                            <h2>Felipe Santos</h2>
                            <h4>feliperst.contato@gmail.com</h4>
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
                        <div class="feed__inputContainer">
                            <div class="feed__input">
                                <i class="material-icons"> create </i>
                                <form>
                                    <input type="text" />
                                    <button type="submit">Enviar</button>
                                </form>
                            </div>

                            <div class="feed__inputOptions">
                                <div class="inputOption">
                                    <i style={{ color: '#70b5f9' }} class="material-icons"> insert_photo </i>
                                    <h4>Foto</h4>
                                </div>
                                <div class="inputOption">
                                    <i style={{ color: '#e7a33e' }} class="material-icons"> subscriptions </i>
                                    <h4>Video</h4>
                                </div>
                                <div class="inputOption">
                                    <i style={{ color: '#c0cbcd' }} class="material-icons"> event_note </i>
                                    <h4>Evento</h4>
                                </div>
                                <div class="inputOption">
                                    <i style={{ color: '#7fc15e' }} class="material-icons"> calendar_view_day </i>
                                    <h4>Postar um curso</h4>
                                </div>
                            </div>
                        </div>

                        <div class="post">
                            <div class="post__header">
                                <i class="material-icons sidebar__topAvatar"> account_circle </i>
                                <div class="post__info">
                                    <h2>Zika_Do_Helip4</h2>
                                    <p>Aluno</p>
                                </div>
                            </div>

                            <div class="post__body">
                                <p>HAHAHA QUE TCC FODA</p>
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

                        <div class="post">
                            <div class="post__header">
                                <i class="material-icons sidebar__topAvatar"> account_circle </i>
                                <div class="post__info">
                                    <h2>Lucas - O Cheira cola</h2>
                                    <p>Aluno</p>
                                </div>
                            </div>

                            <div class="post__body">
                                <p>bagulho é loko...</p>
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

                        <div class="post">
                            <div class="post__header">
                                <i class="material-icons sidebar__topAvatar"> account_circle </i>
                                <div class="post__info">
                                    <h2>Luis do mato</h2>
                                    <p>Aluno</p>
                                </div>
                            </div>

                            <div class="post__body">
                                <p>caralhowww</p>
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

                        <div class="post">
                            <div class="post__header">
                                <i class="material-icons sidebar__topAvatar"> account_circle </i>
                                <div class="post__info">
                                    <h2>Dayana DominikZ</h2>
                                    <p>Aluno</p>
                                </div>
                            </div>

                            <div class="post__body">
                                <p>aiii que legal</p>
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

                        <div class="post">
                            <div class="post__header">
                                <i class="material-icons sidebar__topAvatar"> account_circle </i>
                                <div class="post__info">
                                    <h2>show popal</h2>
                                    <p>Aluno</p>
                                </div>
                            </div>

                            <div class="post__body">
                                <p>ai sim em q zika</p>
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

                        <div class="post">
                            <div class="post__header">
                                <i class="material-icons sidebar__topAvatar"> account_circle </i>
                                <div class="post__info">
                                    <h2>pauna bowzetta</h2>
                                    <p>Aluno</p>
                                </div>
                            </div>

                            <div class="post__body">
                                <p>osheee</p>
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

                        <div class="post">
                            <div class="post__header">
                                <i class="material-icons sidebar__topAvatar"> account_circle </i>
                                <div class="post__info">
                                    <h2>cabaço</h2>
                                    <p>Cabaço</p>
                                </div>
                            </div>

                            <div class="post__body">
                                <p>cabaço</p>
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
                    </div>

                    <div class="widgets">
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
                    </div>

                </div>
            </body>
        </div>


    )


}

export default Feed;