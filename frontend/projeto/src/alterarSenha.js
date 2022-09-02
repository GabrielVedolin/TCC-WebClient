import {useState } from "react";
import jpIMG from "./assets/icons-school.png";
import "./styles.css";
import { useNavigate} from "react-router-dom";
import "./App.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { render } from "@testing-library/react";


function Altera() {
  const navigate = useNavigate();
  const handleLogin = (values) => console.log(values);
  const [Cpf, setCpf] = useState("");
  const [Senha, setSenha] = useState("");
  
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
       
          <Formik initialValues={{}}>
           
            <Form className="login-form">


              <span className="login-form-title">
                <img src={jpIMG} alt="Jovem Programador" />
              </span>
              <span className="login-form-title"> Alterar Senha </span>

              <div className="wrap-input">
                <Field
                   className={Cpf !== "" ? "has-val input" : "input"}
                   type="email"
                   value={Cpf}
                   onChange={e => setCpf(e.target.value)}
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
                   className={Senha !== "" ? "has-val input" : "input"}
                   type="password"
                   value={Senha}
                   onChange={e => setSenha(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>
              <div className="container-login-form-btn">
                <button className="login-form-btn" type="submit"> Altera Senha </button>
              </div>
             
            </Form>
         
          </Formik>
          
        </div>
      </div>
    </div>
  );

}


export default Altera();

