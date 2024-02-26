import React, { useContext } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../../../../assets/logo.png";
import "./footer.css";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";

const footerQuickLinks = [
  {
    display: {
      en:"Home",
      ar:"الصفحة الرئيسية"
    },
    url: "#",
  },
  {
    display: {
      en:"About US",
      ar:"من نحن؟"
    },
    url: "#",
  },

  {
    display: {
      en:"Exams",
      ar:"الامتحانات"
    },
    url: "#",
  },

  {
    display: {
      en:"Blog",
      ar:"المدونة"
    },
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: {en:"Privacy Policy",ar:"سياسة الخصوصية"},
    url: "#",
  },
  {
    display: {en:"Membership",ar:"العضوية"},
    url: "#",
  },

  {
    display: {en:"Purchases Guide",ar:"دليل الاشتراكات المدفوعة"},
    url: "#",
  },

  {
    display: {en:"Terms of Service",ar:"شروط الاستخدام"},
    url: "#",
  },
];

const Footer = () => {
  const { appState } = useContext(AppContext);
  const dictionary = {
    followUs:{
      en:"Follow us on social media",
      ar:"تابعنا على مواقع التواصل الاجتماعي"
    },
    explore:{
      en:"Explore",
      ar:"تصفح"
    },
    info:{
      en:"Information",
      ar:"معلوماتنا"
    },
    getInTouch:{
      en:"Get in Touch",
      ar:"تواصل معنا"
    }
  }
  return (
    <footer className="footer" dir={appState.dir}>
      <Container dir={appState.dir}>
        <Row style={{paddingTop:"50px"}} dir={appState.dir}>
          <Col lg="3" md="6" className="mb-4" dir={appState.dir}>
            <img src={logo} style={{ width: "150px", height: "60px" }} />
            <div className="follows" style={{paddingTop:"20px"}} dir={appState.dir}>
              <p className="mb-0" style={{paddingBottom:"5px"}} dir={appState.dir}>{dictionary.followUs[appState.lang]}</p>
              <span dir={appState.dir}>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line" style={{color:"#e92239",border:"1px solid #000",padding:"5px",borderRadius:"50%"}}></i>
                </a>
              </span>

              <span dir={appState.dir}>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line" style={{color:"#e92239",border:"1px solid #000",padding:"5px",borderRadius:"50%"}}></i>
                </a>
              </span>

              <span dir={appState.dir}>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line" style={{color:"#e92239",border:"1px solid #000",padding:"5px",borderRadius:"50%"}}></i>
                </a>
              </span>

              <span dir={appState.dir}>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line" style={{color:"#e92239",border:"1px solid #000",padding:"5px",borderRadius:"50%"}}></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4" dir={appState.dir}>
            <h6 className="fw-bold">{dictionary.explore[appState.lang]}</h6>
              {footerQuickLinks.map((item, index) => (

                  <a href={item.url} style={{display:"block",color:"#000", paddingBottom:"5px"}}>{item.display[appState.lang]}</a>
              ))}
          </Col>

          <Col lg="3" md="6" className="mb-4">
              <h6 className="fw-bold">{dictionary.info[appState.lang]}</h6>
              {footerInfoLinks.map((item, index) => (
      
                  <a href={item.url} style={{display:"block",color:"#000", paddingBottom:"5px"}}>{item.display[appState.lang]}</a>
              ))}
          </Col>

          <Col lg="3" md="6" dir={appState.dir}>
            <h5 className="fw-bold">{dictionary.getInTouch[appState.lang]}...</h5>
            <p className="fw-bold">{{en:"Address",ar:"الموقع"}[appState.lang]}: <span style={{fontSize:"14px"}}>{{en:"Jordan, Amman",ar:"الاردن، عمان"}[appState.lang]}</span></p>
            <p className="fw-bold">{{en:"Phone",ar:"رقم الهاتف"}[appState.lang]}: <span style={{fontSize:"14px"}} dir="ltr">+962 79 765 787</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
