
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Quest from "./views/Questionario";
import Login from "./views/login";
import AlteraSenha from "./views/alterarSenha"
import Quest2 from "./views/questionariov2"
import {useNavigate} from "react-router-dom";

function App(){
  return(
  <Router>
  <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/quest" element={<Quest/>} />
      <Route path="/alterarSenha" element={<AlteraSenha/>} />
      <Route path="/alterarSenha" element={<Quest2/>} />
  </Routes>
  </Router>

  );
}

export default App;