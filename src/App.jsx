import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Register, AdminLogin, AdminRegister } from './Components/LoginRegister';
import { Home, HomeMain, AdminPanel } from './Components/AllPages';
import { Navbar } from "./Components/others";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeM" element={<HomeMain />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminRegister" element={<AdminRegister />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;