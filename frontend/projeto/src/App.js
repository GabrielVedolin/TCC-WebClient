
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Quest from "./views/questionario1"
import Login from "./views/login";
import AlteraSenha from "./views/alterarSenha"  
import Feed from "./views/feed";
import PageProf1 from "./views/pageProfessor1"
import {useNavigate} from "react-router-dom";

function App(){
  return(
  <Router>
  <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/quest" element={<Quest/>} />
      <Route path="/alterarSenha" element={<AlteraSenha/>} />
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/pageProf1" element={<PageProf1/>}/>
      
  </Routes>
  </Router>

  );
}

export default App;