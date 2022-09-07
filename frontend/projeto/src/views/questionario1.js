import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fakeApi from "../api/api";
import "../styles/stylesQuestionario.css";


import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
  StyledButton
} from "../styles.js";

function Dropdown(props) {
  return (
    <DropdownWrapper action={props.action} onChange={props.onChange}>
      <StyledLabel htmlFor="services">{props.formLabel}</StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
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
    <div className="container-questionario">
    <div className="wrap-questionario">
      <h1 className="questionario-titulo">Questionario</h1>
    

      <form  onSubmit={handleSubmit}>
        <div className="fields-container">
          <p className="questionario-form-title">{steps[currentStep].title}</p>

          {steps[currentStep].id === "Perguntas" && (
            <div>

              <p className="questionario-form-title"> Você assiste a séries regularmente?</p>
              <Dropdown className="questionario-form-dropdown">
                <Option className="teste" selected value="Selecione uma opção" />
                <Option value="Sim, de 2 a 5 séries no ultimo ano" />
                <Option value="Sim, de 5 a 10 séries" />
                <Option value="Não assisto series regularmente" />
              </Dropdown>

              <p className="questionario-form-title"> Com que frequência você escuta música? </p>
              <Dropdown>
                <Option selected value="Selecione uma opção" />
                <Option value="1 a 5 vezes por semana" />
                <Option value="6 a 10 vezes na semana" />
                <Option value="Não estudo musica regularmente" />
              </Dropdown>

              <p className="questionario-form-title"> Quantos livros leu nos últimos anos? </p>
              <Dropdown>
                <Option selected value="Selecione uma opção" />
                <Option value="2 a 5 livros no último ano" />
                <Option value="6 a 10 livros no último ano" />
                <Option value="Não li nenhum livro do último ano" />
              </Dropdown>

              <p className="questionario-form-title"> Em questionarios, você tem mais facilidade com o que? </p>
              <Dropdown>
                <Option selected value="Selecione uma opção" />
                <Option value="Multipla escolha" />
                <Option value="Dissertativas" />
                <Option value="Ambos" />
              </Dropdown>
            </div>
          )}

          {steps[currentStep].id === "Geral" && (
            <div>

            <p className="questionario-form-title"> Quando você vai a um restaurente e vai escolher o seu prato, você:</p>
            <Dropdown>
              <Option selected value="Selecione uma opção" />
              <Option value="Prefere ler o cardápio calmamente para escolher" />
              <Option value="Prefere as opções de melhor aparência" />
              <Option value="Prefere que o garçom lhe explique alguma opção" />
            </Dropdown>

            <p className="questionario-form-title"> Nos momentos livres você prefere: </p>
            <Dropdown>
              <Option selected value="Selecione uma opção" />
              <Option value="Ver TV" />
              <Option value="Ler um livro" />
              <Option value="Escutar música" />
            </Dropdown>

            <p className="questionario-form-title"> Quando está vendo TV, você: </p>
            <Dropdown>
              <Option selected value="Selecione uma opção" />
              <Option value="Só consegue prestar atenção olhando para a tela" />
              <Option value="A imagem não tem tanta importância, servindo apenas como complementação." />
            </Dropdown>

            <p className="questionario-form-title"> Quando está estudando, você: </p>
            <Dropdown>
              <Option selected value="Selecione uma opção" />
              <Option value="Gosta de esquemas e mapas mentais" />
              <Option value="Gosta de ouvir ao invés de anotar" />
              <Option value="Gosta de trabalhar com exemplos" />
            </Dropdown>

            <p className="questionario-form-title"> Quando vai estudar prefere: </p>
            <Dropdown>
              <Option selected value="Selecione uma opção" />
              <Option value="Livros que contenham esquemas e imagens" />
              <Option value="Livros com questões e provas anteriores" />
              <Option value="Prefere escutar uma aula e entender o que o professor fala" />
            </Dropdown>
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
