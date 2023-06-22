import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/logo.png";
import "../Form.css";
const About = () => {
  return (
    <Row className="mt-5" style={{ marginRight: 0 }}>
      <Col className="text-center">
        <Button
          variant="primary"
          href="https://www.facebook.com/profile.php?id=100086916945321"
          size="lg"
          target="_blank"
        >
          Visit to Schwarzer Ritter page
        </Button>
        <br />
        <img
          src={logo}
          className="sr-logo"
          alt="Schwarzer Ritter"
          width="400"
          height="400"
        />
      </Col>
    </Row>
  );
};

export default About;
