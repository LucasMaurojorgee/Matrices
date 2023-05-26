import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Matriz from "./components/matriz/Matriz";
import Matriz2x2 from "./components/matriz/Matriz2x2";
import Matriz4x4 from "./components/matriz/Matriz4x4";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/3x3" element={<Matriz />} />
        <Route path="/2x2" element={<Matriz2x2 />} />
        <Route path="/4x4" element={<Matriz4x4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
