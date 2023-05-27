import { Link } from "react-router-dom";
import {
  StyledLink,
  StyledNavBar,
  StyledUl,
  linkStyle,
} from "../styles/StyledNavBar";
import { AuthenticationContext } from "./AuthenticationContext";
import { useContext } from "react";
import ewlogo from "../img/ewlogoblack.png";
import "../styles/styles.css";

export const NavBar = ({ onLogOut }) => {
  const { isSignedIn } = useContext(AuthenticationContext);

  return (
    <StyledNavBar>
      <div className="logo">
        <img src={ewlogo} />
      </div>

      <div>
        <StyledUl>
          {isSignedIn ? (
            <>
              <li>
                <StyledLink to="/" onClick={onLogOut}>
                  Atsijungti
                </StyledLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <StyledLink to="/">Pradžia</StyledLink>
              </li>
              <li>
                <StyledLink to="/register">Registracija</StyledLink>
              </li>

              <li>
                <StyledLink to="/login">Prisijungti</StyledLink>
              </li>
            </>
          )}
        </StyledUl>
      </div>
    </StyledNavBar>
  );
};
