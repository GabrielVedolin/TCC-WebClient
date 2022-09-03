
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Quest from "./views/Questionario";
import Login from "./views/login";
import AlteraSenha from "./views/alterarSenha"
import {useNavigate} from "react-router-dom";

function App(){
  return(
  <Router>
  <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/quest" element={<Quest/>} />
      <Route path="/alterarSenha" element={<AlteraSenha/>} />
  </Routes>
  </Router>

  );
}

export default App;