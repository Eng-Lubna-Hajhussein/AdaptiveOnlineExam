import React, { useContext } from "react";
import Header from "../header/Header";
import {
  Container,
  CssBaseline,
  Divider,
  Grid,
  Rating,
  SvgIcon,
  Typography,
} from "@basetoolkit/ui";
import { AppContext } from "../../../contextapi/contexts/AppContext";
import AboutUs from "./sections/About-us/AboutUs";
import ChooseUs from "./sections/Choose-us/ChooseUs";
import Features from "./sections/Feature-section/Features";
import Courses from "./sections/Courses-section/Courses";
import Testimonials from "./sections/Testimonial/Testimonials";
import Newsletter from "./sections/Newsletter/Newsletter";
import Footer from "./sections/Footer/Footer";

const Home = () => {
  const { appState } = useContext(AppContext);

  const dictionary = {
    title: {
      en: "Free Adaptive Online Exams With Certificates",
      ar: "قدم امتحان الكفاءة اللغوي مجانا عبر الانترنت مع الشهادة",
    },
    statisticsTypoOne: {
      en: "Rated",
      ar: "تم تقييمه",
    },
    statisticsTypoTwo: {
      en: "By Evaluation Statistics",
      ar: "عبر احصائية تقييم",
    },
    statisticsTypoThree: {
      en: "High Quality Exams",
      ar: "امتحانات عالية الجودة",
    },
    statisticsTypoFour: {
      en: "For All Levels And Ages",
      ar: "لجميع المستويات والاعمار",
    },
  };

  return (
    <React.Fragment>
      <Header />
      <Container dir={appState.dir}>
        <CssBaseline />
        <Grid
          container
          sx={{
            height: "63vh",
            marginTop: "50px",
            paddingTop: "15px",
          }}
          justifyContent={"center"}
        >
          <Grid item xs="12" container>
            <Grid item xs="12">
              <Typography
                as="h4"
                sx={{
                  color: "#2d3941",
                  fontSize: "26px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                {dictionary.title[appState.lang]}
              </Typography>
            </Grid>
            <Grid item xs="12">
              <img
                src="https://cdn01.alison-static.net/public/html/site/img/homepage/banner-image.svg"
                height={"100%"}
                width={"100%"}
              />
            </Grid>
          </Grid>
          <Grid item xs="5" container></Grid>
        </Grid>
      </Container>
      <Grid
        item
        xs="12"
        container
        justifyContent={"center"}
        alignContent={"center"}
        sx={{ height: "80px", background: "#adbf9f", width: "100%" }}
      >
        <Grid
          item
          xs="4"
          dir={appState.dir}
          container
          height={"100%"} alignItems="center"
          sx={{ borderRight: "3px solid #fff" }}
          justifyContent={"center"}
        >
          <Typography sx={{ fontSize: "17px", fontWeight: "700" }}>
            {dictionary.statisticsTypoOne[appState.lang]}
          </Typography>
          <Rating name="read-only" value={4} readOnly />
          <Typography sx={{ fontSize: "17px", fontWeight: "700" }}>
            {dictionary.statisticsTypoTwo[appState.lang]}
          </Typography>
        </Grid>
        <Grid
          item
          xs="3"
           height={"100%"} alignItems="center"
          container
          dir={appState.dir}
          sx={{ borderRight: "3px solid #fff" }}
          justifyContent={"center"}
        >
          <SvgIcon icon="quiz" color="primary" mx={"5px"} variant="filled" />
          <Typography sx={{ fontSize: "17px", fontWeight: "700" }}>
            {dictionary.statisticsTypoThree[appState.lang]}
          </Typography>
        </Grid>
        <Grid
          item
          xs="3"
           height={"100%"} alignItems="center"
          container
          dir={appState.dir}
          justifyContent={"center"}
        >
          <SvgIcon icon="people" color="primary" mx={"5px"} variant="filled" />
          <Typography sx={{ fontSize: "17px", fontWeight: "700" }}>
            {dictionary.statisticsTypoFour[appState.lang]}
          </Typography>
        </Grid>
      </Grid>
      <Container>
        <Grid container >
          <AboutUs />
        </Grid>
        <Divider />
        <Grid container >
          <ChooseUs />
        </Grid>
        <Divider />
        <Grid container >
          <Features />
        </Grid>
        <Grid container >
          <Courses />
        </Grid>
        <Divider />
      </Container>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <Testimonials />
      </div>
      <Divider />
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <Newsletter />
      </div>
      <div style={{ paddingTop: "50px" }}>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
