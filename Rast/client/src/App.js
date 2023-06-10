
import './App.css';
import Tablegrid from './pages/Tablegrid';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tablegrid/>}></Route>


    </Routes>
  </BrowserRouter>
  );
}

export default App;
