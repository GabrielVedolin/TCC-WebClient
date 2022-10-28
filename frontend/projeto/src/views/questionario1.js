import React, { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fakeApi from "../api/api";
import "../styles/stylesQuestionario.css";
import { AuthContext } from '../contexts/auth';
import axios from 'axios';
import endPoints from "../services/api's";


import {
  selectWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
  StyledButton
} from "../styles.js";

function select(props) {
  return (
    <selectWrapper action={props.action} onChange={props.onChange}>
      <StyledLabel htmlFor="services">{props.formLabel}</StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
    </selectWrapper>
  );
}

function Option(props) {
  return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
}

const steps = [
  {
    id: "Perguntas",
  },
  {
    id: "Geral",
  },
];

export default function App() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [idUser, setIdUser] = useState('')
  let [loading, setLoading] = useState(false);
  const { logout } = useContext(AuthContext);
  let arrayRespostas = [Objresposta];
  let arrayRespostas2 = [Objresposta];
  const [formValues, setFormValues] = useState({
    quest1Field1: "",
    quest1Field2: "",
    quest1Field3: "",
    quest1Field4: "",
    quest2Field1: "",
    quest2Field2: "",
    quest2Field3: "",
    quest2Field4: "",
    quest2Field5: "",

  });
  const [valoresForm, setvaloresForm] = useState({
    quest1Field1: Objresposta,
    quest1Field2: Objresposta,
    quest1Field3: Objresposta,
    quest1Field4: Objresposta,
    quest2Field1: Objresposta,
    quest2Field2: Objresposta,
    quest2Field3: Objresposta,
    quest2Field4: Objresposta,
    quest2Field5: Objresposta,

  });

 var Objresposta = {
  resposta:'',
  peso:0,
  tipo:''
 }

function getUserID(){
  const userData = localStorage.getItem('user');
  const jsonData = JSON.parse(userData);
  const testeX = jsonData[0].user_id;

  setIdUser(testeX)
}





useEffect(() => {
  getUserID();

}, []);


  const handleLogout = () => {
    logout();
  };

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
 
  }

  function handleBack() {
    setCurrentStep((prevState) => prevState - 1);
  }



  async function handleSubmit(e) {
    e.preventDefault();

    const body = [ 
      {"user_id_aprendiz":idUser,"id_pergunta":1,"resposta":valoresForm.quest1Field1.resposta,"peso":valoresForm.quest1Field1.peso," tipo_alternativa":valoresForm.quest1Field1.tipo},
      {"user_id_aprendiz":idUser,"id_pergunta":2,"resposta":valoresForm.quest1Field2.resposta,"peso":valoresForm.quest1Field2.peso," tipo_alternativa":valoresForm.quest1Field2.tipo},
      {"user_id_aprendiz":idUser,"id_pergunta":3,"resposta":valoresForm.quest1Field3.resposta,"peso":valoresForm.quest1Field3.peso," tipo_alternativa":valoresForm.quest1Field3.tipo},
      {"user_id_aprendiz":idUser,"id_pergunta":4,"resposta":valoresForm.quest1Field4.resposta,"peso":valoresForm.quest1Field4.peso," tipo_alternativa":valoresForm.quest1Field4.tipo},
      {"user_id_aprendiz":idUser,"id_pergunta":5,"resposta":valoresForm.quest2Field1.resposta,"peso":valoresForm.quest2Field1.peso," tipo_alternativa":valoresForm.quest2Field1.tipo},
      {"user_id_aprendiz":idUser,"id_pergunta":6,"resposta":valoresForm.quest2Field2.resposta,"peso":valoresForm.quest2Field2.peso," tipo_alternativa":valoresForm.quest2Field2.tipo},
      {"user_id_aprendiz":idUser,"id_pergunta":7,"resposta":valoresForm.quest2Field3.resposta,"peso":valoresForm.quest2Field3.peso," tipo_alternativa":valoresForm.quest2Field3.tipo},
      {"user_id_aprendiz":idUser,"id_pergunta":8,"resposta":valoresForm.quest2Field4.resposta,"peso":valoresForm.quest2Field4.peso," tipo_alternativa":valoresForm.quest2Field4.tipo},
      {"user_id_aprendiz":idUser,"id_pergunta":9,"resposta":valoresForm.quest2Field5.resposta,"peso":valoresForm.quest2Field5.peso," tipo_alternativa":valoresForm.quest2Field5.tipo}
  ]

    console.log("Form sent...", body);

    await axios.post(`${endPoints.cadastrarFormulario}`, body)
    .then((response) => {
     console.log("response aqui",response)
     alert("Cadastro feito com sucesso")
     navigate("/feed")
     
    }).catch((erro) => {
      console.log('deu ruim', erro)
      let p = document.getElementById('mensagemerro');
      alert("Ero chamada")
      p.style.display = 'block';
    })

    setLoading(true);  
  }

  function nextAction (){
    //console.log("array 1 dentro do next:" , arrayRespostas);
    formValues.quest1Field1 = arrayRespostas[0];
    formValues.quest1Field2 = arrayRespostas[1];
    formValues.quest1Field3 = arrayRespostas[2];
    formValues.quest1Field4 = arrayRespostas[3];
    
    handleNext();
  }


  function lerValores(){
    var questao1 = document.getElementById("questao1");
    var questao1Reposta = questao1.value != 0 ? questao1.value.split(','):0;
    
    var questao2 = document.getElementById("questao2");
    var questao2Reposta = questao2.value != 0 ? questao2.value.split(','):0;
    
    var questao3 = document.getElementById("questao3");
    var questao3Reposta = questao3.value != 0 ? questao3.value.split(','):0;
    
    var questao4 = document.getElementById("questao4");
    var questao4Reposta = questao4.value != 0 ? questao4.value.split(','):0;
    
     arrayRespostas[0] = {
      resposta:questao1Reposta[0],
      peso:questao1Reposta[1],
      tipo:questao1Reposta[2]
     };
     arrayRespostas[1] = {
      resposta:questao2Reposta[0],
      peso:questao2Reposta[1],
      tipo:questao2Reposta[2]
     };
     arrayRespostas[2] = {
      resposta:questao3Reposta[0],
      peso:questao3Reposta[1],
      tipo:questao3Reposta[2]
     };
     arrayRespostas[3] = {
      resposta:questao4Reposta[0],
      peso:questao4Reposta[1],
      tipo:questao4Reposta[2]
     };
 
  }

  function lerValores2(){
    
    var questao1 = document.getElementById("page2Questao1");
    var questao1Reposta = questao1.value != 0 ? questao1.value.split(','):0;
    
    var questao2 = document.getElementById("page2Questao2");
    var questao2Reposta = questao2.value != 0 ? questao2.value.split(','):0;
    
    var questao3 = document.getElementById("page2Questao3");
    var questao3Reposta = questao3.value != 0 ? questao3.value.split(','):0;
    
    var questao4 = document.getElementById("page2Questao4");
    var questao4Reposta = questao4.value != 0 ? questao4.value.split(','):0;
    
    var questao5 = document.getElementById("page2Questao5");
    var questao5Reposta = questao5.value != 0 ? questao5.value.split(','):0;
    

     arrayRespostas2[0] = {
      resposta:questao1Reposta[0],
      peso:questao1Reposta[1],
      tipo:questao1Reposta[2]
     };
     arrayRespostas2[1] = {
      resposta:questao2Reposta[0],
      peso:questao2Reposta[1],
      tipo:questao2Reposta[2]
     };
     arrayRespostas2[2] = {
      resposta:questao3Reposta[0],
      peso:questao3Reposta[1],
      tipo:questao3Reposta[2]
     };
     arrayRespostas2[3] = {
      resposta:questao4Reposta[0],
      peso:questao4Reposta[1],
      tipo:questao4Reposta[2]
     };
     arrayRespostas2[4] = {
      resposta:questao5Reposta[0],
      peso:questao5Reposta[1],
      tipo:questao5Reposta[2]
     };
  }

  function readValues(){

    //Repostas das questoes
    var questao1 = document.getElementById("questao1");
    var questao1Reposta = questao1.value;

    var questao2 = document.getElementById("questao2");
    var questao2Reposta = questao2.value;

    var questao3 = document.getElementById("questao3");
    var questao3Reposta = questao3.value;

    var questao4 = document.getElementById("questao4");
    var questao4Reposta = questao4.value;


    arrayRespostas[0] = questao1Reposta;
    arrayRespostas[1] = questao2Reposta;
    arrayRespostas[2] = questao3Reposta;
    arrayRespostas[3] = questao4Reposta;
    
  }
  
  function readValuesPage2(){

    //Repostas das questoes page 2
    var page2questao1 = document.getElementById("page2Questao1");
    var page2Questao1Reposta = page2questao1.value;

    var page2questao2 = document.getElementById("page2Questao2");
    var page2Questao2Reposta = page2questao2.value;

    var page2questao3 = document.getElementById("page2Questao3");
    var page2Questao3Reposta = page2questao3.value;

    var page2questao4 = document.getElementById("page2Questao4");
    var page2Questao4Reposta = page2questao4.value;

    var page2questao5 = document.getElementById("page2Questao5");
    var page2Questao5Reposta = page2questao5.value;


    arrayRespostas2[0] = page2Questao1Reposta;
    arrayRespostas2[1] = page2Questao2Reposta;
    arrayRespostas2[2] = page2Questao3Reposta;
    arrayRespostas2[3] = page2Questao4Reposta;
    arrayRespostas2[4] = page2Questao5Reposta;


  }

  function sendJson (){
    formValues.quest2Field1 = arrayRespostas2[0];
    formValues.quest2Field2 = arrayRespostas2[1];
    formValues.quest2Field3 = arrayRespostas2[2];
    formValues.quest2Field4 = arrayRespostas2[3];
    formValues.quest2Field5 = arrayRespostas2[3];
    //console.log("array respostas 2: ", arrayRespostas2);
  }
  function preencheForm(){
    console.log(arrayRespostas[0]);
    valoresForm.quest1Field1 = arrayRespostas[0];
    valoresForm.quest1Field2 = arrayRespostas[1];
    valoresForm.quest1Field3 = arrayRespostas[2];
    valoresForm.quest1Field4 = arrayRespostas[3];

    handleNext();
  }

  function preencheForm2(){
    valoresForm.quest2Field1 = arrayRespostas2[0];
    valoresForm.quest2Field2 = arrayRespostas2[1];
    valoresForm.quest2Field3 = arrayRespostas2[2];
    valoresForm.quest2Field4 = arrayRespostas2[3];
    valoresForm.quest2Field5 = arrayRespostas2[4];
    
  }




  return (
    <div className="container">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <title> Feed </title>
      </head>
      <div class="headerquestionario">
        <div class="headerquestionario__right">
          <div class="headerquestionarioOption" onClick={handleLogout}>
            <i class="material-icons headerquestionarioOption__icon" > account_circle </i>
            <h3>logout</h3>
          </div>
        </div>
      </div>
      <div className="container-questionario">
        <div className="wrap-questionario">
          <h1 className="questionario-titulo">Questionario</h1>
          <form onSubmit={handleSubmit}>
            <div className="fields-container">
              <p className="questionario-form-title">{steps[currentStep].title}</p>

              {steps[currentStep].id === "Perguntas" && (
                <div>

                  <p className="questionario-form-title"> Você assiste a séries regularmente?</p>
                  <select id="questao1" className="questionario-form-select" onChange= {lerValores} >
                  <option selected value={0}>Selecione uma opção</option>
                    <option value={[1,1,'video']}>Sim, de 2 a 5 séries no ultimo ano</option>
                    <option  value={[2,2,'video']}>Sim, de 5 a 10 séries</option>
                    <option  value={[3,0,'video']}>Não assisto series regularmente</option>
                  </select>

                  <p className="questionario-form-title"> Com que frequência você escuta música? </p>
                  <select id="questao2" className="questionario-form-select" onChange= {lerValores} >
                    <option selected value= {0}>Selecione uma opção"</option>
                    <option value={[1,1,'audio']}>1 a 5 vezes por semana</option>
                    <option value={[2,2,'audio']}>6 a 10 vezes na semana</option>
                    <option value={[3,0,'audio']} >Não estudo musica regularmente</option>
                  </select>

                  <p className="questionario-form-title"> Quantos livros leu nos últimos anos? </p>
                  <select id="questao3" className="questionario-form-select" onChange= {lerValores}>
                    <option selected value= {0}>Selecione uma opção</option>
                    <option value= {[1,1,'texto']}>2 a 5 livros no último ano</option>
                    <option value= {[2,2,'texto']}>6 a 10 livros no último ano</option>
                    <option value= {[3,0,'texto']}> Não li nenhum livro do último ano</option>
                  </select>

                  <p className="questionario-form-title"> Em questionarios, você tem mais facilidade com o que? </p>
                  <select  id="questao4" className="questionario-form-select" onChange= {lerValores}>
                    <option selected value= {0}>Selecione uma opção</option>
                    <option value= {[1,1,'questionario']}>Multipla escolha</option>
                    <option value= {[2,1,'questionario']}>Dissertativas</option>
                    <option value= {[3,1,'questionario']}>Ambos</option>
                    <option value= {[4,0,'questionario']}>Não gosto de testes/provas</option>
                  </select>

                  
                </div>
              )}

              {steps[currentStep].id === "Geral" && (
                <div>

                <p className="questionario-form-title"> Quando você vai a um restaurente e vai escolher o seu prato, você:</p>
                  <select id="page2Questao1" className="questionario-form-select" onChange= {lerValores2}>
                    <option selected value= {0}>Selecione uma opção</option>
                    <option value= {[1,1,'texto']}>Prefere ler o cardápio calmamente para escolher</option>
                    <option value= {[2,1,'video']}>Prefere as opções de melhor aparência</option>
                    <option value= {[3,1,'audio']}>Prefere que o garçom lhe explique alguma opção</option>
                  </select>

                  <p className="questionario-form-title"> Nos momentos livres você prefere: </p>
                  <select  id="page2Questao2"className="questionario-form-select" onChange= {lerValores2}>
                    <option selected value= {0}>Selecione uma opção</option>
                    <option value= {[1,1,'video']}>Ver TV</option>
                    <option value= {[2,1,'texto']}>Ler um livro</option>
                    <option value= {[3,1,'audio']}>Escutar música</option>
                  </select>

                  <p className="questionario-form-title"> Quando está vendo TV, você: </p>
                  <select  id="page2Questao3"className="questionario-form-select" onChange= {lerValores2}>
                    <option selected value= {0}>Selecione uma opção</option>
                    <option value= {[1,1,'video']}>Só consegue prestar atenção olhando para a tela</option>
                    <option value= {[2,1,'audio']}>A imagem não tem tanta importância, servindo apenas como complementação.</option>
                  </select>

                  <p className="questionario-form-title"> Quando está estudando, você: </p>
                  <select id="page2Questao4" className="questionario-form-select" onChange= {lerValores2}>
                    <option selected value= {0}>Selecione uma opção</option>
                    <option value= {[1,1,'texto']}>Gosta de esquemas e mapas mentais</option>
                    <option value= {[2,1,'audio']}>Gosta de ouvir ao invés de anotar</option>
                    <option value= {[3,1,'questionario']}>Gosta de trabalhar com exemplos</option>
                  </select>

                  <p className="questionario-form-title" > Quando vai estudar prefere: </p>
                  <select  id="page2Questao5"className="questionario-form-select" onChange= {lerValores2}>
                    <option selected value= {0}>Selecione uma opção</option>
                    <option value= {[1,1,'texto']}>Livros que contenham esquemas e imagens</option>
                    <option value= {[2,1,'questionario']}>Livros com questões e provas anteriores</option>
                    <option value= {[3,1,'video']}>Prefere escutar uma aula e entender o que o professor fala</option>
                  </select>
                </div>
              )}

              {currentStep < steps.length - 1 && (
                <div className="container-questionario-form-btn">
                  <button className="questionario-form-btn" type="button" onClick={preencheForm}>
                    Next
                  </button>
                </div>
              )}

              {currentStep === steps.length - 1 && (
                <div className="container-questionario-form-btn">
                  <button className="questionario-form-btn" type="submit" onClick={preencheForm2}>
                    Enviar
                  </button>
                </div>
              )}

              {currentStep >= 1 && (
                <div className="container-questionario-form-btn">
                  <button className="questionario-form-btn" type="button" onClick={handleBack} >
                    Volta
                  </button>
                </div>
              )}

              {loading && <h1 className="loader" >Enviando...</h1>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
