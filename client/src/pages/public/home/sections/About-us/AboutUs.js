import React, { useContext } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../../../../assets/bg1.jpg";
import CountUp from "react-countup";
import "./about.css";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";

const AboutUs = () => {
  const { appState } = useContext(AppContext);
  const dictionary = {
    title:{
      en:"About Us",
      ar:"من نحن؟"
    },
    desc:{
      en:"Welcome to the About Us section. We are a group of University of Jordan students who have developed an online adaptive exam platform as part of our graduation project. Our platform is designed to recognize both the strengths and weaknesses of each test taker, providing a tailored exam experience. Learn more about our project, which focuses on practical application and innovation in the field of education.",
      ar:"مرحبا بكم في صفحة من نحن. نحن مجموعة من طلاب الجامعة الأردنية الذين طوروا منصة امتحانات تكيفية عبر الإنترنت كجزء من مشروع التخرج. تم تصميم منصتنا للتعرف على نقاط القوة والضعف لكل متقدم للاختبار ، مما يوفر تجربة اختبار مخصصة. تعرف على المزيد حول مشروعنا الذي يركز على التطبيق العملي والابتكار في مجال التعليم."
    }
  }
  return (
    <section dir={appState.dir}>
      <Container>
        <Row>
          <Col lg="6" md="6" className="m-auto">
            <div className="about__img">
              <img  src={"https://cdn01.alison-static.net/public/html/site/img/homepage/earn-2.svg"} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6" className="m-auto">
            <div className="about__content">
              <h2 style={{color:"#e92239"}}>{dictionary.title[appState.lang]}</h2>
              <h5 style={{fontWeight:"400"}}>
                {dictionary.desc[appState.lang]}
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
