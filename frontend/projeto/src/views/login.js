import { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import jpIMG from "../assets/icons-school.png";
import "../styles/login.css"
import { useNavigate } from "react-router-dom";
import "../App.css";


function Login() {

  const navigate = useNavigate();
  const {authenticated, login} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(("submit:", { email, password }));
    login(email, password);
  }
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="login-form-title">
              <img src={jpIMG} alt="Jovem Programador" />
            </span>
            <span className="login-form-title"> Bem vindo </span>
          
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Login"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>
            <p id="mensagemerro" style={{display:'none'}}> Usuario invalido!!!</p>
            <div className="container-login-form-btn">
              <button className="login-form-btn" type="submit" > Login </button>
            </div>

            <div className="text-center">
              <span className="txt1">Esqueceu a Senha? </span>
              <a className="txt2" onClick={() => { navigate("/alterarSenha") }}>
                Alterar Senha
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}


export default Login;

