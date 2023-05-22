import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const EventPlanner = () => {
  return (
    <>
      <p>Renginių planavimo forma</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Renginio pavadinimas</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Vards</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Pavardė</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Emails</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Tel nr</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <h2>Renginiai:</h2>
      <h4>Renginys #1</h4>
      <p>Žmogus 1</p>
      <p>Žmogus 2</p>
      <p>Žmogus 3</p>
      <p>Žmogus 4</p>
      <h4>Renginys #2</h4>
      <p>Žmogus 1</p>
      <p>Žmogus 2</p>
      <p>Žmogus 3</p>
      <p>Žmogus 4</p>
    </>
  );
};
