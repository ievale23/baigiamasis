import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { StyledForm, StyledP } from "../styles/StyledRegister";

export const EventPlannerForm = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNo: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/events", form)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div style={{ padding: "25px 0" }}>
        <StyledP style={{ fontWeight: "600" }}>
          Pridėkite naują renginio dalyvį
        </StyledP>
        <StyledForm onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Dalyvio vardas</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Vardas"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Dalyvio pavardė</Form.Label>
            <Form.Control
              name="surname"
              type="text"
              placeholder="Pavardė"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Dalyvio el. pašto adresas</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="El. paštas"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Dalyvio telefono numeris</Form.Label>
            <Form.Control
              name="phoneNo"
              type="text"
              placeholder="+3706xxxxxxx"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Pridėti
          </Button>
        </StyledForm>
      </div>
    </>
  );
};
