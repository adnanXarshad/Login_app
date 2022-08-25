import React from "react";
import "./LandingPage.css";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const LandingPage = () => {
  return (
    <div className="Main">
      <Container>
        <Row>
          <div className="bg-color">
            <div>
              <h1>Landing Page</h1>
            </div>
            <div>
              <Button className="button" href="#">
                LOGIN
              </Button>
              <Button className="button" href="#">
                SIGNUP
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
