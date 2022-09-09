import {useState } from "react";
import jpIMG from "../assets/icons-school.png";
import "../styles.css"
import { useNavigate} from "react-router-dom";
import "../App.css";
import axios from 'axios';
import endPoints from "../services/api's";



function AlteraSenha() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [senhaNova, setSenhaNova] = useState("");
  const body ={

    "user_cpf":cpf,
    "user_senha":senhaNova
 }

  async function esqueciSenha() {
    await axios.patch(`${endPoints.esqueciMinhaSenha}`,body)
      .then((response) => {
        console.log(response)
        console.log("dados",cpf,senhaNova)
        
       

       console.log(body)
       alert("senha alterada com sucesso")
       navigate("/")

      })
      .catch((erro) => {
        console.log("dados",cpf,senhaNova)
        let p = document.getElementById('mensagemerro');
        p.style.display = 'block';
      })
  }


  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          
          
            <form className="login-form" onSubmit={esqueciSenha}>


              <span className="login-form-title">
                <img src={jpIMG} alt="Jovem Programador" />
              </span>
              <span className="login-form-title"> Alterar Senha </span>

              <div className="wrap-input">
                <input
                  className={cpf !== "" ? "has-val input" : "input"}
                  type="text"
                  name="email"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />   
                <span className="focus-input" data-placeholder="CPF"></span>
               
              </div>

              <div className="wrap-input">
                <input
                  className={senhaNova !== "" ? "has-val input" : "input"}
                  type="password"
                  name="password"
                  value={senhaNova}
                  onChange={(e) => setSenhaNova(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha Nova"></span>
                
              </div>
              <p id="mensagemerro" style={{display:'none'}}> CPF não encontrado !</p>
              <div className="container-login-form-btn">
                <button className="login-form-btn" type="submit"> Alterar </button>
              </div>

              <div className="text-center">
                
                <a className="txt2" onClick={() => {navigate("/")}}>
                  Voltar
                </a>
              </div>
            </form>
          
        </div>
      </div>
    </div>
  );

}


export default AlteraSenha;

