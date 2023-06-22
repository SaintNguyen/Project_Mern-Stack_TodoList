import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";
import "../../Form.css";
const LoginForm = () => {
  // Context
  const { loginUser } = useContext(AuthContext);

  // Local state
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (!loginData.success) {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-form">
        <Form className="my-4" onSubmit={login}>
          <AlertMessage info={alert} />
          <h2>Login now</h2>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              required
              value={username}
              onChange={onChangeLoginForm}
              className="input"
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={onChangeLoginForm}
            />
          </Form.Group>
          <br />
          <Button variant="success" type="submit" className="ml-2">
            Login
          </Button>
        </Form>
        <p>
          Don't have an account? &nbsp;
          <Link to="/register">
            <Button variant="info" size="sm" className="ml-2">
              Sign up
            </Button>
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
