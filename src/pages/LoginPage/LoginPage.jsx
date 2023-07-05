import React from "react";
import { Footer, Header } from "src/components";
import "./LoginPage.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

export const LoginPage = () => {
  return (
    <>
      <Header />
      <main className="login-page">
        <Container>
          <Row>
            <Col lg="6" className="login-page__left">
              <h3>New to our website?</h3>
              <div>
                There are advances being made in science and technology
                everyday, and a good example of this is the Create an Account
              </div>
              <button>Create an Account</button>
            </Col>
            <Col lg="6" className="login-page__right">
              <h3>LOG IN TO ENTER</h3>
              <Form>
                <FormGroup>
                  <Label htmlFor="Username">Username</Label>
                  <Input id="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" id="password" placeholder="Password" />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Keep me logged in
                  </Label>
                </FormGroup>
                <Button outline color="primary">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};
