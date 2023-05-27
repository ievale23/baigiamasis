import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.nav`
  background-color: peachpuff;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 30px;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
`;
