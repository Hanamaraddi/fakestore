import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Header } from "./components/Header/Header";
import { Firstpage } from "./components/Firstpage/Firstpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Productdetail } from "./components/Productdetail/Productdetail";
import Home from "./Home/Home";
import Buy from "./components/Buy/Buy";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Firstpage />} />
          <Route exact path="/products/:id" element={<Productdetail />} />
          <Route exact path="/orderdetails" element={<Buy />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
