import React, { useContext } from "react";
import { Box, Grid, Typography, Container } from "@basetoolkit/ui";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";

const AboutUs = () => {
  const { appState } = useContext(AppContext);

  const dictionary = {
    title: {
      en: "About Us",
      ar: "من نحن؟",
    },
    desc: {
      en: "Welcome to the About Us section. We are a group of University of Jordan students who have developed an online adaptive exam platform as part of our graduation project. Our platform is designed to recognize both the strengths and weaknesses of each test taker, providing a tailored exam experience. Learn more about our project, which focuses on practical application and innovation in the field of education.",
      ar: "مرحبا بكم في صفحة من نحن. نحن مجموعة من طلاب الجامعة الأردنية الذين طوروا منصة امتحانات تكيفية عبر الإنترنت كجزء من مشروع التخرج. تم تصميم منصتنا للتعرف على نقاط القوة والضعف لكل متقدم للاختبار ، مما يوفر تجربة اختبار مخصصة. تعرف على المزيد حول مشروعنا الذي يركز على التطبيق العملي والابتكار في مجال التعليم.",
    },
  };

  return (
    <Box component="section" dir={appState.dir} sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: "center",
                maxWidth: "100%",
              }}
            >
              <img
                src="https://cdn01.alison-static.net/public/html/site/img/homepage/earn-2.svg"
                alt="About Us"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "#e92239",
                  fontWeight: "bold",
                  textAlign: appState.dir === "rtl" ? "right" : "left",
                }}
              >
                {dictionary.title[appState.lang]}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  textAlign: appState.dir === "rtl" ? "right" : "left",
                }}
              >
                {dictionary.desc[appState.lang]}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
