import React, { useContext } from "react";
import { Box, Container, Grid, SvgIcon, Typography } from "@basetoolkit/ui";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";

const FeatureData = [
  {
    title: {
      en: "Quick learning",
      ar: "التعلم السريع",
    },
    desc: {
      en: "Experience a personalized learning journey that optimizes your study efforts and propels your progress.",
      ar: "قم بتجربة رحلة تعليمية مخصصة تعمل على تحسين جهودك الدراسية وتعزز تقدمك.",
    },
    icon: <SvgIcon icon="drafts" variant="outlined" fontSize= {40} color= "primary" />,
  },
  {
    title: {
      en: "All Time Support",
      ar: "دعم طوال الوقت",
    },
    desc: {
      en: "Uninterrupted Assistance Whenever You Need It: Our Online Adaptive Exam Platform is Here to Support You Around the Clock.",
      ar: "مساعدة غير منقطعة متى احتجت إليها و منصة الاختبارات التكيفية عبر الإنترنت الخاصة بنا موجودة لمساعدتك على مدار الساعة.",
    },
    icon: <SvgIcon icon="support_agent" variant="outlined" fontSize= {40} color= "primary" />,
  },
  {
    title: {
      en: "Certification",
      ar: "الشهادة",
    },
    desc: {
      en: "Validate Your Success with Our Platform's Recognized Exam Certificates.",
      ar: "تحقق من نجاحك من خلال شهادات الامتحان المعترف بها لمنصتنا.",
    },
    icon: <SvgIcon icon="school" variant="outlined" fontSize= {40} color= "primary" />,
  },
];

const Features = () => {
  const { appState } = useContext(AppContext);

  return (
    <Box component="section" dir={appState.dir} sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4}>
          {FeatureData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  px: 3,
                  py: 4,
                  border: "1px solid #eaeaea",
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              >
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography variant="h5" gutterBottom>
                  {item.title[appState.lang]}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "gray", fontWeight: 400 }}
                >
                  {item.desc[appState.lang]}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
