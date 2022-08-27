
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Quest from "./Questionario";
import Login from "./login";
import {useNavigate} from "react-router-dom";

function App(){
  return(
  <Router>
  <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/quest" element={<Quest/>} />
  </Routes>
  </Router>

  );
}

export default App;