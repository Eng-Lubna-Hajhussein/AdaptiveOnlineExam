import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";

const FeatureData = [
  {
    title: {
      en:"Quick learning",
      ar:"التعلم السريع"
    },
    desc: {
      en:"Experience a personalized learning journey that optimizes your study efforts and propels your progress.",
      ar:"قم بتجربة رحلة تعليمية مخصصة تعمل على تحسين جهودك الدراسية وتعزز تقدمك."
    },
    icon: "ri-draft-line",
  },

  {
    title: {
      en:"All Time Support",
      ar:"دعم طوال الوقت"
    },
    desc: {
      en:"Uninterrupted Assistance Whenever You Need It: Our Online Adaptive Exam Platform is Here to Support You Around the Clock.",
      ar:"مساعدة غير منقطعة متى احتجت إليها و منصة الاختبارات التكيفية عبر الإنترنت الخاصة بنا موجودة لمساعدتك على مدار الساعة."
    },
    icon: "ri-discuss-line",
  },

  {
    title: {
      en:"Certification",
      ar:"الشهادة"
    },
    desc: {
      en:"Validate Your Success with Our Platform's Recognized Exam Certificates.",
      ar:"تحقق من نجاحك من خلال شهادات الامتحان المعترف بها لمنصتنا."
    },
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  const { appState } = useContext(AppContext);
  return (
    <section dir={appState.dir}>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon} style={{color:"#e92239"}}></i>
                </h2>
                <h4>{item.title[appState.lang]}</h4>
                <p style={{color:"gray",fontWeight:"400"}}>{item.desc[appState.lang]}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
