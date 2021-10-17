import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function ContactForm() {
  return (
    <Form  className="contact-form">
      <h1 className="formGroup">Submit your details</h1>
      <Form.Group className="mb-3 formGroup" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control/>
      </Form.Group>

      <Form.Group className="mb-3 formGroup"  controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Label htmlFor="basic-url" className="formGroup" >Website</Form.Label>
        <InputGroup className="formGroup">
          <InputGroup.Text>https://</InputGroup.Text>
          <FormControl id="inlineFormInputGroupWebsite" />
        </InputGroup>

      <Form.Group className="mb-3 formGroup" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={6} />
          </Form.Group>

      <Form.Group className="mb-3 formGroup" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
          </Form.Group>         
      <Form.Group className="formGroup">
        <Button variant="formbutton" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ContactForm;
