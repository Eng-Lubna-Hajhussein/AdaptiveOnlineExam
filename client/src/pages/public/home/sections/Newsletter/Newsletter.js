import React, { useContext } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";

const Newsletter = () => {
  const { appState } = useContext(AppContext);
  const dictionary = {
    title:{
      en:"Subscribe To Our Last News!",
      ar:"اشترك في اخر الاخبار!"
    },
    placeholder:{
      eng:"Email...",
      ar:"البريد الالكتروني..."
    },
    btn:{
      en:"Subscribe",
      ar:"اشترك"
    }
  }
  return (
    <section dir={appState.dir}>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">{dictionary.title[appState.lang]}</h2>
            <div className="subscribe">
              <input type="text" placeholder={dictionary.placeholder[appState.lang]} />
              <button className="btn">{dictionary.btn[appState.lang]}</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
