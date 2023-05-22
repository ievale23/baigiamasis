import { Link } from "react-router-dom";
import { StyledNavBar } from "../styles/StyledNavBar";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <p>EventWell</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Tavo verslui</Link>
        </li>
        <li>
          <Link to="/login">Prisijungti</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
};
