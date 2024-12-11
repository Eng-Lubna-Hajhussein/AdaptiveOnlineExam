import React, { useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Carousel,
  alpha,
  keyframes,
} from "@basetoolkit/ui";
import { carouselClasses } from "@basetoolkit/ui/classes";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";

const indicatorTransition = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
`;

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

  const slides = [
    dictionary.clientOne,
    dictionary.clientTwo,
    dictionary.clientThree,
  ].map((client, index) => ({
    content: (
      <Box key={index} color="black" dir={appState.dir} px={4}>
        <Typography
          variant="h5"
          color="black"
          mb={1}
          fontWeight={600}
          fontSize={20}
          textAlign="start"
        >
          {client.title[appState.lang]}
        </Typography>
        <Typography variant="body1" fontSize={14} mb={2} textAlign="start">
          {client.desc[appState.lang]}
        </Typography>
        <Box>
          <Typography
            variant="h6"
            fontSize={20}
            fontWeight={600}
            textAlign="start"
          >
            {client.name[appState.lang]}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="start">
            {client.location[appState.lang]}
          </Typography>
        </Box>
      </Box>
    ),
  }));

  return (
    <Box
      component="section"
      dir={appState.dir}
      sx={{
        py: 8,
        textAlign: "center",
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://cdn01.alison-static.net/public/html/site/img/homepage/earn-1.svg"
              alt="Testimonials"
              sx={{
                width: "100%",
                borderRadius: "8px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#e92239",
                mb: 4,
                textAlign: appState.dir === "rtl" ? "right" : "left",
              }}
            >
              {dictionary.title[appState.lang]}
            </Typography>

            <Carousel
              slides={slides}
              slidesPerView={1}
              autoShow={true}
              interval={3000}
              width={"100%"}
              sx={{
                [`& .${carouselClasses.slideContent}`]: {
                  width: "100%",
                  height: "auto",
                },
                [`& .${carouselClasses.next},& .${carouselClasses.prev}`]: {
                  display: "none",
                },

                [`& .${carouselClasses.indicators}`]: {
                  position: "absolute",
                  bottom: "6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "8px",
                },
                [`& .${carouselClasses.indicator}`]: {
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.5), //"rgba(0, 0, 0, 0.5)",
                  cursor: "pointer",
                  "&.active": {
                    bgcolor: (theme) => theme.palette.primary.main,
                    animation: `${indicatorTransition} 0.8s ease-in-out infinite`,
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
