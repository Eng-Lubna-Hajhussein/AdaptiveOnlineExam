import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../../../assests/images/home.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="9" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">Petra Tourism...</h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas illum quae porro architecto provident assumenda ullam incidunt vitae? Optio, eligendi. Voluptates repellendus minus dolorem quae ratione est perferendis atque.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="3" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
