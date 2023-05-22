import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
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
    </>
  );
};
