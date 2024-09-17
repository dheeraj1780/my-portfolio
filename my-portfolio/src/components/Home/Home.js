import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import home from "D:/GitHub/my-portfolio/my-portfolio/src/assets/home.gif";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Dheeraj J</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={3} style={{ paddingTop: 20,paddingBottom: 20 }}>
              <img
                src={home}
                alt="Loading...."
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;