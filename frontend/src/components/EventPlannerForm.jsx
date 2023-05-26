import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export const EventPlannerForm = () => {
  const [form, setForm] = useState({
    title: "",
    date: "",
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
      <p>Sukurkite naują renginį</p>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Renginio pavadinimas</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Renginio pavadinimas"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Renginio data</Form.Label>
          <Form.Control
            name="date"
            type="text"
            placeholder="Renginio data"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Vards</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Vardas"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Pavardė</Form.Label>
          <Form.Control
            name="surname"
            type="text"
            placeholder="Pavardė"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Emails</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="El. paštas"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Tel nr</Form.Label>
          <Form.Control
            name="phoneNo"
            type="text"
            placeholder="+3706xxxxxxx"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
