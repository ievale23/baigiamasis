import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Homepage } from "./components/Homepage";
import { EventPlanner } from "./components/EventPlanner";
import { useContext, useState } from "react";
import Protected from "./components/Protected";
import { NavBar } from "./components/NavBar";
import { AuthenticationContext } from "./components/AuthenticationContext";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

  // if (isLoading) {
  //   <div>Page is loading</div>;
  // }

  return (
    <>
      <NavBar onLogOut={handleLogOut} />
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route element={<Login setIsLoading={setIsLoading} />} path="/login" />

        <Route
          element={
            <Protected setIsLoading={setIsLoading} isLoading={isLoading} />
          }
        >
          <Route element={<EventPlanner />} path="/events" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
