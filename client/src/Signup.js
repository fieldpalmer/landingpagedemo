import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Signup = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Your Email"
                            aria-label="Email Input"
                            aria-describedby="email input with submit button add-on"
                        />
                            <Button variant="outline-secondary" id="button-addon2">
                                Sign Up
                            </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;