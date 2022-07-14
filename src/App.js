import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
