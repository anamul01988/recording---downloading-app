import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import RecordApp from "./components/RecordApp/RecordApp";
import Testimony from "./components/Testimony/Testimony";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/record" element={<RecordApp/>} />
        <Route path="/testimony" element={<Testimony />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
