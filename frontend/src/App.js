import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Homepage } from "./components/Homepage";
import { EventPlanner } from "./components/EventPlanner";
import { useState } from "react";
import Protected from "./components/Protected";
import { NavBar } from "./components/NavBar";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  console.log("appjs", isSignedIn);

  return (
    <>
      <NavBar setIsSignedIn={setIsSignedIn} isSignedIn={isSignedIn} />
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route
          element={<Login setIsSignedIn={setIsSignedIn} />}
          path="/login"
        />
        <Route element={<Protected isSignedIn={isSignedIn} />}>
          <Route element={<EventPlanner />} path="/events" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
