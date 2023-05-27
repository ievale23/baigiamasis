import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import axios from "axios";
import { StyledContainer, StyledForm } from "../styles/StyledLogin";
import { StyledP } from "../styles/StyledRegister";

export const Login = ({ setIsLoading }) => {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", loginData)
      .then((response) => {
        if (response.data.token) {
          console.log("response", response.data);
          localStorage.setItem("token", response.data.token);
          setIsSignedIn(true);
          setIsLoading(false);
          navigate("/events");
        } else {
          setError(response.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledContainer>
      <StyledP>Prisijungti</StyledP>
      <StyledForm onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            style={{ width: "250px" }}
            name="email"
            type="email"
            placeholder="El. paštas"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            style={{ width: "250px" }}
            name="password"
            type="password"
            placeholder="Slaptažodis"
            onChange={handleOnChange}
          />
        </Form.Group>
        <p>
          Neturi paskyros? <Link to="/register">Užsiregistruok!</Link>{" "}
        </p>

        <Button variant="dark" type="submit">
          Prisijungti
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};
