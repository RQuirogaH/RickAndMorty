import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Characters from "./components/Characters/Characters";
import DetailCharacter from "./components/DetailCharacter/DetailCharacter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<DetailCharacter />} />
      </Routes>
    </div>
  );
}



export default App;
