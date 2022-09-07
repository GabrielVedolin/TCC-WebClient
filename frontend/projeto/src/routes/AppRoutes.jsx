import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Quest from "../views/questionario1";
import Login from "../views/login";
import AlteraSenha from "../views/alterarSenha"; 
import Feed from "../views/feed";
import PageProf1 from "../views/pageProfessor1";

const AppRoutes = () =>{
    return(
        <Router>
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/quest" element={<Quest/>} />
            <Route exact path="/alterarSenha" element={<AlteraSenha/>} />
            <Route exact path="/feed" element={<Feed/>}/>
            <Route exact path="/pageProf1" element={<PageProf1/>}/>
            
        </Routes>
        </Router>
      
        );
}

export default AppRoutes;