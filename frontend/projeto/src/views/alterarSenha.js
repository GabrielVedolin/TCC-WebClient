import {useState } from "react";
import jpIMG from "../assets/icons-school.png";
import "../styles.css"
import { useNavigate} from "react-router-dom";
import "../App.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";



function AlteraSenha() {
  const navigate = useNavigate();
  const handleLogin = (values) => console.log('values');
  const [cpf, setCpf] = useState("");
  const [senhaNova, setSenhaNova] = useState("");
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
              <span className="login-form-title"> Alterar Senha </span>

              <div className="wrap-input">
                <Field
                  className={cpf !== "" ? "has-val input" : "input"}
                  type="text"
                  name="email"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />   
                <span className="focus-input" data-placeholder="CPF"></span>
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>

              <div className="wrap-input">
                <Field
                  className={senhaNova !== "" ? "has-val input" : "input"}
                  type="password"
                  name="password"
                  value={senhaNova}
                  onChange={(e) => setSenhaNova(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha Nova"></span>
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn" type="submit"> Alterar </button>
              </div>

              <div className="text-center">
                
                <a className="txt2" onClick={() => {navigate("/quest")}}>
                  Voltar
                </a>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );

}


export default AlteraSenha;

