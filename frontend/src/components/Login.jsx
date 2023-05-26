import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import axios from "axios";

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
    <>
      <p>Login here</p>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleOnChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
        </Form.Group>
        <p>
          Neturi paskyros? <Link to="/register">Tapk partneriu!</Link>{" "}
        </p>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
