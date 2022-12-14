import { useState } from "react";

import jpIMG from "../assets/icons-school.png";
import "../styles/login.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import endPoints from "../services/api's";

function AlteraSenha() {

  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [senhaNova, setSenhaNova] = useState("");


  const handleAlterarSenha = async(e) => {
    e.preventDefault();
    console.log(("submit:", { cpf, senhaNova }));
    const body = {
          "user_cpf": cpf,
          "user_senha":senhaNova
      }
        console.log(body)
        await axios.post(`${endPoints.esqueciMinhaSenha}`, body)
          .then((response) => {
           console.log("response aqui",response)
           alert("senha atualizada com sucesso !")
           navigate("/")
           
          }).catch((erro) => {
            console.log('deu ruim', erro)
            let p = document.getElementById('mensagemerro');
            p.style.display = 'block';
          })

  }
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleAlterarSenha }>
            <span className="login-form-title">
              <img src={jpIMG} alt="Jovem Programador" />
            </span>
            <span className="login-form-title"> AlterarSenha </span>
          
            <div className="wrap-input">
              <input
                className={cpf !== "" ? "has-val input" : "input"}
                type="text"
                id="cpf"
                name="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <span className="focus-input" data-placeholder="CPF"></span>
            </div>

            <div className="wrap-input">
              <input
                className={senhaNova !== "" ? "has-val input" : "input"}
                type="password"
                id="password"
                name="password"
                value={senhaNova}
                onChange={(e) => setSenhaNova(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>
            <p id="mensagemerro" style={{display:'none'}}> Usuario n??o encontrado !</p>
            <div className="container-login-form-btn">
              <button className="login-form-btn" type="submit" > Alterar Senha </button>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" type="submit" onClick={() => { navigate("/") }}> Voltar </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );

}


export default AlteraSenha;

