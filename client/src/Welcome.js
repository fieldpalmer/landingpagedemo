import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Signup from './Signup';

const Welcome = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Hello, welcome to our landing page</h1>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <h2>Our team and product is already trusted by a bunch of people. Give us a chance!</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Signup />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>We'll let you know about any product updates</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome;