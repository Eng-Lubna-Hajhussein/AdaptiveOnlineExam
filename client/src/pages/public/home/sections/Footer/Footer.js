import React, { useContext } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@basetoolkit/ui";
import { AppContext } from "../../../../../contextapi/contexts/AppContext";
import logo from "../../../../../assets/logo.png";

const footerQuickLinks = [
  {
    display: {
      en: "Home",
      ar: "الصفحة الرئيسية",
    },
    url: "#",
  },
  {
    display: {
      en: "About US",
      ar: "من نحن؟",
    },
    url: "#",
  },
  {
    display: {
      en: "Exams",
      ar: "الامتحانات",
    },
    url: "#",
  },
  {
    display: {
      en: "Blog",
      ar: "المدونة",
    },
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
    url: "#",
  },
  {
    display: { en: "Membership", ar: "العضوية" },
    url: "#",
  },
  {
    display: { en: "Purchases Guide", ar: "دليل الاشتراكات المدفوعة" },
    url: "#",
  },
  {
    display: { en: "Terms of Service", ar: "شروط الاستخدام" },
    url: "#",
  },
];

const Footer = () => {
  const { appState } = useContext(AppContext);
  const dictionary = {
    followUs: {
      en: "Follow us on social media",
      ar: "تابعنا على مواقع التواصل الاجتماعي",
    },
    explore: {
      en: "Explore",
      ar: "تصفح",
    },
    info: {
      en: "Information",
      ar: "معلوماتنا",
    },
    getInTouch: {
      en: "Get in Touch",
      ar: "تواصل معنا",
    },
  };

  const svgIcons = {
    facebook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="black"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a6 6 0 00-6 6v3H6v4h3v9h4v-9h3l1-4h-4V8a2 2 0 012-2h3V2z" />
      </svg>
    ),
    instagram: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="black"
        viewBox="0 0 24 24"
      >
        <path d="M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6zm4 14a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4v8zm-6-6a4 4 0 110 8 4 4 0 010-8zm3-2a1 1 0 110-2 1 1 0 010 2z" />
      </svg>
    ),
    youtube: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="black"
        viewBox="0 0 24 24"
      >
        <path d="M19.615 3.184c-.586-.223-1.212-.31-2.136-.34C15.214 2.769 12 2.769 12 2.769h-.001s-3.214 0-5.479.075c-.924.03-1.55.117-2.136.34a4.616 4.616 0 00-1.708 1.708C2.523 5.478 2.432 6.93 2.4 8.782 2.366 10.654 2.366 12 2.366 12s0 1.346.034 3.218c.032 1.852.123 3.304.677 4.148a4.616 4.616 0 001.708 1.708c.586.223 1.212.31 2.136.34 2.264.075 5.479.075 5.479.075s3.214 0 5.479-.075c.924-.03 1.55-.117 2.136-.34a4.616 4.616 0 001.708-1.708c.554-.844.645-2.296.677-4.148.034-1.872.034-3.218.034-3.218s0-1.346-.034-3.218c-.032-1.852-.123-3.304-.677-4.148a4.616 4.616 0 00-1.708-1.708zM10.001 15.253v-6.507L15.547 12 10.001 15.253z" />
      </svg>
    ),
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="black"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5V9c-4.09 0-7.7-2.18-10-5.5A4.48 4.48 0 001.64 8c-.1 2.2 1.5 4.3 3.9 4.8A4.48 4.48 0 01.88 13v.05c2.28 1.4 4.88 2.2 7.61 2.2A9.05 9.05 0 010 20.29 12.83 12.83 0 006.29 22c7.5 0 11.58-6.22 11.58-11.58 0-.17 0-.34-.01-.51A8.18 8.18 0 0023 3z" />
      </svg>
    ),
  };

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#f9f9f9", py: 6 }}
      dir={appState.dir}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3} container justifyContent="center">
            <Box>
              <img
                src={logo}
                alt="Logo"
                style={{ width: "150px", height: "60px" }}
              />
            </Box>
            <Typography variant="body2" fontWeight={"bold"} mt={2}>
              {dictionary.followUs[appState.lang]}
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                color="primary"
              >
                {svgIcons.facebook}
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                color="primary"
              >
                {svgIcons.instagram}
              </IconButton>
              <IconButton
                href="https://youtube.com"
                target="_blank"
                color="primary"
              >
                {svgIcons.youtube}
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                color="primary"
              >
                {svgIcons.twitter}
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" mb={2}>
              {dictionary.explore[appState.lang]}
            </Typography>
            {footerQuickLinks.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                underline="always"
                color="primary"
                fontSize={"15px"}
                sx={{ display: "block", mb: 1 }}
              >
                {item.display[appState.lang]}
              </Link>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" mb={2}>
              {dictionary.info[appState.lang]}
            </Typography>
            {footerInfoLinks.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                underline="always"
                color="primary"
                fontSize={"15px"}
                sx={{ display: "block", mb: 1 }}
              >
                {item.display[appState.lang]}
              </Link>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" mb={2}>
              {dictionary.getInTouch[appState.lang]}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {appState.lang === "en" ? "Address" : "الموقع"}:{" "}
              <span style={{ fontSize: "14px" }}>
                {appState.lang === "en" ? "Jordan, Amman" : "الاردن، عمان"}
              </span>
            </Typography>
            <Typography variant="body2">
              {appState.lang === "en" ? "Phone" : "رقم الهاتف"}:{" "}
              <span style={{ fontSize: "14px" }}>+962 79 765 787</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
