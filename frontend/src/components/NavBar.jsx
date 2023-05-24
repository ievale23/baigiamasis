import { Link } from "react-router-dom";
import { StyledNavBar } from "../styles/StyledNavBar";
import { useState } from "react";

export const NavBar = ({ setIsSignedIn, isSignedIn }) => {
  console.log("navbar", isSignedIn);
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
        {!isSignedIn && (
          <li>
            <Link to="/login">Prisijungti</Link>
          </li>
        )}
        {isSignedIn && (
          <li>
            <Link
              to="/"
              onClick={() => {
                setIsSignedIn(false);
              }}
            >
              Atsijungti
            </Link>
          </li>
        )}
      </ul>
    </StyledNavBar>
  );
};
