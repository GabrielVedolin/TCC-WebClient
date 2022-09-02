
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Quest from "./Questionario";
import Login from "./login";
import AlteraSenha from "./alterarSenha"
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