import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import fakeApi from "../api/api";
import "../styles/stylesQuestionario.css";
import { AuthContext } from '../contexts/auth';


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
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState("");
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handleBack() {
    setCurrentStep((prevState) => prevState - 1);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Form sent...", formValues);

    setLoading(true);

    // simulate api
    await fakeApi(() => setLoading(false), 2000);
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
                  <select className= "questionario-form-select">
                    <option selected value="Selecione uma opção">Selecione uma opção</option>
                    <option value="Sim, de 2 a 5 séries no ultimo ano">Sim, de 2 a 5 séries no ultimo ano</option>
                    <option value="Sim, de 5 a 10 séries" >Sim, de 5 a 10 séries</option>
                    <option value="Não assisto series regularmente" >Não assisto series regularmente</option>
                  </select>

                  <p className="questionario-form-title"> Com que frequência você escuta música? </p>
                  <select className= "questionario-form-select">
                    <option selected value="Selecione uma opção" >Selecione uma opção"</option>
                    <option value="1 a 5 vezes por semana" >1 a 5 vezes por semana</option>
                    <option value="6 a 10 vezes na semana" >6 a 10 vezes na semana</option>
                    <option value="Não estudo musica regularmente" >Não estudo musica regularmente</option>
                  </select>

                  <p className="questionario-form-title"> Quantos livros leu nos últimos anos? </p>
                  <select className= "questionario-form-select">
                    <option  selected value="Selecione uma opção" >Selecione uma opção</option>
                    <option value="2 a 5 livros no último ano" >2 a 5 livros no último ano</option>
                    <option value="6 a 10 livros no último ano" >6 a 10 livros no último ano</option>
                    <option value="Não li nenhum livro do último ano" >ão li nenhum livro do último ano</option>
                  </select>

                  <p className="questionario-form-title"> Em questionarios, você tem mais facilidade com o que? </p>
                  <select className= "questionario-form-select">
                    <option selected value="Selecione uma opção" >Selecione uma opção</option>
                    <option value="Multipla escolha" >Multipla escolha</option>
                    <option value="Dissertativas" >Dissertativas</option>
                    <option value="Ambos" >Ambos</option>
                  </select>
                </div>
              )}

              {steps[currentStep].id === "Geral" && (
                <div>

                  <p className="questionario-form-title"> Quando você vai a um restaurente e vai escolher o seu prato, você:</p>
                  <select className= "questionario-form-select">
                    <option selected value="Selecione uma opção" >Selecione uma opção</option>
                    <option value="Prefere ler o cardápio calmamente para escolher" >Prefere ler o cardápio calmamente para escolher</option>
                    <option value="Prefere as opções de melhor aparência" >Prefere as opções de melhor aparência</option>
                    <option value="Prefere que o garçom lhe explique alguma opção">Prefere que o garçom lhe explique alguma opção</option>
                  </select>

                  <p className="questionario-form-title"> Nos momentos livres você prefere: </p>
                  <select className= "questionario-form-select">
                    <option selected value="Selecione uma opção">Selecione uma opção</option>
                    <option value="Ver TV" >Ver TV</option>
                    <option value="Ler um livro" >Ler um livro</option>
                    <option value="Escutar música" >Escutar música</option>
                  </select>

                  <p className="questionario-form-title"> Quando está vendo TV, você: </p>
                  <select className= "questionario-form-select">
                    <option selected value="Selecione uma opção">Selecione uma opção</option>
                    <option value="Só consegue prestar atenção olhando para a tela" >Só consegue prestar atenção olhando para a tela</option>
                    <option value="A imagem não tem tanta importância, servindo apenas como complementação." >A imagem não tem tanta importância, servindo apenas como complementação.</option>
                  </select>

                  <p className="questionario-form-title"> Quando está estudando, você: </p>
                  <select className= "questionario-form-select">
                    <option selected value="Selecione uma opção">Selecione uma opção</option>
                    <option value="Gosta de esquemas e mapas mentais" >Gosta de esquemas e mapas mentais</option>
                    <option value="Gosta de ouvir ao invés de anotar" >Gosta de ouvir ao invés de anotar</option>
                    <option value="Gosta de trabalhar com exemplos" >Gosta de trabalhar com exemplos</option>
                  </select>

                  <p className="questionario-form-title"> Quando vai estudar prefere: </p>
                  <select className= "questionario-form-select">
                    <option selected value="Selecione uma opção">Selecione uma opção</option>
                    <option value="Livros que contenham esquemas e imagens" >Livros que contenham esquemas e imagens</option>
                    <option value="Livros com questões e provas anteriores" >Livros com questões e provas anteriores</option>
                    <option value="Prefere escutar uma aula e entender o que o professor fala">Prefere escutar uma aula e entender o que o professor fala</option>
                  </select>
                </div>
              )}

              {currentStep < steps.length - 1 && (
                <div className="container-questionario-form-btn">
                  <button className="questionario-form-btn" type="button" onClick={handleNext}>
                    Next
                  </button>
                </div>
              )}

              {currentStep === steps.length - 1 && (
                <div className="container-questionario-form-btn">
                  <button className="questionario-form-btn" type="submit">
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
