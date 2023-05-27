import axios from "axios";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { StyledContainer, StyledForm, StyledP } from "../styles/StyledRegister";

export const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
  });

  const handelOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", formData)
      .then((response) => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <StyledContainer>
      <StyledP>Norint užsiregistruoti užpildykite šią formą:</StyledP>
      <StyledForm onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>El. pašto adresas</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Įveskite el. paštą"
            onChange={handelOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Vardas</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Vardas"
            onChange={handelOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Pavardė</Form.Label>
          <Form.Control
            name="surname"
            type="text"
            placeholder="Pavardė"
            onChange={handelOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Slaptažodis</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Slaptažodis"
            onChange={handelOnChange}
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Registruotis
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};
