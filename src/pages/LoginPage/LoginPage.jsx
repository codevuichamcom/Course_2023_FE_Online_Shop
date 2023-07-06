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
import "./LoginPage.css";
import { useState } from "react";
import { axiosClient } from "src/axios/AxiosClient";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLoggedInAccount } from "src/app/AccountSlice";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    isRemember: "",
  });
  const handleDataChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleLogin = async () => {
    const { data, err } = await axiosClient.post("/login", formData);
    if (err) {
      toast.error("Username or password incorrect");
    } else {
      const { accessToken, account } = data;
      localStorage.setItem("accessToken", accessToken);
      dispatch(setLoggedInAccount(account));
      navigate("/home");
    }
  };
  return (
    <>
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
              <Form onSubmit={handleLogin}>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Username"
                    onChange={(e) => {
                      handleDataChange("username", e.target.value);
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => {
                      handleDataChange("password", e.target.value);
                    }}
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={(e) => {
                        handleDataChange("isRemember", e.target.checked);
                      }}
                    />{" "}
                    Keep me logged in
                  </Label>
                </FormGroup>
                <Button outline color="primary" onClick={handleLogin}>
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
