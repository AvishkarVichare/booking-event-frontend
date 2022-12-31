import React, { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AdmiLogin() {
    return (
        <>
            <Container className="pt-5 fs-4">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" size="lg">
                                Log In
                            </Button>
                            <br /><br />
                            <a href="/admin-signup" className="text-danger">New Faculty, Signup Instead</a>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
