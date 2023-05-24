import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

export const Login = ({ setIsSignedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = () => {
    setIsSignedIn(true);
    navigate("/events");
  };

  return (
    <>
      <p>Login here</p>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
