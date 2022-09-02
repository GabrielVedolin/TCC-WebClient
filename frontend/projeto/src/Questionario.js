import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./styles.css";

import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
  StyledButton
} from "./styles.js";

function Dropdown(props) {
  return (
    <DropdownWrapper action={props.action} onChange={props.onChange}>
      <StyledLabel htmlFor="services">{props.formLabel}</StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
      <StyledButton type="submit" value={props.buttonText} />
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
        <h1>Video</h1>
        <p> Você assiste a séries regularmente?</p>
        <Dropdown
          buttonText="Send form"
          onChange={handleSelect}
          action="https://jsonplaceholder.typicode.com/posts"
        >
          <Option selected value="Selecione uma opção" />
          <Option value="Sim, de 2 a 5 séries no ultimo ano" />
          <Option value="Sim, de 5 a 10 séries" />
          <Option value="Não assisto series regularmente" />
        </Dropdown>
  
        <h1>Audio</h1>
        <p> Com que frequência você escuta música?</p>
        <Dropdown
          buttonText="Send form"
          onChange={handleSelect}
          action="https://jsonplaceholder.typicode.com/posts"
        >
          <Option selected value="Selecione uma opção" />
          <Option value="1 a 5 vezes por semana" />
          <Option value="6 a 10 vezes na semana" />
          <Option value="Não estudo musica regularmente" />
        </Dropdown>

        <h1>Audio</h1>
        <p> Com que frequência você escuta música?</p>
        <Dropdown
          buttonText="Send form"
          onChange={handleSelect}
          action="https://jsonplaceholder.typicode.com/posts"
        >
          <Option selected value="Selecione uma opção" />
          <Option value="1 a 5 vezes por semana" />
          <Option value="6 a 10 vezes na semana" />
          <Option value="Não estudo musica regularmente" />
        </Dropdown>
  
        <h1>Textos</h1>
        <p> Com que frequência você escuta música?</p>
        <Dropdown
          buttonText="Send form"
          onChange={handleSelect}
          action="https://jsonplaceholder.typicode.com/posts"
        >
          <Option selected value="Selecione uma opção" />
          <Option value="1 a 5 vezes por semana" />
          <Option value="6 a 10 vezes na semana" />
          <Option value="Não estudo musica regularmente" />
        </Dropdown>
    
        <div className="container-login-form-btn">
                <button className="login-form-btn" onClick={() => {navigate("/")}}> Proximo </button>
        </div>
      </div>
    );
  };

export default Quest;