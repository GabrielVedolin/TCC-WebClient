import {useState } from "react";
import jpIMG from "../assets/icons-school.png";
import "../styles.css"
import { useNavigate} from "react-router-dom";
import "../App.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import "./Questionario";


function Login() {
  const navigate = useNavigate();
  const handleLogin = (values) => console.log('values');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <Formik initialValues={{}}
          onSubmit={handleLogin}>
            <Form className="login-form">


              <span className="login-form-title">
                <img src={jpIMG} alt="Jovem Programador" />
              </span>
              <span className="login-form-title"> Bem vindo </span>

              <div className="wrap-input">
                <Field
                  className={email !== "" ? "has-val input" : "input"}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />   
                <span className="focus-input" data-placeholder="Email"></span>
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>

              <div className="wrap-input">
                <Field
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn" type="submit"> Login </button>
              </div>

              <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <a className="txt2" onClick={() => {navigate("/alterarSenha")}}>
                  Criar conta
                </a>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );

}


export default Login;

