import React, { useState } from "react";
import fakeApi from "../api";
import "../styles2.css";

const steps = [
  {
    id: "PERSONAL",
    title: "Dados pessoais"
  },
  {
    id: "SHIPPING",
    title: "Endereço de entrega"
  },
  {
    id: "PAYMENT",
    title: "Dados de pagamento"
  }
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    street_number: "",
    card_number: "",
    card_name: "",
    card_validity: ""
  });

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
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
    <div className="App">
      <h1>Multi Steps Form</h1>
      <p className="step-guide">
        {currentStep + 1} de {steps.length}
      </p>

      <form className="steps-form" onSubmit={handleSubmit}>
        <div className="fields-container">
          <p>{steps[currentStep].title}</p>

          {steps[currentStep].id === "PERSONAL" && (
            <div className="fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="Nome"
                  name="name"
                  onChange={handleInputChange}
                  value={formValues.name}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  onChange={handleInputChange}
                  value={formValues.email}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Telefone"
                  name="phone"
                  onChange={handleInputChange}
                  value={formValues.phone}
                />
              </div>
            </div>
          )}

          {steps[currentStep].id === "SHIPPING" && (
            <div className="fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="Cidade"
                  name="city"
                  onChange={handleInputChange}
                  value={formValues.city}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Rua"
                  name="street"
                  onChange={handleInputChange}
                  value={formValues.street}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Número"
                  name="street_number"
                  onChange={handleInputChange}
                  value={formValues.street_number}
                />
              </div>
            </div>
          )}

          {steps[currentStep].id === "PAYMENT" && (
            <div className="fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="Número do cartão"
                  name="card_number"
                  onChange={handleInputChange}
                  value={formValues.card_number}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Nome no cartão"
                  name="card_name"
                  onChange={handleInputChange}
                  value={formValues.card_name}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Validade"
                  name="card_validity"
                  onChange={handleInputChange}
                  value={formValues.card_validity}
                />
              </div>
            </div>
          )}

          {currentStep < steps.length - 1 && (
            <button className="button next" type="button" onClick={handleNext}>
              Next
            </button>
          )}

          {currentStep === steps.length - 1 && (
            <button className="button submit" type="submit">
              Enviar
            </button>
          )}

          {loading && <h1 className="loader">Enviando...</h1>}
        </div>
      </form>
    </div>
  );
}
