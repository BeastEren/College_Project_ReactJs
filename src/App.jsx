import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Register, AdminLogin, AdminRegister } from './Components/LoginRegister';
import { Home, User, AdminPanel } from './Components/AllPages';
import { Navbar } from "./Components/others";

function App() {
  return (
    <div>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/adminPanel" element={<AdminPanel />} />

          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminRegister" element={<AdminRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;