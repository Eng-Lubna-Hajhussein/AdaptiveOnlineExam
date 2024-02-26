import React, { useContext } from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";

// import img from "../../../../assests/images/testimonial01.png";

const Testimonials = () => {
  const { appState } = useContext(AppContext);

  const dictionary = {
    title: {
      en: "Our Clients Voice...",
      ar: "راي عملائنا...",
    },
    clientOne: {
      title: {
        en: "Great Experience!",
        ar: "تجربة رائعة",
      },
      desc: {
        en: "This platform is a game-changer. The adaptive testing gave me a targeted study path, and the certification added a solid boost to my confidence. A must-try for students aiming to succeed efficiently!",
        ar: "هذه المنصة غيرت قواعد اللعبة. منحني الاختبار التكيفي مسارًا دراسيًا مستهدفًا ، كما أضافت الشهادة دفعة قوية إلى ثقتي. يجب أن يجربها الطلاب الذين يهدفون إلى تحقيق النجاح بكفاءة!",
      },
      name: {
        en: "Lana Omar",
        ar: "لانا عمر",
      },
      location: {
        en: "Jordan, Amman",
        ar: "الاردن، عمان",
      },
    },
    clientTwo: {
      title: {
        en: "Good Experience!",
        ar: "تجربة جيدة",
      },
      desc: {
        en: "This platform is a game-changer. The adaptive testing gave me a targeted study path, and the certification added a solid boost to my confidence. A must-try for students aiming to succeed efficiently!",
        ar: "هذه المنصة غيرت قواعد اللعبة. منحني الاختبار التكيفي مسارًا دراسيًا مستهدفًا ، كما أضافت الشهادة دفعة قوية إلى ثقتي. يجب أن يجربها الطلاب الذين يهدفون إلى تحقيق النجاح بكفاءة!",
      },
      name: {
        en: "Fadi Ahmad",
        ar: "فادي احمد",
      },
      location: {
        en: "Jordan, Jarash",
        ar: "الاردن، جرش",
      },
    },
    clientThree: {
      title: {
        en: "Very Good Experience!",
        ar: "تجربة جيدا جدا",
      },
      desc: {
        en: "This platform is a game-changer. The adaptive testing gave me a targeted study path, and the certification added a solid boost to my confidence. A must-try for students aiming to succeed efficiently!",
        ar: "هذه المنصة غيرت قواعد اللعبة. منحني الاختبار التكيفي مسارًا دراسيًا مستهدفًا ، كما أضافت الشهادة دفعة قوية إلى ثقتي. يجب أن يجربها الطلاب الذين يهدفون إلى تحقيق النجاح بكفاءة!",
      },
      name: {
        en: "Salma Khaled",
        ar: "سلمى خالد",
      },
      location: {
        en: "Jordan, Irbid",
        ar: "الاردن، اربد",
      },
    },
  };

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section dir={appState.dir}>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div
                className="testimonial__img w-50"
                style={{ padding: "10px" }}
              >
                <img
                  src={
                    "https://cdn01.alison-static.net/public/html/site/img/homepage/earn-1.svg"
                  }
                  alt=""
                  className="w-100"
                />
              </div>

              <div
                className="testimonial__content w-50"
                style={{ padding: "50px" }}
              >
                <h2 className="mb-4" style={{color:"#e92239"}}>{dictionary.title[appState.lang]}</h2>

                <Slider {...settings}>
                  <div dir={appState.dir}>
                    <div className="single__testimonial" dir={appState.dir}>
                      <h4 className="mb-3 fw-bold">
                        {dictionary.clientOne.title[appState.lang]}
                      </h4>
                      <p>{dictionary.clientOne.desc[appState.lang]}</p>

                      <div className="student__info mt-4" dir={appState.dir}>
                        <h5 className="fw-bold">
                          {dictionary.clientOne.name[appState.lang]}
                        </h5>
                        <p>{dictionary.clientOne.location[appState.lang]}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial" dir={appState.dir}>
                      <h4 className="mb-3 fw-bold">
                        {dictionary.clientTwo.title[appState.lang]}
                      </h4>
                      <p>{dictionary.clientTwo.desc[appState.lang]}</p>

                      <div className="student__info mt-4" dir={appState.dir}>
                        <h5 className="fw-bold">
                          {dictionary.clientTwo.name[appState.lang]}
                        </h5>
                        <p>{dictionary.clientTwo.location[appState.lang]}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial" dir={appState.dir}>
                      <h4 className="mb-3 fw-bold">{dictionary.clientThree.title[appState.lang]}</h4>
                      <p>
                      {dictionary.clientThree.desc[appState.lang]}
                      </p>

                      <div className="student__info mt-4" dir={appState.dir}>
                        <h5 className="fw-bold">{dictionary.clientThree.name[appState.lang]}</h5>
                        <p>{dictionary.clientThree.location[appState.lang]}</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
