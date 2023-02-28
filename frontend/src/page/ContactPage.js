import { Formik, Form, Field } from "formik";
import { useFormik } from "formik";
import {
  Card,
  Button,
  Label,
  Col,
  FormGroup,
  Alert,
  Container,
} from "reactstrap";

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:8000/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      })
        .then((data) => data.json())
        .then((d) => {
          alert(JSON.stringify(d));
          console.log(d);
        });
    },
  });

  return (
    <Card>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Col>
              <Field
                className="form-control"
                name="email"
                type="textarea"
                placeholder="Your email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Col>
              <Field
                name="subject"
                type="textarea"
                className="form-control"
                placeholder="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">message</Label>
            <Col>
              <Field
                className="form-control"
                rows="12"
                name="message"
                type="textarea"
                placeholder="message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </Col>
          </FormGroup>
          <button type="submit">SEND</button>
        </Form>
      </Formik>
    </Card>
  );
};

export default ContactPage;
