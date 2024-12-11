import React, { useContext, useState } from "react";
import { Box, Grid, Typography, Container, SvgIcon } from "@basetoolkit/ui";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";
import video from "../../../../../assets/video1.mov";

const ChooseUs = () => {
  const { appState } = useContext(AppContext);
  const [showVideo, setShowVideo] = useState(false);

  const dictionary = {
    title: {
      en: "Why Choose Us?",
      ar: "لماذا نحن؟",
    },
    desc: {
      en: "Our platform offers a tailored approach to learning through adaptive exams. Say goodbye to one-size-fits-all assessments and embrace a learning journey designed specifically for your strengths and areas of improvement.",
      ar: "تقدم منصتنا نهجًا مخصصًا للتعلم من خلال الاختبارات التكيفية. قل وداعًا للتقييمات ذات الحجم الواحد الذي يناسب الجميع واحتضن رحلة تعلم مصممة خصيصًا لنقاط القوة لديك ومجالات التحسين.",
    },
  };

  return (
    <Box component="section" dir={appState.dir} sx={{ py: 8 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "primary",
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
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                textAlign: "center",
              }}
            >
              <video
                src={video}
                controls={showVideo}
                style={{
                  width: "100%",
                  height: "350px",
                  borderRadius: "8px",
                }}
                onClick={() => setShowVideo(true)}
              />
              {!showVideo && (
                <Box
                  onClick={() => setShowVideo(true)}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    cursor: "pointer",
                  }}
                >
                  <SvgIcon
                    icon="play_circle_outline"
                    color="primary.main"
                    fontSize={64}
                  />
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChooseUs;
