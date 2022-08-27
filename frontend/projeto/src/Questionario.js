function Quest (){
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
        <p>Você selecionou {optionValue}.</p>
  
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
        <p>Você selecionou {optionValue}.</p>
  
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
        <p>Você selecionou {optionValue}.</p>
  
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
        <p>Você selecionou {optionValue}.</p>
      </div>
    );
  };