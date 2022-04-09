import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import RecordApp from "./components/RecordApp/RecordApp";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<RecordApp/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
