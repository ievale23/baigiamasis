import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Register } from "./components/Register";
import { Login } from "./components/Login";

function App() {
  return (
    <Routes>
      <Route element={<Register />} path="/register" />
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}

export default App;
