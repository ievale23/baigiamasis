import { Link } from "react-router-dom";
import { StyledNavBar } from "../styles/StyledNavBar";
import { AuthenticationContext } from "./AuthenticationContext";
import { useContext } from "react";

export const NavBar = ({ onLogOut }) => {
  const { isSignedIn } = useContext(AuthenticationContext);

  return (
    <StyledNavBar>
      <p>EventWell</p>
      <ul>
        {isSignedIn ? (
          <>
            <li>
              <Link to="/" onClick={onLogOut}>
                Atsijungti
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Tavo verslui</Link>
            </li>

            <li>
              <Link to="/login">Prisijungti</Link>
            </li>
          </>
        )}
      </ul>
    </StyledNavBar>
  );
};
