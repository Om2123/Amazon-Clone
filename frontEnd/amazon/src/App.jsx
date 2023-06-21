import {  Route,Routes,  BrowserRouter } from "react-router-dom";
import HomePage from "./compo/HomePage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={HomePage}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
