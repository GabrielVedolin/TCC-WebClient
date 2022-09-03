import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import "../styles.css"

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

function Quest (){
    const navigate = useNavigate();
    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => {
      console.log(e.target.value);
      setOptionValue(e.target.value);
    };
  
    return (
      <div>
        <h1> Você assiste a séries regularmente?</h1>
        <Dropdown>
          <Option selected value="Selecione uma opção" />
          <Option value="Sim, de 2 a 5 séries no ultimo ano" />
          <Option value="Sim, de 5 a 10 séries" />
          <Option value="Não assisto series regularmente" />
        </Dropdown>
  
        <h1> Com que frequência você escuta música? </h1>
        <Dropdown>
          <Option selected value="Selecione uma opção" />
          <Option value="1 a 5 vezes por semana" />
          <Option value="6 a 10 vezes na semana" />
          <Option value="Não estudo musica regularmente" />
        </Dropdown>

        <h1> Quantos livros leu nos últimos anos? </h1>
        <Dropdown>
          <Option selected value="Selecione uma opção" />
          <Option value="2 a 5 livros no último ano" />
          <Option value="6 a 10 livros no último ano" />
          <Option value="Não li nenhum livro do último ano" />
        </Dropdown>
  
        <h1> Em questionarios, você tem mais facilidade com o que? </h1>
        <Dropdown>
          <Option selected value="Selecione uma opção" />
          <Option value="Multipla escolha" />
          <Option value="Dissertativas" />
          <Option value="Ambos" />
        </Dropdown>
  
        <div className="container-login-form-btn">
                <button className="login-form-btn" onClick={() => {navigate("/")}}> Proximo </button>
        </div>
      </div>
    );
  };

export default Quest;

// Exemplo pra funcionar um botão de send form
/* buttonText="Send form"
onChange={handleSelect}
action="https://jsonplaceholder.typicode.com/posts" */