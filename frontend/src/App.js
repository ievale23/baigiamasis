import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Homepage } from "./components/Homepage";
import { EventPlanner } from "./components/EventPlanner";

function App() {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<Register />} path="/register" />
      <Route element={<Login />} path="/login" />
      <Route element={<EventPlanner />} path="/events" />
    </Routes>
  );
}

export default App;
