import React, { useContext, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../../../../assets/video_bg.png";
import video from "../../../../../assets/video1.mov";
import "./choose-us.css";

import ReactPlayer from "react-player";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";

const ChooseUs = () => {
  const { appState } = useContext(AppContext);
  const [showVideo, setShowVideo] = useState(false);
  const dictionary = {
    title:{
      en:"Why Choose Us?",
      ar:"لماذا نحن؟"
    },
    desc:{
      en:"Our platform offers a tailored approach to learning through adaptive exams. Say goodbye to one-size-fits-all assessments and embrace a learning journey designed specifically for your strengths and areas of improvement.",
      ar:"تقدم منصتنا نهجًا مخصصًا للتعلم من خلال الاختبارات التكيفية. قل وداعًا للتقييمات ذات الحجم الواحد الذي يناسب الجميع واحتضن رحلة تعلم مصممة خصيصًا لنقاط القوة لديك ومجالات التحسين."
    }
  }
  return (
    <section dir={appState.dir}>
      <Container>
        <Row>
          <Col lg="6" md="6" className="m-auto">
            <div className="choose__content">
              <h2 style={{color:"#e92239"}}>{dictionary.title[appState.lang]}</h2>
              <h5 style={{fontWeight:"400"}}>
                {dictionary.desc[appState.lang]}
              </h5>
            </div>
          </Col>

          <Col lg="6" md="6" className="m-auto">
            <div className="choose__img" >
                <ReactPlayer
                  url={video}
                  controls
                  width="100%"
                  height="350px"
                />
              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
