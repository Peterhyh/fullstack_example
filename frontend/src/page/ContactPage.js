import { Formik, Form, Field } from 'formik';
import { Card, Button, Label, Col, FormGroup, Alert, Container } from 'reactstrap';

const ContactPage = () => {
    return (
        <Card>
            <Formik
                initialValues={{
                    email: '',
                    subject: '',
                    message: ''
                }}
            >
                <Form>
                    <FormGroup>
                        <Label htmlFor='email'>
                            Email
                        </Label>
                        <Col>
                            <Field
                                className='form-control'
                                name='email'
                                type='textarea'
                                placeholder='Your email'
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='subject'>
                            Subject
                        </Label>
                        <Col>
                            <Field
                                name='subject'
                                type='textarea'
                                className='form-control'
                                placeholder='subject'
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='message'>
                            message
                        </Label>
                        <Col>
                            <Field
                                className='form-control'
                                rows='12'
                                name='message'
                                type='textarea'
                                placeholder='message'
                            />
                        </Col>
                    </FormGroup>
                </Form>
            </Formik>
        </Card>
    )
};

export default ContactPage;